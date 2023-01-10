import { useState } from 'react';
import Link from 'next/link';

export default function Signature() { //interactive signature
    const reload=()=>setLoadNum(Math.random()); //reloads & replays the gif
    const [loadNum, setLoadNum]=useState<number>(0);

    return (<Link href='/'><a>
        <li className='flex items-center pr-4 select-none'>
            <div className='relative'>
                {/* eslint-disable */}
                    {/* Using <img> below instead of <Image> because reloads onHover */}
                    <img src={`/image/circle-signature-animation.gif?num=${loadNum}`} alt="Joel Grayson Circle Signature Animation"
                        height='40px' width='40px'
                        onMouseEnter={reload} //when hovering icon, replay the signature
                        style={{
                            position: 'absolute',
                            left: '6.3px',
                            top: '5px'
                        }}
                    />
                {/* eslint-enable */}
                <svg width="52" height="52" viewBox="0 0 154 154" fill="none">
                    <circle cx="77" cy="77" r="73" fill="#F7F7F7" stroke="#00369B" strokeWidth="8"/>
                    <rect x="19" y="14" width="120" height="120" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"></pattern>
                    </defs>
                </svg>
            </div>
        </li>
    </a></Link>);
}
