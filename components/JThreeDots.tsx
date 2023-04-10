import { useState, useRef } from 'react';
import Link from 'next/link';

export default function JThreeDots() { //interactive signature
    const [loadNum, setLoadNum]=useState<number>(0);
    const lastReloaded=useRef<number>(Date.now());
    const reload=()=>{
        if (Date.now()-lastReloaded.current<1400) return; //do not reload the image if it was reloaded less than 1 second ago
        lastReloaded.current=Date.now();
        setLoadNum(Math.random);
    };

    return <Link href='/' className='block w-[55px] sm:w-[65px]'>
        <div className='flex items-center pr-4 select-none w-[30px] sm:w-[40px]'>
            <div className='relative'>
                {/* eslint-disable */}
                    {/* Using <img> below instead of <Image> because reloads onHover */}
                    <img src={`/image/ucjg/circle-signature-animation.gif?num=${loadNum}`} alt='Joel Grayson Circle Signature Animation'
                        height='40px' width='40px'
                        onMouseEnter={reload} //when hovering icon, replay the signature
                        className='w-[30px] sm:w-[40px] pt-[5.5px] sm:pt-0'
                        style={{
                            position: 'absolute',
                            left: '6.3px',
                            top: '5px'
                        }}
                    />
                {/* eslint-enable */}
                <svg width='52' height='52' viewBox='0 0 154 154' fill='none' className='w-[39px] sm:w-[52px]'>
                    <circle cx='77' cy='77' r='73' fill='#F7F7F7' stroke='#00369B' strokeWidth='8'/>
                    <rect x='19' y='14' width='120' height='120' fill='url(#pattern0)'/>
                    <defs>
                        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'></pattern>
                    </defs>
                </svg>
            </div>
        </div>
    </Link>;
}
