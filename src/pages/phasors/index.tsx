import { useState } from 'react';
import Page from '@/components/page/DefaultPage';

type AngleUnit='deg' | 'rad';
type Side='polar' | 'rect';

type Complex={ re: number; im: number; };

// All four boxes are editable. lastEdited tracks which form is the source of
// truth so the other form can be derived from it.
type PhasorState={
    mag: string;
    ang: string;
    angRad: number | null; //exact radians backing the ang string, so unit toggles don't round-trip through the rounded display value
    re: string;
    im: string;
    lastEdited: Side;
};

const emptyPhasor: PhasorState={ mag: '', ang: '', angRad: null, re: '', im: '', lastEdited: 'polar' };

function parseNum(s: string): number {
    if (s.trim()==='') return NaN;
    return Number(s);
}

function fmt(n: number, scale=1): string {
    if (!isFinite(n)) return '';
    if (Math.abs(n)<Math.abs(scale)*1e-12) n=0; //snap floating-point residue like cos(90°)=6e-17 to 0
    if (n!==0 && (Math.abs(n)>=1e7 || Math.abs(n)<1e-4)) return n.toExponential(4);
    return String(Math.round(n*10000)/10000); //4 decimal places, no trailing zeros
}

function toRadians(ang: number, unit: AngleUnit) { return unit==='deg' ? ang*Math.PI/180 : ang; }
function fromRadians(rad: number, unit: AngleUnit) { return unit==='deg' ? rad*180/Math.PI : rad; }

function normalizeAngle(rad: number): number { //to (-π, π]
    while (rad>Math.PI) rad-=2*Math.PI;
    while (rad<=-Math.PI) rad+=2*Math.PI;
    return rad;
}

// An empty box counts as 0, but a fully empty side means "nothing entered yet"
function toComplex(p: PhasorState, unit: AngleUnit): Complex | null {
    if (p.lastEdited==='polar') {
        if (p.mag.trim()==='' && p.ang.trim()==='') return null;
        const mag=p.mag.trim()==='' ? 0 : parseNum(p.mag);
        let rad: number;
        if (p.ang.trim()==='') rad=0;
        else if (p.angRad!=null) rad=p.angRad;
        else {
            const ang=parseNum(p.ang);
            if (isNaN(ang)) return null;
            rad=toRadians(ang, unit);
        }
        if (isNaN(mag)) return null;
        return { re: mag*Math.cos(rad), im: mag*Math.sin(rad) };
    } else {
        if (p.re.trim()==='' && p.im.trim()==='') return null;
        const re=p.re.trim()==='' ? 0 : parseNum(p.re);
        const im=p.im.trim()==='' ? 0 : parseNum(p.im);
        if (isNaN(re) || isNaN(im)) return null;
        return { re, im };
    }
}

function withDerived(p: PhasorState, unit: AngleUnit): PhasorState {
    const z=toComplex(p, unit);
    if (p.lastEdited==='polar') {
        if (!z) return { ...p, re: '', im: '' };
        const scale=Math.hypot(z.re, z.im);
        return { ...p, re: fmt(z.re, scale), im: fmt(z.im, scale) };
    } else {
        if (!z) return { ...p, mag: '', ang: '', angRad: null };
        const angRad=normalizeAngle(Math.atan2(z.im, z.re));
        return { ...p,
            mag: fmt(Math.hypot(z.re, z.im)),
            ang: fmt(fromRadians(angRad, unit)),
            angRad,
        };
    }
}

// "3+4j", "3+j4", "-2.5-j0.1", etc. pasted into a rectangular box
function parseRectNotation(raw: string): { re: string; im: string; } | null {
    if (!/j/i.test(raw)) return null;
    const num='(\\d+\\.?\\d*|\\.\\d+)(?:e[+-]?\\d+)?';
    const match=raw.trim().match(new RegExp(`^([+-]?${num})\\s*([+-])\\s*(?:j\\s*(${num})|(${num})\\s*j)$`, 'i'));
    if (!match) return null;
    const [, re, , sign, jFirst, , imLast]=match;
    return { re, im: (sign==='-' ? '-' : '')+(jFirst ?? imLast) };
}

function angRadOf(ang: string, unit: AngleUnit): number | null {
    const n=parseNum(ang);
    return isNaN(n) ? null : toRadians(n, unit);
}

function edit(p: PhasorState, field: 'mag'|'ang'|'re'|'im', raw: string, unit: AngleUnit): PhasorState {
    // "20<20" (or "20∠20") in either polar box fills both boxes at once
    if ((field==='mag' || field==='ang') && /[<∠]/.test(raw)) {
        const [mag, ang]=raw.split(/[<∠]/).map(s=>s.trim());
        return withDerived({ ...p, mag, ang: ang ?? '', angRad: angRadOf(ang ?? '', unit), lastEdited: 'polar' }, unit);
    }
    if (field==='re' || field==='im') {
        const combined=parseRectNotation(raw);
        if (combined) return withDerived({ ...p, ...combined, lastEdited: 'rect' }, unit);
    }
    let next: PhasorState={ ...p, [field]: raw, lastEdited: (field==='mag' || field==='ang') ? 'polar' : 'rect' };
    if (field==='ang') next.angRad=angRadOf(raw, unit);
    return withDerived(next, unit);
}

function convertUnits(p: PhasorState, from: AngleUnit, to: AngleUnit): PhasorState {
    if (p.lastEdited==='polar') {
        const angRad=p.angRad ?? angRadOf(p.ang, from);
        return withDerived(angRad==null ? p : { ...p, ang: fmt(fromRadians(angRad, to)), angRad }, to);
    }
    return withDerived(p, to); //rederives the polar side in the new unit
}

const inputClass='w-24 text-center font-mono border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1.5 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400';

function PhasorBoxes({ p, onEdit, unit, label }: {
    p: PhasorState;
    onEdit: (field: 'mag'|'ang'|'re'|'im', raw: string)=>void;
    unit: AngleUnit;
    label?: string;
}) {
    return <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2'>
        {label && <span className='font-semibold'>{label} =</span>}
        <span className='flex items-center gap-1.5'>
            <input className={inputClass} type='text' inputMode='decimal' placeholder='20'
                value={p.mag} onChange={e=>onEdit('mag', e.target.value)} aria-label={`${label || 'phasor'} magnitude`} />
            <span className='text-xl select-none'>∠</span>
            <input className={inputClass} type='text' inputMode='decimal' placeholder='20'
                value={p.ang} onChange={e=>onEdit('ang', e.target.value)} aria-label={`${label || 'phasor'} angle`} />
            <span className='text-gray-500 dark:text-gray-400 select-none'>{unit==='deg' ? '°' : 'rad'}</span>
        </span>
        <span className='text-gray-400 select-none'>=</span>
        <span className='flex items-center gap-1.5'>
            <input className={inputClass} type='text' inputMode='decimal' placeholder='18.79'
                value={p.re} onChange={e=>onEdit('re', e.target.value)} aria-label={`${label || 'phasor'} real part`} />
            <span className='select-none'>+ j</span>
            <input className={inputClass} type='text' inputMode='decimal' placeholder='6.84'
                value={p.im} onChange={e=>onEdit('im', e.target.value)} aria-label={`${label || 'phasor'} imaginary part`} />
        </span>
    </div>;
}

function PhasorText({ z, unit }: { z: Complex | null; unit: AngleUnit; }) {
    if (!z) return <span className='text-gray-400'>—</span>;
    if (!isFinite(z.re) || !isFinite(z.im)) return <span className='text-gray-400'>undefined</span>;
    const mag=Math.hypot(z.re, z.im);
    const ang=fromRadians(normalizeAngle(Math.atan2(z.im, z.re)), unit);
    const im=Math.abs(z.im)<mag*1e-12 ? 0 : z.im;
    return <span className='font-mono'>
        {fmt(mag)} ∠ {fmt(ang)}{unit==='deg' ? '°' : ' rad'}
        <span className='text-gray-400 mx-2'>=</span>
        {fmt(z.re, mag)} {im<0 ? '−' : '+'} j {fmt(Math.abs(im), mag)}
    </span>;
}

export default function Phasors() {
    const [unit, setUnit]=useState<AngleUnit>('deg');
    const [conv, setConv]=useState<PhasorState>(emptyPhasor);
    const [z1, setZ1]=useState<PhasorState>(emptyPhasor);
    const [z2, setZ2]=useState<PhasorState>(emptyPhasor);

    function changeUnit(to: AngleUnit) {
        if (to===unit) return;
        setConv(p=>convertUnits(p, unit, to));
        setZ1(p=>convertUnits(p, unit, to));
        setZ2(p=>convertUnits(p, unit, to));
        setUnit(to);
    }

    const a=toComplex(z1, unit);
    const b=toComplex(z2, unit);
    const operations: { label: string; result: Complex | null; }[]=(a && b) ? [
        { label: 'Z₁ + Z₂', result: { re: a.re+b.re, im: a.im+b.im } },
        { label: 'Z₁ − Z₂', result: { re: a.re-b.re, im: a.im-b.im } },
        { label: 'Z₁ × Z₂', result: { re: a.re*b.re-a.im*b.im, im: a.re*b.im+a.im*b.re } },
        { label: 'Z₁ ÷ Z₂', result: (b.re===0 && b.im===0) ? { re: Infinity, im: Infinity } : (()=>{
            const d=b.re*b.re+b.im*b.im;
            return { re: (a.re*b.re+a.im*b.im)/d, im: (a.im*b.re-a.re*b.im)/d };
        })() },
    ] : [
        { label: 'Z₁ + Z₂', result: null },
        { label: 'Z₁ − Z₂', result: null },
        { label: 'Z₁ × Z₂', result: null },
        { label: 'Z₁ ÷ Z₂', result: null },
    ];

    return <Page bottomPadding seo={{
        title: 'Phasor Calculator',
        description: 'Convert phasors between polar (magnitude∠angle) and rectangular (a+jb) form and do phasor arithmetic: add, subtract, multiply, and divide phasors in degrees or radians',
        keywords: ['phasor calculator', 'polar to rectangular calculator', 'rectangular to polar calculator', 'phasor arithmetic', 'phasor addition', 'phasor multiplication', 'phasor division', 'complex number calculator', 'impedance calculator'],
    }}>
        <h1 className='text-center'>Phasors</h1>

        <div className='flex justify-center mt-4'>
            <div className='inline-flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden'>
                {(['deg', 'rad'] as const).map(u=>
                    <button key={u} onClick={()=>changeUnit(u)}
                        className={`unstyled cursor-pointer px-4 py-1.5 text-sm ${unit===u
                            ? 'bg-blue-500 text-white'
                            : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >{u==='deg' ? 'Degrees' : 'Radians'}</button>
                )}
            </div>
        </div>

        <h3>Conversion</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Type in either side (phasor on left, rectangular on right), and the other side will fill in</p>
        <div className='border border-gray-200 dark:border-gray-700 rounded-xl p-4'>
            <PhasorBoxes p={conv} unit={unit} onEdit={(field, raw)=>setConv(p=>edit(p, field, raw, unit))} />
        </div>

        <h3>Arithmetic</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Enter your two phasors (in either form) and see their sum/difference/product/quotient</p>
        <div className='border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-3'>
            <PhasorBoxes label='Z₁' p={z1} unit={unit} onEdit={(field, raw)=>setZ1(p=>edit(p, field, raw, unit))} />
            <PhasorBoxes label='Z₂' p={z2} unit={unit} onEdit={(field, raw)=>setZ2(p=>edit(p, field, raw, unit))} />

            <hr className='border-gray-200 dark:border-gray-700' />

            <table className='mx-auto'>
                <tbody>
                    {operations.map(({ label, result })=>
                        <tr key={label}>
                            <td className='pr-4 py-1 font-semibold whitespace-nowrap text-right'>{label} =</td>
                            <td className='py-1'><PhasorText z={result} unit={unit} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Page>;
}
