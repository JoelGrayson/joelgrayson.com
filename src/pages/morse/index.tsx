import Page from '@/components/page/DefaultPage';
import { Delete, Mic, Play, Square, Trash2 } from 'lucide-react';
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
    const [flash, setFlash] = useState<Classification | null>(null);

    // Adjustable params
    const [noiseThreshold, setNoiseThreshold] = useState<number>(0.04);
    const [unitMs, setUnitMs] = useState<number>(92); // nominal dot duration

    // Playback
    const [sampleText, setSampleText] = useState<string>('hello');
    const [playing, setPlaying] = useState<boolean>(false);
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
        setDecoded(prev => prev.slice(0, -1));
    }

    function stopPlay() {
        playStopRef.current?.();
        playStopRef.current = null;
        playCtxRef.current?.close().catch(() => {});
        playCtxRef.current = null;
        setPlaying(false);
    }

    function playMorse(text: string) {
        stopPlay();
        const unit = unitMsRef.current / 1000; // seconds
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        playCtxRef.current = ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 600; // classic Morse pitch
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
            gain.gain.setValueAtTime(0, t);
            t += durUnits * unit;
        };

        const words = text.toUpperCase().split(/\s+/).filter(Boolean);
        words.forEach((word, wi) => {
            [...word].forEach((ch, ci) => {
                const code = TO_MORSE[ch];
                if (!code) return;
                [...code].forEach((sym, si) => {
                    pulse(sym === '.' ? 1 : 3);
                    if (si < code.length - 1) silence(1); // intra-letter gap
                });
                if (ci < word.length - 1) silence(3); // inter-letter gap
            });
            if (wi < words.length - 1) silence(7); // inter-word gap
        });

        const endAt = t + 0.1;
        osc.stop(endAt);
        setPlaying(true);
        const durationMs = Math.max(0, (endAt - ctx.currentTime) * 1000);
        const timer = window.setTimeout(() => {
            if (playCtxRef.current === ctx) {
                ctx.close().catch(() => {});
                playCtxRef.current = null;
                setPlaying(false);
                playStopRef.current = null;
            }
        }, durationMs);
        playStopRef.current = () => {
            window.clearTimeout(timer);
            try { osc.stop(); } catch {}
        };
    }

    // Volume bar: threshold indicator (live bar updates directly in tick)
    const thresholdPct = Math.min(1, noiseThreshold / 0.3) * 100;

    return <Page bottomPadding
        seo={{
            title: 'Morse | Joel Grayson',
            description: 'Speak Morse code out loud (dun dun dun) and this page transcribes it live. Built for hobbyist EEs and Morse learners.',
        }}
        pathname='/morse'
    >
        <h1 className='text-center mt-8 mb-2'>Morse Code</h1>
        <p className='text-center text-gray-600 max-w-2xl mx-auto'>
            Hold <kbd style={kbdStyle}>space</kbd> to key Morse, or hit{' '}
            <Mic size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-0.2em' }} />
            {' '}to speak it out loud. It will be transcribed below.
        </p>

        <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
            <h3 style={{ marginBottom: 8 }}>Decode</h3>
        </div>

        <div className='flex gap-3' style={{ maxWidth: 720, margin: '8px auto 0' }}>
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
        </div>

        {permissionError && (
            <p className='text-red-600 text-center mt-3'>{permissionError}</p>
        )}

        <div style={{
            maxWidth: 720, margin: '20px auto 0', padding: 16,
            border: '1px solid #ddd', borderRadius: 10, background: '#fafafa',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 90, fontSize: 13, color: '#555' }}>Mic level</div>
                <div style={{
                    position: 'relative', flex: 1, height: 18,
                    background: '#eee', borderRadius: 4, overflow: 'hidden',
                }}>
                    <div ref={volumeBarRef} style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: '0%',
                        background: '#9ca3af',
                    }} />
                    <div style={{
                        position: 'absolute', top: 0, bottom: 0,
                        left: `${thresholdPct}%`, width: 2,
                        background: '#ef4444',
                    }} title='Noise threshold' />
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

            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 60px', gap: 10, alignItems: 'center', marginBottom: 6 }}>
                <label style={{ fontSize: 13, color: '#555' }}>Noise threshold</label>
                <input type='range' min={0.005} max={0.2} step={0.001}
                    value={noiseThreshold}
                    onChange={e => setNoiseThreshold(parseFloat(e.target.value))}
                />
                <span style={{ fontSize: 12, color: '#666', textAlign: 'right' }}>{noiseThreshold.toFixed(3)}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 150px', gap: 10, alignItems: 'center' }}>
                <label style={{ fontSize: 13, color: '#555' }}>Dot length (ms)</label>
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
            <h3 style={{ marginBottom: 8 }}>Encode (Play)</h3>
            <div style={{
                padding: 12,
                border: '1px dashed #cbd5e1', borderRadius: 10, background: '#f8fafc',
                display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
            }}>
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
                        <Play size={22} fill='currentColor' />
                    </button>
                    : <button className='button' onClick={stopPlay}
                        title='Stop playback' aria-label='Stop playback' style={iconBtnStyle}>
                        <Square size={22} fill='currentColor' />
                    </button>
                }
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
                    return <button key={l} onClick={() => playMorse(l)}
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

        <div style={{ maxWidth: 720, margin: '24px auto 0', fontSize: 13, color: '#666' }}>
            <p><b>Tips:</b></p>
            <ul style={{ listStyle: 'disc', paddingLeft: 20 }}>
                <li>If nothing is registering, lower the noise threshold (slide left) or speak louder.</li>
                <li>If every sound comes out as a dash, lengthen the dot (slide right) or say shorter &quot;dun&quot;s.</li>
                <li>If letters never finalize, shorten the dot setting — letter gap scales with it.</li>
                <li>Tap <b>Delete character</b> to back up one symbol or one decoded letter.</li>
                <li>Uses your mic locally in the browser. No audio is sent anywhere.</li>
            </ul>
        </div>
    </Page>;
}

function decodeLetterPreview(p: string): string {
    return MORSE[p] || '?';
}
