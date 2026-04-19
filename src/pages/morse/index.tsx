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

const DRILL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const DRILL_WORDS = [
    // Short everyday nouns
    'CAT', 'DOG', 'SUN', 'MOON', 'STAR', 'TREE', 'BOOK', 'FISH', 'BIRD', 'LAKE',
    'ROAD', 'CITY', 'HOUSE', 'APPLE', 'BREAD', 'WATER', 'CLOUD', 'RIVER', 'OCEAN', 'STORM',
    'PIANO', 'GUITAR', 'BEACH', 'FOREST', 'MOUNTAIN', 'DESERT', 'VALLEY', 'ISLAND', 'BRIDGE', 'TOWER',
    'WINDOW', 'GARDEN', 'STREET', 'SCHOOL', 'OFFICE', 'COFFEE', 'BUTTER', 'PEPPER', 'CHEESE', 'SUGAR',
    'TRAIN', 'PLANE', 'TRUCK', 'CYCLE', 'BOAT', 'ROCKET', 'ENGINE', 'MOTOR', 'WHEEL', 'CABLE',
    // Adjectives and verbs
    'HAPPY', 'QUICK', 'BRAVE', 'CLEAR', 'SHARP', 'FUNNY', 'SILLY', 'CLEAN', 'FRESH', 'BRIGHT',
    'EARLY', 'LATE', 'LOUD', 'QUIET', 'WARM', 'COLD', 'SOFT', 'HARD', 'FAST', 'SLOW',
    'JUMP', 'WALK', 'RUN', 'SWIM', 'DANCE', 'LAUGH', 'WRITE', 'READ', 'THINK', 'DREAM',
    'BUILD', 'SHINE', 'BREAK', 'CATCH', 'THROW', 'PAINT', 'DRIVE', 'CLIMB', 'LISTEN', 'WATCH',
    // Tech and science
    'CODE', 'WIRE', 'CHIP', 'DATA', 'LOGIC', 'SIGNAL', 'CIRCUIT', 'VOLTAGE', 'CURRENT', 'RESISTOR',
    'ANTENNA', 'RADIO', 'MORSE', 'TELEGRAPH', 'FREQUENCY', 'WAVELENGTH', 'DIODE', 'CAPACITOR',
    // NATO phonetic alphabet (great for practice)
    'ALPHA', 'BRAVO', 'CHARLIE', 'DELTA', 'ECHO', 'FOXTROT', 'GOLF', 'HOTEL', 'INDIA', 'JULIET',
    'KILO', 'LIMA', 'MIKE', 'NOVEMBER', 'OSCAR', 'PAPA', 'QUEBEC', 'ROMEO', 'SIERRA', 'TANGO',
    'UNIFORM', 'VICTOR', 'WHISKEY', 'XRAY', 'YANKEE', 'ZULU',
    // Ham-radio shorthand and fun bits
    'HAM', 'CQ', 'QSL', 'QRZ', 'QTH', 'QSO', 'OM', 'YL', 'DX', 'SOS', 'SKED',
    // Animals
    'LION', 'TIGER', 'BEAR', 'WOLF', 'EAGLE', 'HAWK', 'SHARK', 'WHALE', 'TURTLE', 'RABBIT',
    'HORSE', 'ZEBRA', 'PANDA', 'KOALA', 'DOLPHIN', 'OCTOPUS', 'SPIDER', 'BEETLE', 'FALCON', 'OTTER',
    // Fun / playful
    'PIZZA', 'TACO', 'SUSHI', 'BACON', 'HONEY', 'JELLY', 'MANGO', 'PEACH', 'LEMON', 'GRAPE',
    'WIZARD', 'DRAGON', 'NINJA', 'ROBOT', 'PIRATE', 'KNIGHT', 'CASTLE', 'MAGIC', 'SECRET', 'PUZZLE',
];

const DRILL_SENTENCES = [
    // Greetings
    'HELLO WORLD',
    'GOOD MORNING',
    'GOOD EVENING',
    'GOOD NIGHT',
    'HOW ARE YOU',
    'NICE TO MEET YOU',
    'LONG TIME NO SEE',
    'WELCOME HOME',
    'THANK YOU VERY MUCH',
    'YOU ARE WELCOME',
    'SEE YOU TOMORROW',
    'SEE YOU LATER',
    'TAKE CARE',
    'HAVE A NICE DAY',
    'SLEEP WELL',
    // Ham radio style
    'CALLING CQ',
    'CQ CQ CQ',
    'OVER AND OUT',
    'WHAT IS YOUR LOCATION',
    'SIGNAL REPORT FIVE NINE',
    'NICE COPY THANK YOU',
    'HAPPY HAM RADIO DAY',
    'BEST REGARDS SEVENTY THREE',
    'PLEASE REPEAT YOUR CALL',
    'STATION IS LOUD AND CLEAR',
    // Short sayings / quotes
    'MORSE IS FUN',
    'KEEP IT SIMPLE',
    'PRACTICE MAKES PERFECT',
    'ACTIONS SPEAK LOUDER',
    'BETTER LATE THAN NEVER',
    'TIME FLIES WHEN HAVING FUN',
    'A STITCH IN TIME',
    'NO PAIN NO GAIN',
    'LIFE IS BEAUTIFUL',
    'DREAM BIG WORK HARD',
    'LESS IS MORE',
    'SLOW AND STEADY WINS',
    // The classic
    'THE QUICK BROWN FOX JUMPS',
    'PACK MY BOX WITH FIVE DOZEN',
    'SPHINX OF BLACK QUARTZ',
    // Conversational
    'WHAT TIME IS IT',
    'WHERE ARE YOU GOING',
    'CAN YOU HEAR ME NOW',
    'LOVE CONQUERS ALL',
    'MAY THE FORCE BE WITH YOU',
    'HAPPY BIRTHDAY TO YOU',
    'CONGRATULATIONS ON YOUR WIN',
    'WISHING YOU GOOD LUCK',
    'SEND HELP QUICKLY',
    'MEETING AT NOON',
    'PLEASE CALL BACK LATER',
    'I WILL BE RIGHT THERE',
    'DINNER IS ON ME',
    // Tech / EE fun
    'HELLO FROM THE CIRCUIT',
    'VOLTAGE EQUALS CURRENT TIMES RESISTANCE',
    'OHMS LAW IS MAGIC',
    'THE ANTENNA IS TUNED',
    'POWER ON',
    'SYSTEM ONLINE',
    'TESTING ONE TWO THREE',
    'COMMIT AND PUSH',
    'ALL TESTS PASS',
    'BUILD SUCCEEDED',
    // Adventure
    'INTO THE WILD WE GO',
    'RACE YOU TO THE FINISH',
    'FOLLOW THE NORTH STAR',
    'ADVENTURE IS OUT THERE',
    'THE JOURNEY BEGINS',
    'ONE STEP AT A TIME',
    // Whimsical
    'THE PARROT KNOWS MORSE',
    'BEEP BOOP BEEP',
    'DIT DIT DIT DAH',
    'LONG LIVE THE DOT',
    'DASH DOT DASH',
    'LISTEN TO THE RHYTHM',
    'CAN YOU HEAR THE STARS',
    // Classic SOS and urgency
    'MAYDAY MAYDAY MAYDAY',
    'HELP ME OBI WAN',
    'GONE FISHING',
    'OUT FOR LUNCH',
    'BE BACK SOON',
    // Seasonal / holiday
    'HAPPY NEW YEAR',
    'MERRY CHRISTMAS',
    'SPRING IS HERE',
    'SUMMER VIBES',
    // Encouragement
    'YOU CAN DO THIS',
    'KEEP GOING',
    'NEVER GIVE UP',
    'BELIEVE IN YOURSELF',
    'ONE MORE TRY',
    // Short fun
    'I LOVE MORSE CODE',
    'HELLO FRIEND',
    'COFFEE PLEASE',
    'PIZZA TIME',
    'LET US BEGIN',
    'HERE WE GO',
    'GAME ON',
    'HAPPY CODING',
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
    const practiceVolumeBarRef = useRef<HTMLDivElement | null>(null);
    const lastVolumeUpdateRef = useRef<number>(0);
    const thresholdTrackRef = useRef<HTMLDivElement | null>(null);
    const practiceThresholdTrackRef = useRef<HTMLDivElement | null>(null);
    const [draggingThreshold, setDraggingThreshold] = useState(false);
    const [hoveringThreshold, setHoveringThreshold] = useState(false);
    const draggingTrackRef = useRef<React.MutableRefObject<HTMLDivElement | null> | null>(null);
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
                if (!isNaN(v) && v >= 0 && v <= 0.15) setNoiseThreshold(v);
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

    // Practice (Recognize / Type)
    type DrillMode = 'char' | 'word' | 'sentence';
    type PracticeMode = 'recognize' | 'type';
    const [practiceMode, setPracticeMode] = useState<PracticeMode>('type');
    const [drillMode, setDrillMode] = useState<DrillMode>('word');
    const [drillLetter, setDrillLetter] = useState<string | null>(null); // Recognize mode prompt
    const [drillGuess, setDrillGuess] = useState<string>('');
    const [drillResult, setDrillResult] = useState<'correct' | 'wrong' | null>(null);
    const [drillScore, setDrillScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
    const drillInputRef = useRef<HTMLInputElement | null>(null);
    const seenCharsRef = useRef<Set<number>>(new Set());
    const seenWordsRef = useRef<Set<number>>(new Set());
    const seenSentencesRef = useRef<Set<number>>(new Set());

    // Type practice state
    const [typePrompt, setTypePrompt] = useState<string | null>(null);
    const [typePosition, setTypePosition] = useState<number>(0);
    type TypeEntry = { status: 'correct' | 'wrong'; input: string } | null;
    const [typeResults, setTypeResults] = useState<TypeEntry[]>([]);
    const [typeScore, setTypeScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
    const typePromptRef = useRef<string | null>(null);
    const typePositionRef = useRef<number>(0);
    const typeResultsRef = useRef<TypeEntry[]>([]);
    const practiceModeRef = useRef<PracticeMode>(practiceMode);
    // Which rectangle gets morse input: 'top' (top Enter Morse) or 'practice' (practice Enter-Morse rectangle).
    // Tapping a rectangle sets focus; keying routes according to focus.
    const [focusedRect, setFocusedRect] = useState<'top' | 'practice'>('top');
    const focusedRectRef = useRef<'top' | 'practice'>('top');
    useEffect(() => { typePromptRef.current = typePrompt; }, [typePrompt]);
    useEffect(() => { typePositionRef.current = typePosition; }, [typePosition]);
    useEffect(() => { typeResultsRef.current = typeResults; }, [typeResults]);
    useEffect(() => { practiceModeRef.current = practiceMode; }, [practiceMode]);
    useEffect(() => { focusedRectRef.current = focusedRect; }, [focusedRect]);
    // If the practice rectangle disappears, return focus to the top
    useEffect(() => {
        if (focusedRect === 'practice' && !(practiceMode === 'type' && typePrompt)) {
            setFocusedRect('top');
        }
    }, [focusedRect, practiceMode, typePrompt]);

    // Callback that finalizeLetter uses — intercepts morse input during Type practice
    const letterFinalizeCallbackRef = useRef<((letter: string, pattern: string) => void) | null>(null);

    useEffect(() => {
        if (!prefsLoaded) return;
        try { localStorage.setItem('morse.drillMode', drillMode); } catch {}
    }, [drillMode, prefsLoaded]);
    useEffect(() => {
        if (!prefsLoaded) return;
        try { localStorage.setItem('morse.practiceMode', practiceMode); } catch {}
    }, [practiceMode, prefsLoaded]);

    useEffect(() => {
        try {
            const m = localStorage.getItem('morse.drillMode');
            if (m === 'char' || m === 'word' || m === 'sentence') setDrillMode(m);
            const pm = localStorage.getItem('morse.practiceMode');
            if (pm === 'recognize' || pm === 'type') setPracticeMode(pm);
        } catch {}
    }, []);

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
        if (focusedRectRef.current === 'practice' && letterFinalizeCallbackRef.current) {
            letterFinalizeCallbackRef.current(letter, p);
        } else if (focusedRectRef.current === 'top') {
            setDecoded(prev => prev + letter);
        }
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
        const pct = Math.min(1, rms / 0.15) * 100;
        const bg = rms > noiseThresholdRef.current ? '#22c55e' : '#9ca3af';
        for (const el of [volumeBarRef.current, practiceVolumeBarRef.current]) {
            if (el) {
                el.style.width = `${pct}%`;
                el.style.background = bg;
            }
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
            if (letterFinalizedRef.current && !wordBoundaryAddedRef.current && gap > wordGap && focusedRectRef.current === 'top') {
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
        for (const el of [volumeBarRef.current, practiceVolumeBarRef.current]) {
            if (el) {
                el.style.width = '0%';
                el.style.background = '#9ca3af';
            }
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
            const trackRef = draggingTrackRef.current ?? thresholdTrackRef;
            const rect = trackRef.current?.getBoundingClientRect();
            if (!rect) return;
            const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            setNoiseThreshold(Number((ratio * 0.15).toFixed(3)));
        }
        function onMove(e: PointerEvent) { updateFromX(e.clientX); }
        function onUp() { setDraggingThreshold(false); draggingTrackRef.current = null; }
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        return () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };
    }, [draggingThreshold]);

    // Straight-key Morse input state (shared between space key and tap button)
    const keyPressingRef = useRef(false);
    const keyPressStartRef = useRef(0);
    const keyGapTimerRef = useRef<number | null>(null);
    const keyCtxRef = useRef<AudioContext | null>(null);
    const keyOscRef = useRef<OscillatorNode | null>(null);
    const keyGainRef = useRef<GainNode | null>(null);
    const [keyPressed, setKeyPressed] = useState(false);

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
            keyCtxRef.current = ctx; keyOscRef.current = osc; keyGainRef.current = gain;
        } catch {}
    }

    function stopKeyTone() {
        const ctx = keyCtxRef.current, osc = keyOscRef.current, gain = keyGainRef.current;
        if (!ctx || !osc || !gain) return;
        keyCtxRef.current = null; keyOscRef.current = null; keyGainRef.current = null;
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
        if (keyGapTimerRef.current != null) window.clearTimeout(keyGapTimerRef.current);
        const unit = unitMsRef.current;
        const letterGap = unit * 3.5;
        const wordGap = unit * 8;
        keyGapTimerRef.current = window.setTimeout(() => {
            if (!letterFinalizedRef.current && currentLetterRef.current) finalizeLetter();
            keyGapTimerRef.current = window.setTimeout(() => {
                if (letterFinalizedRef.current && !wordBoundaryAddedRef.current && focusedRectRef.current === 'top') {
                    setDecoded(prev => (prev.endsWith(' ') ? prev : prev + ' '));
                    wordBoundaryAddedRef.current = true;
                }
            }, Math.max(0, wordGap - letterGap));
        }, letterGap);
    }

    function beginKeyPress() {
        if (keyPressingRef.current) return;
        keyPressingRef.current = true;
        keyPressStartRef.current = performance.now();
        setKeyPressed(true);
        if (keyGapTimerRef.current != null) { window.clearTimeout(keyGapTimerRef.current); keyGapTimerRef.current = null; }
        startKeyTone();
    }

    function endKeyPress() {
        if (!keyPressingRef.current) return;
        keyPressingRef.current = false;
        setKeyPressed(false);
        const dur = performance.now() - keyPressStartRef.current;
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

    useEffect(() => {
        function isTypingTarget(t: EventTarget | null) {
            const el = t as HTMLElement | null;
            if (!el) return false;
            const tag = el.tagName;
            return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
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
                if (practiceModeRef.current === 'type' && typePromptRef.current) {
                    deleteTypeCharacter();
                } else {
                    deleteCharacter();
                }
                return;
            }
            if (e.code !== 'Space') return;
            e.preventDefault();
            if (e.repeat) return;
            beginKeyPress();
        }

        function onKeyUp(e: KeyboardEvent) {
            if (e.code !== 'Space') return;
            endKeyPress();
        }

        function onBlur() {
            if (keyPressingRef.current) {
                keyPressingRef.current = false;
                setKeyPressed(false);
                stopKeyTone();
            }
        }

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('blur', onBlur);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            window.removeEventListener('blur', onBlur);
            if (keyGapTimerRef.current != null) window.clearTimeout(keyGapTimerRef.current);
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

    function pickFromPoolUnseen(pool: string[], seen: Set<number>): string {
        if (seen.size >= pool.length) seen.clear();
        let idx: number;
        do {
            idx = Math.floor(Math.random() * pool.length);
        } while (seen.has(idx));
        seen.add(idx);
        return pool[idx];
    }

    function pickDrillPrompt(mode: DrillMode): string {
        if (mode === 'char') return pickFromPoolUnseen(DRILL_CHARS, seenCharsRef.current);
        if (mode === 'word') return pickFromPoolUnseen(DRILL_WORDS, seenWordsRef.current);
        return pickFromPoolUnseen(DRILL_SENTENCES, seenSentencesRef.current);
    }

    function normalizeDrill(s: string): string {
        return s.trim().toUpperCase().replace(/\s+/g, ' ');
    }

    function nextDrillLetter() {
        const next = pickDrillPrompt(drillMode);
        setDrillLetter(next);
        setDrillGuess('');
        setDrillResult(null);
        playMorseStandalone(next);
        window.setTimeout(() => drillInputRef.current?.focus(), 50);
    }

    function submitDrillGuess() {
        if (!drillLetter || !drillGuess) return;
        const g = normalizeDrill(drillGuess);
        if (!g) return;
        const isCorrect = g === normalizeDrill(drillLetter);
        setDrillResult(isCorrect ? 'correct' : 'wrong');
        setDrillScore(s => ({
            correct: s.correct + (isCorrect ? 1 : 0),
            total: s.total + 1,
        }));
        if (isCorrect) {
            window.setTimeout(() => { nextDrillLetter(); }, 800);
        }
    }

    function resetDrill() {
        setDrillLetter(null);
        setDrillGuess('');
        setDrillResult(null);
        setDrillScore({ correct: 0, total: 0 });
    }

    function showDrillAnswer() {
        if (!drillLetter || drillResult) return;
        setDrillResult('wrong');
        setDrillScore(s => ({ correct: s.correct, total: s.total + 1 }));
    }

    function nextTypePrompt() {
        const next = pickDrillPrompt(drillMode);
        setTypePrompt(next);
        // find first non-space position
        let startPos = 0;
        while (startPos < next.length && /\s/.test(next[startPos])) startPos++;
        setTypePosition(startPos);
        setTypeResults(new Array(next.length).fill(null));
        // Clear any in-progress letter from key input
        currentLetterRef.current = '';
        setCurrentLetter('');
        letterFinalizedRef.current = true;
        wordBoundaryAddedRef.current = true;
        // Move focus to the practice rectangle so keying routes there by default
        setFocusedRect('practice');
    }

    function resetTypePractice() {
        setTypePrompt(null);
        setTypePosition(0);
        setTypeResults([]);
        setTypeScore({ correct: 0, total: 0 });
    }

    function restartTypePrompt() {
        if (!typePrompt) return;
        const prev = typeResultsRef.current;
        let correctDelta = 0, totalDelta = 0;
        for (const r of prev) {
            if (r) {
                totalDelta += 1;
                if (r.status === 'correct') correctDelta += 1;
            }
        }
        setTypeScore(s => ({
            correct: Math.max(0, s.correct - correctDelta),
            total: Math.max(0, s.total - totalDelta),
        }));
        setTypeResults(new Array(typePrompt.length).fill(null));
        let startPos = 0;
        while (startPos < typePrompt.length && /\s/.test(typePrompt[startPos])) startPos++;
        setTypePosition(startPos);
        currentLetterRef.current = '';
        setCurrentLetter('');
        letterFinalizedRef.current = true;
        wordBoundaryAddedRef.current = true;
        setFocusedRect('practice');
    }

    function deleteTypeCharacter() {
        // If a partial letter is being keyed, strip just the last dot/dash.
        if (currentLetterRef.current) {
            currentLetterRef.current = currentLetterRef.current.slice(0, -1);
            setCurrentLetter(currentLetterRef.current);
            return;
        }
        const results = typeResultsRef.current;
        let prevPos = -1;
        for (let i = results.length - 1; i >= 0; i--) {
            if (results[i]) { prevPos = i; break; }
        }
        if (prevPos < 0) return;
        const entry = results[prevPos];
        const newResults = [...results];
        newResults[prevPos] = null;
        setTypeResults(newResults);
        setTypePosition(prevPos);
        setTypeScore(s => ({
            correct: s.correct - (entry?.status === 'correct' ? 1 : 0),
            total: Math.max(0, s.total - 1),
        }));
    }

    // Install the Type-practice letter callback while that mode is active
    useEffect(() => {
        if (practiceMode !== 'type' || !typePrompt) {
            letterFinalizeCallbackRef.current = null;
            return;
        }
        letterFinalizeCallbackRef.current = (letter: string, pattern: string) => {
            const prompt = typePromptRef.current;
            if (!prompt) return;
            const upper = prompt.toUpperCase();
            let pos = typePositionRef.current;
            while (pos < upper.length && /\s/.test(upper[pos])) pos++;
            if (pos >= upper.length) return;
            const expected = upper[pos];
            const isCorrect = letter === expected;
            const newResults = [...typeResultsRef.current];
            newResults[pos] = { status: isCorrect ? 'correct' : 'wrong', input: pattern };
            setTypeResults(newResults);
            let nextPos = pos + 1;
            while (nextPos < upper.length && /\s/.test(upper[nextPos])) nextPos++;
            setTypePosition(nextPos);
            setTypeScore(s => ({
                correct: s.correct + (isCorrect ? 1 : 0),
                total: s.total + 1,
            }));
            // If we completed the prompt AND every letter was correct, auto-advance after a brief pause.
            // If any letter was wrong, stay on the prompt so the user can see their mistake.
            if (nextPos >= upper.length) {
                const allCorrect = newResults.every((r, i) => /\s/.test(upper[i]) || r?.status === 'correct');
                if (allCorrect) {
                    window.setTimeout(() => {
                        if (typePromptRef.current === prompt) nextTypePrompt();
                    }, 1200);
                }
            }
        };
        return () => { letterFinalizeCallbackRef.current = null; };
    }, [practiceMode, typePrompt]);

    function playMorseStandalone(text: string) {
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
        const pulse = (durUnits: number) => {
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.25, t + attack);
            gain.gain.setValueAtTime(0.25, t + durUnits * unit - release);
            gain.gain.linearRampToValueAtTime(0, t + durUnits * unit);
            t += durUnits * unit;
        };

        const upper = text.toUpperCase();
        let prevWasLetter = false;
        for (let i = 0; i < upper.length; i++) {
            const ch = upper[i];
            if (/\s/.test(ch)) {
                if (prevWasLetter) t += 7 * unit;
                prevWasLetter = false;
                continue;
            }
            const code = TO_MORSE[ch];
            if (!code) continue;
            if (prevWasLetter) t += 3 * unit;
            [...code].forEach((sym, si) => {
                pulse(sym === '.' ? 1 : 3);
                if (si < code.length - 1) t += unit;
            });
            prevWasLetter = true;
        }

        osc.stop(t + 0.05);
        const totalMs = Math.max(0, (t + 0.1 - ctx.currentTime) * 1000);
        window.setTimeout(() => ctx.close().catch(() => {}), totalMs);
    }

    // Volume bar: threshold indicator (live bar updates directly in tick)
    const thresholdPct = Math.min(1, noiseThreshold / 0.15) * 100;

    function renderMicBar(trackRef: React.MutableRefObject<HTMLDivElement | null>, barRef: React.MutableRefObject<HTMLDivElement | null>) {
        return <>
            <div ref={trackRef} style={{
                position: 'relative', flex: 1, height: 24, marginLeft: 8,
                background: '#eee', borderRadius: 4,
                overflow: 'visible',
            }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: 4, overflow: 'hidden' }}>
                    <div ref={barRef} style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: '0%', background: '#9ca3af',
                    }} />
                </div>
                <div
                    onPointerDown={e => {
                        e.preventDefault();
                        (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
                        draggingTrackRef.current = trackRef;
                        setDraggingThreshold(true);
                        const rect = trackRef.current?.getBoundingClientRect();
                        if (rect) {
                            const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                            setNoiseThreshold(Number((ratio * 0.15).toFixed(3)));
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
                        position: 'absolute', bottom: 'calc(100% + 8px)',
                        left: `${thresholdPct}%`, transform: 'translateX(-50%)',
                        background: '#111827', color: 'white',
                        padding: '6px 8px', borderRadius: 6,
                        display: 'flex', alignItems: 'center', gap: 6,
                        whiteSpace: 'nowrap', fontSize: 12,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        zIndex: 5,
                    }}>
                        <span>Sound Threshold</span>
                        <input type='number' min={0} max={0.15} step={0.001}
                            value={noiseThreshold}
                            onChange={e => {
                                const v = parseFloat(e.target.value);
                                if (!isNaN(v)) setNoiseThreshold(Math.max(0, Math.min(0.15, v)));
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
        </>;
    }

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
            <a href='#' onClick={e => e.preventDefault()} aria-label='Download on the App Store (coming soon)'
                title='Coming soon'
                style={{ opacity: 0.55, cursor: 'default', display: 'inline-block', lineHeight: 0, marginLeft: 4, position: 'relative', bottom: 4 }}>
                <Image src='/image/software/worderoo/download-on-the-app-store.png'
                    alt='Download on the App Store' width={114} height={38} />
            </a>
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
            <button
                onPointerDown={e => { e.preventDefault(); setFocusedRect('top'); beginKeyPress(); }}
                onPointerUp={e => { e.preventDefault(); endKeyPress(); }}
                onPointerLeave={() => { if (keyPressingRef.current) endKeyPress(); }}
                onPointerCancel={() => { if (keyPressingRef.current) endKeyPress(); }}
                onContextMenu={e => e.preventDefault()}
                className='text-gray-600'
                style={{
                    width: '100%', padding: '14px 16px',
                    border: '2px solid ' + (focusedRect === 'top' ? '#2563eb' : '#cbd5e1'),
                    borderRadius: 10, background: (keyPressed && focusedRect === 'top') ? '#fde68a' : '#f8fafc',
                    textAlign: 'center', fontSize: 15, cursor: 'pointer',
                    userSelect: 'none', touchAction: 'none',
                    transition: 'background 60ms linear, border-color 120ms linear',
                }}
            >
                Tap here, press <kbd style={kbdStyle}>space</kbd> key, or hit{' '}
                <Mic size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-0.2em' }} />
                {' '}to speak morse code
            </button>
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

            {listening && renderMicBar(thresholdTrackRef, volumeBarRef)}
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
            {currentLetter && focusedRect === 'top' && (
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

                <div style={{
                    marginTop: 12, paddingTop: 12, borderTop: '1px solid #e5e7eb',
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                    gap: 6, fontFamily: 'ui-monospace, monospace', fontSize: 14,
                }}>
                    {LETTERS.map(([l, c]) => (
                        <button key={l} onClick={() => playMorseStandalone(l)}
                            title={`Play ${l} (${c})`} aria-label={`Play ${l}`}
                            style={{
                                padding: '6px 10px', border: '1px solid #e5e7eb', borderRadius: 6,
                                display: 'flex', justifyContent: 'space-between', gap: 8,
                                background: 'white',
                                cursor: 'pointer', font: 'inherit', textAlign: 'left',
                            }}>
                            <span style={{ fontWeight: 700 }}>{l}</span>
                            <span style={{ color: '#444' }}>{c}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
            <h3 style={{ marginBottom: 8 }}>Practice</h3>
            <div style={{
                padding: 12,
                border: '1px dashed #cbd5e1', borderRadius: 10, background: '#f8fafc',
            }}>
                {/* Mode toggle: Enter Morse | Recognize Morse — segmented */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                    <Segmented<PracticeMode>
                        value={practiceMode}
                        size='md'
                        onChange={m => {
                            setPracticeMode(m);
                            setDrillLetter(null); setDrillGuess(''); setDrillResult(null);
                            resetTypePractice();
                        }}
                        options={[
                            { value: 'type', label: 'Enter Morse' },
                            { value: 'recognize', label: 'Recognize Morse' },
                        ]}
                    />
                </div>

                {/* Length selector — segmented, shared between modes */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                    <Segmented<DrillMode>
                        value={drillMode}
                        size='sm'
                        onChange={m => {
                            setDrillMode(m);
                            setDrillLetter(null); setDrillGuess(''); setDrillResult(null);
                            resetTypePractice();
                        }}
                        options={[
                            { value: 'char', label: 'One char' },
                            { value: 'word', label: 'One word' },
                            { value: 'sentence', label: 'One sentence' },
                        ]}
                    />
                </div>

                {practiceMode === 'recognize' ? (
                    !drillLetter ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
                            <span style={{ fontSize: 13, color: '#555' }}>
                                Listen and type what you hear.
                            </span>
                            <button className='button' onClick={nextDrillLetter}>Start</button>
                        </div>
                    ) : (
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                                <button className='button' onClick={() => playMorseStandalone(drillLetter!)}
                                    title='Replay' aria-label='Replay' style={iconBtnStyle}>
                                    <Volume2 size={22} />
                                </button>
                                <input
                                    ref={drillInputRef}
                                    type='text'
                                    value={drillGuess}
                                    maxLength={drillMode === 'char' ? 1 : drillMode === 'word' ? 20 : 80}
                                    onChange={e => { setDrillGuess(e.target.value); setDrillResult(null); }}
                                    onKeyDown={e => { if (e.key === 'Enter') submitDrillGuess(); }}
                                    placeholder={drillMode === 'char' ? '?' : drillMode === 'word' ? 'your guess' : 'your sentence'}
                                    autoFocus
                                    style={{
                                        flex: drillMode === 'char' ? undefined : '1 1 200px',
                                        width: drillMode === 'char' ? 70 : undefined,
                                        padding: '8px 12px', border: '1px solid #cbd5e1',
                                        borderRadius: 6, fontFamily: 'ui-monospace, monospace',
                                        fontSize: drillMode === 'char' ? 22 : 16,
                                        textAlign: drillMode === 'char' ? 'center' : 'left',
                                        textTransform: 'uppercase',
                                        background: drillResult === 'wrong' ? '#fee2e2' : drillResult === 'correct' ? '#dcfce7' : 'white',
                                    }}
                                />
                                <button className='button' onClick={submitDrillGuess} disabled={!drillGuess}>Check</button>
                                <button className='button' onClick={showDrillAnswer} disabled={!!drillResult} title='Reveal the letter'>Show answer</button>
                                <button className='button' onClick={nextDrillLetter} title='Skip to next letter'>Skip</button>
                                <div style={{ marginLeft: 'auto', fontSize: 13, color: '#555' }}>
                                    Score: <b>{drillScore.correct}</b> / {drillScore.total}
                                    {drillScore.total > 0 && ` (${Math.round(drillScore.correct / drillScore.total * 100)}%)`}
                                    <button onClick={resetDrill} style={{
                                        marginLeft: 8, fontSize: 12, color: '#2563eb',
                                        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                                    }}>reset</button>
                                </div>
                            </div>
                            {drillResult && (
                                <div style={{
                                    marginTop: 8, fontSize: 14,
                                    color: drillResult === 'correct' ? '#166534' : '#b91c1c',
                                }}>
                                    {drillResult === 'correct'
                                        ? <>Correct! It was <b>{drillLetter}</b></>
                                        : <>That was <b>{drillLetter}</b>. Try again or <button onClick={nextDrillLetter} style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>next</button>.</>
                                    }
                                </div>
                            )}
                        </div>
                    )
                ) : (
                    // Type (Enter Morse) mode
                    !typePrompt ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
                            <span style={{ fontSize: 13, color: '#555' }}>
                                You&apos;ll be given a {drillMode === 'char' ? 'letter' : drillMode === 'word' ? 'word' : 'sentence'} to key in Morse code.
                            </span>
                            <button className='button' onClick={nextTypePrompt}>Start</button>
                        </div>
                    ) : (
                        <div>
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10,
                                padding: '8px 4px', minHeight: 60, alignItems: 'flex-end',
                            }}>
                                {[...typePrompt.toUpperCase()].map((ch, i) => {
                                    if (/\s/.test(ch)) return <span key={i} style={{ width: 14 }} />;
                                    const entry = typeResults[i];
                                    const isCurrent = i === typePosition;
                                    let bg = 'transparent', color = '#374151';
                                    if (entry?.status === 'correct') { bg = '#dcfce7'; color = '#166534'; }
                                    else if (entry?.status === 'wrong') { bg = '#fee2e2'; color = '#b91c1c'; }
                                    else if (isCurrent) { bg = '#fef3c7'; color = '#713f12'; }
                                    // What to show under the letter:
                                    //  - before keyed: blank
                                    //  - current: currentLetter (dots/dashes being entered)
                                    //  - after keyed: the pattern they entered (green if correct, red if wrong)
                                    let below = '';
                                    if (entry) below = entry.input;
                                    else if (isCurrent) below = currentLetter;
                                    return <span key={i} style={{
                                        padding: '6px 8px', borderRadius: 4, background: bg, color,
                                        fontFamily: 'ui-monospace, monospace',
                                        display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                                        lineHeight: 1.1,
                                        border: isCurrent ? '1px solid #f59e0b' : '1px solid transparent',
                                        transition: 'background 120ms linear, color 120ms linear',
                                    }}>
                                        <span style={{ fontSize: 20, fontWeight: 700 }}>{ch}</span>
                                        <span style={{
                                            fontSize: 12, minHeight: 14, letterSpacing: 1,
                                            fontWeight: entry ? 700 : 400,
                                        }}>
                                            {below || '\u00A0'}
                                        </span>
                                    </span>;
                                })}
                            </div>

                            {/* Big keying rectangle, same style as top Enter Morse */}
                            <button
                                onPointerDown={e => { e.preventDefault(); setFocusedRect('practice'); beginKeyPress(); }}
                                onPointerUp={e => { e.preventDefault(); endKeyPress(); }}
                                onPointerLeave={() => { if (keyPressingRef.current) endKeyPress(); }}
                                onPointerCancel={() => { if (keyPressingRef.current) endKeyPress(); }}
                                onContextMenu={e => e.preventDefault()}
                                className='text-gray-600'
                                style={{
                                    width: '100%', padding: '14px 16px',
                                    border: '2px solid ' + (focusedRect === 'practice' ? '#2563eb' : '#cbd5e1'),
                                    borderRadius: 10, background: (keyPressed && focusedRect === 'practice') ? '#fde68a' : '#f8fafc',
                                    textAlign: 'center', fontSize: 15, cursor: 'pointer',
                                    userSelect: 'none', touchAction: 'none',
                                    transition: 'background 60ms linear, border-color 120ms linear',
                                }}
                            >
                                Tap here, press <kbd style={kbdStyle}>space</kbd> key, or hit{' '}
                                <Mic size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-0.2em' }} />
                                {' '}to speak morse code
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
                                {!listening
                                    ? <button className='button' onClick={start}
                                        title='Start microphone' aria-label='Start microphone' style={iconBtnStyle}>
                                        <Mic size={22} />
                                    </button>
                                    : <button className='button' onClick={stop}
                                        title='Stop microphone' aria-label='Stop microphone' style={iconBtnStyle}>
                                        <Square size={22} fill='currentColor' />
                                    </button>
                                }
                                <button className='button' onClick={deleteTypeCharacter}
                                    title='Delete last character' aria-label='Delete last character' style={iconBtnStyle}>
                                    <Delete size={22} />
                                </button>
                                {listening && renderMicBar(practiceThresholdTrackRef, practiceVolumeBarRef)}
                                <button className='button' onClick={nextTypePrompt} title='Skip to next'>Skip</button>
                                <div style={{ marginLeft: 'auto', fontSize: 13, color: '#555' }}>
                                    Score: <b>{typeScore.correct}</b> / {typeScore.total}
                                    {typeScore.total > 0 && ` (${Math.round(typeScore.correct / typeScore.total * 100)}%)`}
                                    <button onClick={() => { resetTypePractice(); }} style={{
                                        marginLeft: 8, fontSize: 12, color: '#2563eb',
                                        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                                    }}>reset</button>
                                </div>
                            </div>
                            {typeResults.some(r => r?.status === 'wrong') && (
                                <div style={{ marginTop: 12 }}>
                                    <button className='button' onClick={restartTypePrompt}>Restart</button>
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </div>

    </Page>;
}

function decodeLetterPreview(p: string): string {
    return MORSE[p] || '?';
}

function Segmented<T extends string>({ value, onChange, options, size = 'md' }: {
    value: T;
    onChange: (v: T) => void;
    options: { value: T; label: string }[];
    size?: 'sm' | 'md';
}) {
    const padding = size === 'sm' ? '4px 12px' : '7px 16px';
    const fontSize = size === 'sm' ? 13 : 14;
    return <div style={{
        display: 'inline-flex',
        border: '1px solid #cbd5e1',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'white',
    }}>
        {options.map((opt, i) => {
            const active = value === opt.value;
            return <button key={opt.value}
                onClick={() => onChange(opt.value)}
                style={{
                    padding, fontSize,
                    background: active ? '#2563eb' : 'white',
                    color: active ? 'white' : '#374151',
                    fontWeight: active ? 600 : 400,
                    border: 'none',
                    borderRight: i < options.length - 1 ? '1px solid #cbd5e1' : 'none',
                    cursor: 'pointer',
                    transition: 'background 80ms linear, color 80ms linear',
                }}>
                {opt.label}
            </button>;
        })}
    </div>;
}

function textToMorse(text: string): string {
    return text.toUpperCase().split(/(\s+)/).map(chunk => {
        if (/^\s+$/.test(chunk)) return '  ';
        return [...chunk].map(ch => TO_MORSE[ch] || '').filter(Boolean).join(' ');
    }).join('').trim();
}
