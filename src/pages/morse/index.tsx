import Page from '@/components/page/DefaultPage';
import { Delete, Mic, Square, Trash2, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const MORSE: Record<string, string> = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z',
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
    '.-.-.-': '.', '--..--': ',', '..--..': '?', '-.-.--': '!',
    '-....-': '-', '-..-.': '/', '.--.-.': '@',
};

const TO_MORSE: Record<string, string> = Object.fromEntries(
    Object.entries(MORSE).map(([code, letter]) => [letter, code])
);

const LETTERS: [string, string][] = [
    ['A', '.-'], ['B', '-...'], ['C', '-.-.'], ['D', '-..'], ['E', '.'],
    ['F', '..-.'], ['G', '--.'], ['H', '....'], ['I', '..'], ['J', '.---'],
    ['K', '-.-'], ['L', '.-..'], ['M', '--'], ['N', '-.'], ['O', '---'],
    ['P', '.--.'], ['Q', '--.-'], ['R', '.-.'], ['S', '...'], ['T', '-'],
    ['U', '..-'], ['V', '...-'], ['W', '.--'], ['X', '-..-'], ['Y', '-.--'],
    ['Z', '--..'],
    ['0', '-----'], ['1', '.----'], ['2', '..---'], ['3', '...--'], ['4', '....-'],
    ['5', '.....'], ['6', '-....'], ['7', '--...'], ['8', '---..'], ['9', '----.'],
];

type Classification = '.' | '-';

const iconBtnStyle: React.CSSProperties = {
    width: 44, height: 44, display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center',
    padding: 0,
};

const kbdStyle: React.CSSProperties = {
    fontFamily: 'ui-monospace, monospace',
    fontSize: '0.9em',
    padding: '1px 6px',
    border: '1px solid #cbd5e1',
    borderBottomWidth: 2,
    borderRadius: 4,
    background: '#f8fafc',
    color: '#334155',
};

export default function MorsePage() {
    const [listening, setListening] = useState(false);
    const [permissionError, setPermissionError] = useState<string | null>(null);
    const [decoded, setDecoded] = useState<string>('');
    const [currentLetter, setCurrentLetter] = useState<string>('');
    const [volume, setVolume] = useState<number>(0);
    const volumeBarRef = useRef<HTMLDivElement | null>(null);
    const lastVolumeUpdateRef = useRef<number>(0);
    const thresholdTrackRef = useRef<HTMLDivElement | null>(null);
    const [draggingThreshold, setDraggingThreshold] = useState(false);
    const [hoveringThreshold, setHoveringThreshold] = useState(false);
    const [flash, setFlash] = useState<Classification | null>(null);

    // Adjustable params (persisted to localStorage)
    const [noiseThreshold, setNoiseThreshold] = useState<number>(0.03);
    const [unitMs, setUnitMs] = useState<number>(92); // nominal dot duration
    const [prefsLoaded, setPrefsLoaded] = useState(false);

    useEffect(() => {
        try {
            const t = localStorage.getItem('morse.noiseThreshold');
            const u = localStorage.getItem('morse.unitMs');
            if (t != null) {
                const v = parseFloat(t);
                if (!isNaN(v) && v >= 0 && v <= 0.3) setNoiseThreshold(v);
            }
            if (u != null) {
                const v = parseInt(u);
                if (!isNaN(v) && v > 0 && v <= 2000) setUnitMs(v);
            }
        } catch {}
        setPrefsLoaded(true);
    }, []);

    useEffect(() => {
        if (!prefsLoaded) return;
        try { localStorage.setItem('morse.noiseThreshold', String(noiseThreshold)); } catch {}
    }, [noiseThreshold, prefsLoaded]);

    useEffect(() => {
        if (!prefsLoaded) return;
        try { localStorage.setItem('morse.unitMs', String(unitMs)); } catch {}
    }, [unitMs, prefsLoaded]);

    // Playback
    const [sampleText, setSampleText] = useState<string>('hello');
    const [playing, setPlaying] = useState<boolean>(false);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const playCtxRef = useRef<AudioContext | null>(null);
    const playStopRef = useRef<(() => void) | null>(null);

    // Refs for realtime use — state setters are too slow / cause stale closures
    const audioCtxRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const rafRef = useRef<number | null>(null);

    const noiseThresholdRef = useRef(noiseThreshold);
    const unitMsRef = useRef(unitMs);
    useEffect(() => { noiseThresholdRef.current = noiseThreshold; }, [noiseThreshold]);
    useEffect(() => { unitMsRef.current = unitMs; }, [unitMs]);

    // Detection state machine
    const soundingRef = useRef(false);
    const burstStartRef = useRef(0);
    const lastSoundEndRef = useRef(0);
    const currentLetterRef = useRef<string>('');
    const letterFinalizedRef = useRef(true); // whether current gap has already produced a letter
    const wordBoundaryAddedRef = useRef(true);

    function decodeLetter(pattern: string): string {
        if (!pattern) return '';
        return MORSE[pattern] || '?';
    }

    function finalizeLetter() {
        const p = currentLetterRef.current;
        if (!p) return;
        const letter = decodeLetter(p);
        currentLetterRef.current = '';
        setCurrentLetter('');
        setDecoded(prev => prev + letter);
        letterFinalizedRef.current = true;
    }

    function tick() {
        const analyser = analyserRef.current;
        if (!analyser) return;

        const buf = new Float32Array(analyser.fftSize);
        analyser.getFloatTimeDomainData(buf);
        // RMS
        let sum = 0;
        for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
        const rms = Math.sqrt(sum / buf.length);
        // Live DOM update — bypasses React's render cycle for smooth realtime feedback
        if (volumeBarRef.current) {
            const pct = Math.min(1, rms / 0.3) * 100;
            volumeBarRef.current.style.width = `${pct}%`;
            volumeBarRef.current.style.background = rms > noiseThresholdRef.current ? '#22c55e' : '#9ca3af';
        }
        // Throttle React state update to ~10Hz — used only to re-color the flash dot / tip text
        const now0 = performance.now();
        if (now0 - lastVolumeUpdateRef.current > 100) {
            lastVolumeUpdateRef.current = now0;
            setVolume(rms);
        }

        const now = performance.now();
        const threshold = noiseThresholdRef.current;
        const unit = unitMsRef.current;
        const sounding = rms > threshold;

        if (sounding && !soundingRef.current) {
            // sound started
            soundingRef.current = true;
            burstStartRef.current = now;
        } else if (!sounding && soundingRef.current) {
            // sound ended
            soundingRef.current = false;
            const dur = now - burstStartRef.current;
            // reject very short spikes (likely noise)
            if (dur >= Math.max(30, unit * 0.25)) {
                const dotDashBoundary = unit * 1.8;
                const cls: Classification = dur < dotDashBoundary ? '.' : '-';
                currentLetterRef.current += cls;
                setCurrentLetter(currentLetterRef.current);
                lastSoundEndRef.current = now;
                letterFinalizedRef.current = false;
                wordBoundaryAddedRef.current = false;
                // visual flash
                setFlash(cls);
                window.setTimeout(() => setFlash(null), 120);
            }
        } else if (!sounding && !soundingRef.current) {
            // gap — check boundaries
            const gap = now - lastSoundEndRef.current;
            const letterGap = unit * 3.5;
            const wordGap = unit * 8;
            if (!letterFinalizedRef.current && gap > letterGap && currentLetterRef.current) {
                finalizeLetter();
            }
            if (letterFinalizedRef.current && !wordBoundaryAddedRef.current && gap > wordGap) {
                setDecoded(prev => (prev.endsWith(' ') ? prev : prev + ' '));
                wordBoundaryAddedRef.current = true;
            }
        }

        rafRef.current = requestAnimationFrame(tick);
    }

    async function start() {
        setPermissionError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: {
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false,
            } });
            streamRef.current = stream;
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            audioCtxRef.current = ctx;
            const src = ctx.createMediaStreamSource(stream);
            const analyser = ctx.createAnalyser();
            analyser.fftSize = 1024;
            analyser.smoothingTimeConstant = 0.1;
            src.connect(analyser);
            analyserRef.current = analyser;
            // reset detection
            soundingRef.current = false;
            burstStartRef.current = 0;
            lastSoundEndRef.current = performance.now();
            currentLetterRef.current = '';
            letterFinalizedRef.current = true;
            wordBoundaryAddedRef.current = true;
            setCurrentLetter('');
            setListening(true);
            rafRef.current = requestAnimationFrame(tick);
        } catch (err: any) {
            setPermissionError(err?.message || 'Could not access microphone');
        }
    }

    function stop() {
        if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        streamRef.current?.getTracks().forEach(t => t.stop());
        streamRef.current = null;
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        analyserRef.current = null;
        if (volumeBarRef.current) {
            volumeBarRef.current.style.width = '0%';
            volumeBarRef.current.style.background = '#9ca3af';
        }
        setVolume(0);
        // if a letter is pending, flush it
        if (currentLetterRef.current) finalizeLetter();
        setListening(false);
    }

    useEffect(() => {
        return () => {
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
            streamRef.current?.getTracks().forEach(t => t.stop());
            audioCtxRef.current?.close();
            playStopRef.current?.();
            playCtxRef.current?.close().catch(() => {});
        };
    }, []);

    useEffect(() => {
        if (!draggingThreshold) return;
        function updateFromX(clientX: number) {
            const rect = thresholdTrackRef.current?.getBoundingClientRect();
            if (!rect) return;
            const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            setNoiseThreshold(Number((ratio * 0.3).toFixed(3)));
        }
        function onMove(e: PointerEvent) { updateFromX(e.clientX); }
        function onUp() { setDraggingThreshold(false); }
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        return () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };
    }, [draggingThreshold]);

    useEffect(() => {
        // Space acts as a straight-key Morse input: hold = tone, release = burst.
        let pressing = false;
        let pressStart = 0;
        let gapTimer: number | null = null;
        let keyCtx: AudioContext | null = null;
        let keyOsc: OscillatorNode | null = null;
        let keyGain: GainNode | null = null;

        function isTypingTarget(t: EventTarget | null) {
            const el = t as HTMLElement | null;
            if (!el) return false;
            const tag = el.tagName;
            return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
        }

        function startKeyTone() {
            try {
                const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = 600;
                const now = ctx.currentTime;
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.2, now + 0.005);
                osc.connect(gain).connect(ctx.destination);
                osc.start();
                keyCtx = ctx; keyOsc = osc; keyGain = gain;
            } catch {}
        }

        function stopKeyTone() {
            if (!keyCtx || !keyOsc || !keyGain) return;
            const ctx = keyCtx, osc = keyOsc, gain = keyGain;
            keyCtx = null; keyOsc = null; keyGain = null;
            const now = ctx.currentTime;
            try {
                gain.gain.cancelScheduledValues(now);
                gain.gain.setValueAtTime(gain.gain.value, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.01);
                osc.stop(now + 0.02);
            } catch {}
            window.setTimeout(() => { ctx.close().catch(() => {}); }, 60);
        }

        function scheduleGapFinalization() {
            if (gapTimer != null) window.clearTimeout(gapTimer);
            const unit = unitMsRef.current;
            const letterGap = unit * 3.5;
            const wordGap = unit * 8;
            gapTimer = window.setTimeout(() => {
                if (!letterFinalizedRef.current && currentLetterRef.current) finalizeLetter();
                gapTimer = window.setTimeout(() => {
                    if (letterFinalizedRef.current && !wordBoundaryAddedRef.current) {
                        setDecoded(prev => (prev.endsWith(' ') ? prev : prev + ' '));
                        wordBoundaryAddedRef.current = true;
                    }
                }, Math.max(0, wordGap - letterGap));
            }, letterGap);
        }

        function onKeyDown(e: KeyboardEvent) {
            if (isTypingTarget(e.target)) return;
            if (e.code === 'Escape') {
                e.preventDefault();
                clearText();
                return;
            }
            if (e.code === 'Backspace' || e.code === 'Delete') {
                e.preventDefault();
                deleteCharacter();
                return;
            }
            if (e.code !== 'Space') return;
            e.preventDefault();
            if (e.repeat || pressing) return;
            pressing = true;
            pressStart = performance.now();
            if (gapTimer != null) { window.clearTimeout(gapTimer); gapTimer = null; }
            startKeyTone();
        }

        function onKeyUp(e: KeyboardEvent) {
            if (e.code !== 'Space') return;
            if (!pressing) return;
            pressing = false;
            const dur = performance.now() - pressStart;
            stopKeyTone();
            const unit = unitMsRef.current;
            const dotDashBoundary = unit * 1.8;
            const cls: Classification = dur < dotDashBoundary ? '.' : '-';
            currentLetterRef.current += cls;
            setCurrentLetter(currentLetterRef.current);
            setFlash(cls);
            window.setTimeout(() => setFlash(null), 120);
            letterFinalizedRef.current = false;
            wordBoundaryAddedRef.current = false;
            lastSoundEndRef.current = performance.now();
            scheduleGapFinalization();
        }

        function onBlur() {
            if (pressing) { pressing = false; stopKeyTone(); }
        }

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('blur', onBlur);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            window.removeEventListener('blur', onBlur);
            if (gapTimer != null) window.clearTimeout(gapTimer);
            stopKeyTone();
        };
    }, []);

    function clearText() {
        setDecoded('');
        setCurrentLetter('');
        currentLetterRef.current = '';
        letterFinalizedRef.current = true;
        wordBoundaryAddedRef.current = true;
    }

    function deleteCharacter() {
        if (currentLetterRef.current) {
            currentLetterRef.current = currentLetterRef.current.slice(0, -1);
            setCurrentLetter(currentLetterRef.current);
            return;
        }
        setDecoded(prev => {
            if (prev.endsWith(' ')) return prev.slice(0, -2);
            return prev.slice(0, -1);
        });
    }

    function stopPlay() {
        playStopRef.current?.();
        playStopRef.current = null;
        playCtxRef.current?.close().catch(() => {});
        playCtxRef.current = null;
        setPlaying(false);
        setPlayingIndex(null);
    }

    function playMorse(text: string) {
        stopPlay();
        const unit = unitMsRef.current / 1000; // seconds
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        playCtxRef.current = ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 600;
        gain.gain.setValueAtTime(0, ctx.currentTime);
        osc.connect(gain).connect(ctx.destination);
        osc.start();

        let t = ctx.currentTime + 0.05;
        const attack = 0.005;
        const release = 0.005;
        const pulse = (durUnits: number) => {
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.25, t + attack);
            gain.gain.setValueAtTime(0.25, t + durUnits * unit - release);
            gain.gain.linearRampToValueAtTime(0, t + durUnits * unit);
            t += durUnits * unit;
        };
        const silence = (durUnits: number) => {
            t += durUnits * unit;
        };

        const timerIds: number[] = [];
        const scheduleHighlight = (audioTime: number, idx: number | null) => {
            const delayMs = Math.max(0, (audioTime - ctx.currentTime) * 1000);
            timerIds.push(window.setTimeout(() => setPlayingIndex(idx), delayMs));
        };

        const upper = text.toUpperCase();
        let prevWasLetter = false;
        for (let i = 0; i < upper.length; i++) {
            const ch = upper[i];
            if (/\s/.test(ch)) {
                if (prevWasLetter) silence(7); // word gap
                prevWasLetter = false;
                continue;
            }
            const code = TO_MORSE[ch];
            if (!code) continue;
            if (prevWasLetter) silence(3); // inter-letter gap
            scheduleHighlight(t, i);
            [...code].forEach((sym, si) => {
                pulse(sym === '.' ? 1 : 3);
                if (si < code.length - 1) silence(1);
            });
            prevWasLetter = true;
        }

        const endAt = t + 0.1;
        osc.stop(endAt);
        setPlaying(true);
        setPlayingIndex(null);
        const durationMs = Math.max(0, (endAt - ctx.currentTime) * 1000);
        const endTimer = window.setTimeout(() => {
            if (playCtxRef.current === ctx) {
                ctx.close().catch(() => {});
                playCtxRef.current = null;
                setPlaying(false);
                setPlayingIndex(null);
                playStopRef.current = null;
            }
        }, durationMs);
        timerIds.push(endTimer);
        playStopRef.current = () => {
            timerIds.forEach(id => window.clearTimeout(id));
            try { osc.stop(); } catch {}
            setPlayingIndex(null);
        };
    }

    function playLetterStandalone(letter: string) {
        const code = TO_MORSE[letter.toUpperCase()];
        if (!code) return;
        const unit = unitMsRef.current / 1000;
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 600;
        gain.gain.setValueAtTime(0, ctx.currentTime);
        osc.connect(gain).connect(ctx.destination);
        osc.start();

        let t = ctx.currentTime + 0.02;
        const attack = 0.005;
        const release = 0.005;
        [...code].forEach((sym, si) => {
            const durUnits = sym === '.' ? 1 : 3;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.25, t + attack);
            gain.gain.setValueAtTime(0.25, t + durUnits * unit - release);
            gain.gain.linearRampToValueAtTime(0, t + durUnits * unit);
            t += durUnits * unit;
            if (si < code.length - 1) t += unit; // intra-letter gap
        });
        osc.stop(t + 0.05);
        const totalMs = Math.max(0, (t + 0.1 - ctx.currentTime) * 1000);
        window.setTimeout(() => ctx.close().catch(() => {}), totalMs);
    }

    // Volume bar: threshold indicator (live bar updates directly in tick)
    const thresholdPct = Math.min(1, noiseThreshold / 0.3) * 100;

    return <Page bottomPadding
        seo={{
            title: 'Morse | Joel Grayson',
            description: 'Speak Morse code out loud (dun dun dun) and this page transcribes it live. Built for hobbyist EEs and Morse learners.',
            favicon: '/image/home/morse.jpg',
        }}
        pathname='/morse'
    >
        <h1 className='mt-8 mb-2 text-center flex items-center justify-center gap-5'>
            <span className='morse-portrait inline-block relative bottom-1' style={{ width: 60, height: 60, position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
                <Image alt='Morse portrait' width={60} height={60} src='/image/morse/face.png'
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
                <Image alt='' aria-hidden='true' width={60} height={60} src='/image/morse/glasses.png'
                    className='morse-glasses'
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%',
                        transition: 'transform 180ms ease-out',
                    }} />
            </span>
            Morse Code
            <style>{`
                .morse-portrait:hover .morse-glasses { transform: translateY(-8%) rotate(6deg); }
            `}</style>
        </h1>

        <div style={{ maxWidth: 720, margin: '24px auto 0', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 10, alignItems: 'center' }}>
            <label style={{ fontSize: 13, color: '#555' }}>Dot length</label>
            <input type='range' min={20} max={600} step={1}
                value={unitMs}
                onChange={e => setUnitMs(parseInt(e.target.value))}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <input type='number' min={1} max={2000} step={1}
                    value={unitMs}
                    onChange={e => {
                        const v = parseInt(e.target.value);
                        if (!isNaN(v) && v > 0) setUnitMs(v);
                    }}
                    style={{
                        width: 60, padding: '2px 6px', fontSize: 12,
                        border: '1px solid #cbd5e1', borderRadius: 4,
                        fontFamily: 'ui-monospace, monospace', textAlign: 'right',
                    }}
                />
                <span style={{ fontSize: 12, color: '#666' }}>
                    ms ({(1200 / unitMs).toFixed(1)} WPM)
                </span>
            </div>
        </div>

        <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
            <h3 style={{ marginBottom: 8 }}>Enter Morse</h3>
            <p className='text-gray-600'>
                Tap <kbd style={kbdStyle}>space</kbd> key on your keyboard to key in morse code or press{' '}
                <Mic size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-0.2em' }} />
                {' '}and say morse code out loud.
            </p>
        </div>

        <div className='flex gap-3' style={{ maxWidth: 720, margin: '8px auto 0', alignItems: 'center' }}>
            {!listening
                ? <button className='button' onClick={start} title='Start listening' aria-label='Start listening' style={iconBtnStyle}>
                    <Mic size={22} />
                </button>
                : <button className='button' onClick={stop} title='Stop listening' aria-label='Stop listening' style={iconBtnStyle}>
                    <Square size={22} fill='currentColor' />
                </button>
            }
            <button className='button' onClick={deleteCharacter} disabled={!decoded && !currentLetter}
                title='Delete last dot/dash or character' aria-label='Delete last dot/dash or character' style={iconBtnStyle}>
                <Delete size={22} />
            </button>
            <button className='button' onClick={clearText} title='Clear all text' aria-label='Clear all text' style={iconBtnStyle}>
                <Trash2 size={22} />
            </button>

            <div ref={thresholdTrackRef} style={{
                position: 'relative', flex: 1, height: 24, marginLeft: 8,
                background: '#eee', borderRadius: 4,
                overflow: 'visible',
            }}>
                    <div style={{
                        position: 'absolute', inset: 0, borderRadius: 4, overflow: 'hidden',
                    }}>
                        <div ref={volumeBarRef} style={{
                            position: 'absolute', left: 0, top: 0, bottom: 0,
                            width: '0%',
                            background: '#9ca3af',
                        }} />
                    </div>
                    <div
                        onPointerDown={e => {
                            e.preventDefault();
                            (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
                            setDraggingThreshold(true);
                            const rect = thresholdTrackRef.current?.getBoundingClientRect();
                            if (rect) {
                                const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                                setNoiseThreshold(Number((ratio * 0.3).toFixed(3)));
                            }
                        }}
                        onPointerEnter={() => setHoveringThreshold(true)}
                        onPointerLeave={() => setHoveringThreshold(false)}
                        style={{
                            position: 'absolute', top: -6, bottom: -6,
                            left: `calc(${thresholdPct}% - 9px)`, width: 18,
                            cursor: 'ew-resize', touchAction: 'none',
                        }}
                    >
                        <div style={{
                            position: 'absolute', left: 8, top: 0, bottom: 0, width: 2,
                            background: '#ef4444',
                        }} />
                    </div>
                    {(hoveringThreshold || draggingThreshold) && (
                        <div style={{
                            position: 'absolute',
                            bottom: 'calc(100% + 8px)',
                            left: `${thresholdPct}%`,
                            transform: 'translateX(-50%)',
                            background: '#111827', color: 'white',
                            padding: '6px 8px', borderRadius: 6,
                            display: 'flex', alignItems: 'center', gap: 6,
                            whiteSpace: 'nowrap', fontSize: 12,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 5,
                        }}>
                            <span>Sound Threshold</span>
                            <input type='number' min={0} max={0.3} step={0.001}
                                value={noiseThreshold}
                                onChange={e => {
                                    const v = parseFloat(e.target.value);
                                    if (!isNaN(v)) setNoiseThreshold(Math.max(0, Math.min(0.3, v)));
                                }}
                                onPointerDown={e => e.stopPropagation()}
                                style={{
                                    width: 64, padding: '2px 4px', fontSize: 12,
                                    border: '1px solid #374151', borderRadius: 3,
                                    fontFamily: 'ui-monospace, monospace', textAlign: 'right',
                                    background: 'white', color: '#111827',
                                }}
                            />
                            <div style={{
                                position: 'absolute', top: '100%', left: '50%',
                                transform: 'translateX(-50%)',
                                width: 0, height: 0,
                                borderLeft: '5px solid transparent',
                                borderRight: '5px solid transparent',
                                borderTop: '5px solid #111827',
                            }} />
                        </div>
                    )}
                </div>
            <div style={{
                width: 40, height: 40, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 700,
                background: flash === '.' ? '#60a5fa' : flash === '-' ? '#f59e0b' : '#e5e7eb',
                color: flash ? 'white' : '#9ca3af',
                transition: 'background 80ms linear',
            }}>
                {flash === '.' ? '·' : flash === '-' ? '−' : '·'}
            </div>
        </div>

        <div style={{
            maxWidth: 720, margin: '20px auto 0', padding: 16,
            border: '1px solid #ddd', borderRadius: 10, minHeight: 120,
        }}>
            <div style={{
                fontSize: 28, fontWeight: 600, letterSpacing: 2,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                minHeight: 40, wordBreak: 'break-word',
            }}>
                {decoded || <span style={{ color: '#bbb', fontWeight: 400 }}>Decoded text will show here</span>}
            </div>
            {currentLetter && (
                <div style={{
                    marginTop: 12,
                    fontSize: 24, fontFamily: 'ui-monospace, monospace', letterSpacing: 4,
                    color: '#374151',
                }}>
                    {currentLetter}
                    <span style={{ fontSize: 14, color: '#6b7280', marginLeft: 12 }}>
                        (maybe “{decodeLetterPreview(currentLetter)}”)
                    </span>
                </div>
            )}
        </div>

        <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
            <h3 style={{ marginBottom: 8 }}>Play</h3>
            <div style={{
                padding: 12,
                border: '1px dashed #cbd5e1', borderRadius: 10, background: '#f8fafc',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <input
                        type='text'
                        value={sampleText}
                        onChange={e => setSampleText(e.target.value)}
                        placeholder='hello'
                        style={{
                            flex: '1 1 180px', padding: '6px 10px', border: '1px solid #cbd5e1',
                            borderRadius: 6, fontFamily: 'ui-monospace, monospace',
                        }}
                    />
                    {!playing
                        ? <button className='button' onClick={() => playMorse(sampleText || 'hello')}
                            title={`Play at ${unitMs}ms`} aria-label='Play' style={iconBtnStyle}>
                            <Volume2 size={22} />
                        </button>
                        : <button className='button' onClick={stopPlay}
                            title='Stop playback' aria-label='Stop playback' style={iconBtnStyle}>
                            <Square size={22} fill='currentColor' />
                        </button>
                    }
                </div>
                {sampleText && (
                    <div style={{
                        marginTop: 10, padding: '6px 4px',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                        color: '#374151',
                        display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
                        gap: 4,
                    }}>
                        {[...sampleText.toUpperCase()].map((ch, i) => {
                            if (/\s/.test(ch)) return <span key={i} style={{ width: 14 }} />;
                            const morse = TO_MORSE[ch];
                            if (!morse) return null;
                            const active = playingIndex === i;
                            return <span key={i} style={{
                                padding: '3px 6px', borderRadius: 4,
                                background: active ? '#fde047' : 'transparent',
                                display: 'inline-flex', flexDirection: 'column',
                                alignItems: 'center', lineHeight: 1.15,
                                transition: 'background 60ms linear',
                            }}>
                                <span style={{ fontSize: 11, color: active ? '#713f12' : '#6b7280' }}>{ch}</span>
                                <span style={{ fontSize: 18 }}>{morse}</span>
                            </span>;
                        })}
                    </div>
                )}
            </div>
        </div>

        <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
            <h3 style={{ marginBottom: 8 }}>Reference</h3>
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                gap: 6, fontFamily: 'ui-monospace, monospace', fontSize: 14,
            }}>
                {LETTERS.map(([l, c]) => {
                    const highlighted = !!currentLetter && c.startsWith(currentLetter) && currentLetter.length > 0;
                    return <button key={l} onClick={() => playLetterStandalone(l)}
                        title={`Play ${l} (${c})`} aria-label={`Play ${l}`}
                        style={{
                            padding: '6px 10px', border: '1px solid #e5e7eb', borderRadius: 6,
                            display: 'flex', justifyContent: 'space-between', gap: 8,
                            background: highlighted ? '#fef3c7' : 'white',
                            cursor: 'pointer', font: 'inherit', textAlign: 'left',
                        }}>
                        <span style={{ fontWeight: 700 }}>{l}</span>
                        <span style={{ color: '#444' }}>{c}</span>
                    </button>;
                })}
            </div>
        </div>

    </Page>;
}

function decodeLetterPreview(p: string): string {
    return MORSE[p] || '?';
}

function textToMorse(text: string): string {
    return text.toUpperCase().split(/(\s+)/).map(chunk => {
        if (/^\s+$/.test(chunk)) return '  ';
        return [...chunk].map(ch => TO_MORSE[ch] || '').filter(Boolean).join(' ');
    }).join('').trim();
}
