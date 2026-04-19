import Page from '@/components/page/DefaultPage';
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

export default function MorsePage() {
    const [listening, setListening] = useState(false);
    const [permissionError, setPermissionError] = useState<string | null>(null);
    const [decoded, setDecoded] = useState<string>('');
    const [currentLetter, setCurrentLetter] = useState<string>('');
    const [volume, setVolume] = useState<number>(0);
    const [flash, setFlash] = useState<Classification | null>(null);

    // Adjustable params
    const [noiseThreshold, setNoiseThreshold] = useState<number>(0.04);
    const [unitMs, setUnitMs] = useState<number>(150); // nominal dot duration

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
        setVolume(rms);

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

    // Volume bar: clamp rms for display
    const volumePct = Math.min(1, volume / 0.3) * 100;
    const thresholdPct = Math.min(1, noiseThreshold / 0.3) * 100;

    return <Page bottomPadding
        seo={{
            title: 'Morse | Joel Grayson',
            description: 'Speak Morse code out loud (dun dun dun) and this page transcribes it live. Built for hobbyist EEs and Morse learners.',
        }}
        pathname='/morse'
    >
        <h1 className='text-center mt-8 mb-2'>Sing Morse Code</h1>
        <p className='text-center text-gray-600 max-w-2xl mx-auto'>
            Say <b>dun</b> for a dot and <b>dunnn</b> (or <b>daah</b>) for a dash. Pause a beat between letters,
            a longer beat between words. It&apos;s forgiving — stutter and drift as you learn. For hobbyist
            EEs who want to talk Morse out loud with their friends.
        </p>

        <div className='flex justify-center gap-3 mt-6'>
            {!listening
                ? <button className='button' onClick={start}>Start Listening</button>
                : <button className='button' onClick={stop}>Stop</button>
            }
            <button className='button' onClick={deleteCharacter} disabled={!decoded && !currentLetter}>Delete character</button>
            <button className='button' onClick={clearText}>Clear</button>
        </div>

        {permissionError && (
            <p className='text-red-600 text-center mt-3'>{permissionError}</p>
        )}

        <div style={{
            maxWidth: 720, margin: '20px auto 0', padding: 12,
            border: '1px dashed #cbd5e1', borderRadius: 10, background: '#f8fafc',
            display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
        }}>
            <span style={{ fontSize: 13, color: '#555' }}>Hear it first:</span>
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
                ? <button className='button' onClick={() => playMorse(sampleText || 'hello')}>
                    Play at {unitMs}ms
                </button>
                : <button className='button' onClick={stopPlay}>Stop</button>
            }
        </div>

        <div style={{
            maxWidth: 720, margin: '28px auto 0', padding: 16,
            border: '1px solid #ddd', borderRadius: 10, background: '#fafafa',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 90, fontSize: 13, color: '#555' }}>Mic level</div>
                <div style={{
                    position: 'relative', flex: 1, height: 18,
                    background: '#eee', borderRadius: 4, overflow: 'hidden',
                }}>
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: `${volumePct}%`,
                        background: volume > noiseThreshold ? '#22c55e' : '#9ca3af',
                        transition: 'width 40ms linear',
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

            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 110px', gap: 10, alignItems: 'center' }}>
                <label style={{ fontSize: 13, color: '#555' }}>Dot length (ms)</label>
                <input type='range' min={60} max={400} step={10}
                    value={unitMs}
                    onChange={e => setUnitMs(parseInt(e.target.value))}
                />
                <span style={{ fontSize: 12, color: '#666', textAlign: 'right' }}>
                    {unitMs}ms · ~{(1200 / unitMs).toFixed(1)} WPM
                </span>
            </div>

            <div style={{ fontSize: 12, color: '#777', marginTop: 8 }}>
                Bursts shorter than ~{Math.round(unitMs * 1.8)}ms → dot. Longer → dash.
                Pause &gt;{Math.round(unitMs * 3.5)}ms ends a letter. Pause &gt;{unitMs * 8}ms ends a word.
            </div>
        </div>

        <div style={{
            maxWidth: 720, margin: '20px auto 0', padding: 16,
            border: '1px solid #ddd', borderRadius: 10, minHeight: 120,
        }}>
            <div style={{ fontSize: 13, color: '#777', marginBottom: 6 }}>Decoded</div>
            <div style={{
                fontSize: 28, fontWeight: 600, letterSpacing: 2,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                minHeight: 40, wordBreak: 'break-word',
            }}>
                {decoded || <span style={{ color: '#bbb', fontWeight: 400 }}>…</span>}
                <span style={{ color: '#9ca3af' }}>{decoded ? '' : ''}</span>
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color: '#777' }}>In progress</div>
            <div style={{
                fontSize: 24, fontFamily: 'ui-monospace, monospace', letterSpacing: 4,
                minHeight: 32, color: '#374151',
            }}>
                {currentLetter || <span style={{ color: '#bbb' }}>—</span>}
                {currentLetter && <span style={{ fontSize: 14, color: '#6b7280', marginLeft: 12 }}>
                    (maybe “{decodeLetterPreview(currentLetter)}”)
                </span>}
            </div>
        </div>

        <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
            <h3 style={{ marginBottom: 8 }}>Morse reference</h3>
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                gap: 6, fontFamily: 'ui-monospace, monospace', fontSize: 14,
            }}>
                {LETTERS.map(([l, c]) => (
                    <div key={l} style={{
                        padding: '6px 10px', border: '1px solid #eee', borderRadius: 6,
                        display: 'flex', justifyContent: 'space-between', gap: 8,
                        background: currentLetter && c.startsWith(currentLetter) && currentLetter.length > 0 ? '#fef3c7' : 'white',
                    }}>
                        <span style={{ fontWeight: 700 }}>{l}</span>
                        <span style={{ color: '#444' }}>{c}</span>
                    </div>
                ))}
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
