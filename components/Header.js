import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import circleSig from './circle sig.png';
import threeDotSigAnimation from './three dot sig animation.gif';

const gifDurationMs=1260; //milliseconds

export default function Header() {
    const { asPath }=useRouter() //the path (window object cannot be used)
    
    const [loadNum, setLoadNum]=useState(0);
    const reload=()=>setLoadNum(Math.random()); //reloads & replays the gif
    
    return (
        //Classname order: gradient, border, other
        <header>
            <nav className='
                border-solid border-b-[1px] border-black p-3
                bg-gradient-to-b from-[#fcd98b] to-[#faca62]
                w-full flex justify-center'
            >
                <ul className='flex list-none items-center'>
                    <Link href='/'><a>
                        <li className='flex items-center pr-4 select-none'>
                            <div className='relative'>
                                <img src={`/images/circle-signature-animation.gif?num=${loadNum}`} alt="Joel Grayson Circle Signature Animation"
                                    height='40px' width='40px'
                                    onMouseEnter={reload} //when hovering icon, replay the signature
                                    style={{
                                        position: 'absolute',
                                        left: '6.3px',
                                        top: '5px'
                                    }}
                                />
                                <svg width="52" height="52" viewBox="0 0 154 154" fill="none">
                                    <circle cx="77" cy="77" r="73" fill="#F7F7F7" stroke="#00369B" strokeWidth="8"/>
                                    <rect x="19" y="14" width="120" height="120" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"></pattern>
                                    </defs>
                                </svg>
                            </div>
                        </li>
                    </a></Link>
                    <HeaderItem asPath={asPath} link='/'>Home</HeaderItem>
                    <HeaderItem asPath={asPath} link='/machines'>Machines</HeaderItem>
                    <HeaderItem asPath={asPath} link='/projects'>Projects</HeaderItem>
                    <HeaderItem asPath={asPath} link='/art'>Art</HeaderItem>
                    <HeaderItem asPath={asPath} link='/performances'>Performances</HeaderItem>
                    <HeaderItem asPath={asPath} link='/perspective'>The Perspective</HeaderItem>
                    <HeaderItem asPath={asPath} link='/contact'>Contact</HeaderItem>
                </ul>
            </nav>
        </header>
    );
}

function HeaderItem({link /*a href's link*/, asPath, children}) { //highlighted if is current page
    const [bgColor, setBgColor]=useState('#fff');
    const getColor=_=>link===asPath ? '#ffe273' : '#fff'; //function to get regular color

    useEffect(()=>setBgColor(getColor()), []); //initially get color
    
    return (
        <Link href={link}>
            <a className='unstyled'>
                <li>
                    {/* Active is when mouseDown on button */}
                    <button
                        className='text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                        border-solid border-[#11111130] border-[0.2px]' //active: #ffd13c
                        style={{backgroundColor: bgColor, fontFamily: 'AvenirMedium'}}
                        onMouseEnter={_=>setBgColor('#ffe062')} //hover color
                        onMouseLeave={_=>setBgColor(getColor())} //when out of hover, return to regular color
                    >{children}</button>
                </li>
            </a>
        </Link>
    );
}