import {useRouter} from 'next/router';
import Link from 'next/link';
import { useState, useEffect, createContext, useContext } from 'react';

const PathContext=createContext();

export default function Header() {
    const { asPath }=useRouter(); //the path (window object cannot be used)
    
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
                                {/* Using <img> below instead of <Image> because reloads */}
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
                    <PathContext.Provider value={asPath}>
                        <HeaderItem link='/'>Home</HeaderItem>
                        <HeaderGroup title='Projects'>
                            <HeaderGroupItem link='/art'>Art</HeaderGroupItem>
                            <HeaderGroupItem link='/machines'>Machines</HeaderGroupItem>
                            <HeaderGroupItem link='/performances'>Violin &amp; Piano</HeaderGroupItem>
                            <HeaderGroupItem link='/slaphappy'>Slaphappy</HeaderGroupItem>
                        </HeaderGroup>
                        {/* <HeaderGroup title='Combating Climate Change'>
                            <HeaderGroupItem link='/art'>★ Home</HeaderGroupItem>
                            <HeaderGroupItem link='/machines'>Solar for Riverdale</HeaderGroupItem>
                            <HeaderGroupItem link='/performances'>Electric School Buses</HeaderGroupItem>
                            <HeaderGroupItem link='/slaphappy'>Electric Leaf Blowers</HeaderGroupItem>
                        </HeaderGroup> */}
                        <HeaderItem link='/contact'>Contact</HeaderItem>
                        
                        {/* <HeaderItem link='/machines'>Machines</HeaderItem> */}
                        {/* <HeaderItem link='/projects'>Projects</HeaderItem> */}
                        {/* <HeaderItem link='/art'>Art</HeaderItem>
                        <HeaderItem link='/performances'>Performances</HeaderItem>
                        <HeaderItem link='/perspective'>The Perspective</HeaderItem> */}
                    </PathContext.Provider>
                </ul>
            </nav>
        </header>
    );
}

function HeaderGroup({title, children}) {
    const [open, setOpen]=useState(false);
    
    return (<>
        <li onMouseLeave={_=>setOpen(false)}>
            {/* Active is when mouseDown on button */}
            <button
                className='text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                border-solid border-[#11111130] border-[0.2px] hover:bg-[#ffe062] ' //active: #ffd13c
                style={{fontFamily: 'AvenirMedium'}}
                onMouseEnter={_=>{
                    setOpen(true);
                }}
            >
                {title}
                {/* v    down arrow */}
                <svg width="14" height="12" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='inline ml-2'
                    style={{
                        animation: 'transform 0.5s',
                        transform: open ? 'scaleY(-1)' : '' //'rotate(180deg)'
                    }}
                >
                    <path d="M1 1L10.328 16.7104C10.4055 16.8409 10.5945 16.8409 10.672 16.7104L20 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            
            {
                open && <div className='absolute ml-3 p-4 rounded-md height-fit border-2 bg-[rgb(255,255,255,0.8)] border-gray-500 z-10'>
                    {/* Vertical line */}
                    <div style={{
                        height: 'calc(100% - 27px)',
                        width: '2px',
                        backgroundColor: 'black',
                        position: 'absolute',
                        left: '14px',
                        top: 0,
                    }}></div>
                    
                    {children}
                </div>
            }
        </li>
    </>);
}

function HeaderGroupItem({link, children}) {
    const [hovered, setHovered]=useState(false);
    
    return (<a className='unstyled relative' href={link || '#'}>
        <div
            onMouseEnter={_=>setHovered(true)}
            onMouseLeave={_=>setHovered(false)}
        >
            {/* Arrow */}
            <svg width={hovered ? '35' : "33"} height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                className='inline pr-2'
            >
                <path d="M0 6.90909H31M31 6.90909L22.5 14M31 6.90909L22.5 1" stroke="black" strokeWidth="2"/>
            </svg>

            {/* Content */}
            <span className={hovered ? "gradient-text" : ""}>{children}</span>
        </div>
    </a>);
}

function HeaderItem({link /*a href's link*/, children}) { //highlighted if is current page
    const asPath=useContext(PathContext);

    const [bgColor, setBgColor]=useState('#fff');
    const colorFromUrl=_=>setBgColor(link===asPath ? '#ffe273' : '#fff'); //if the page is the url page, color yellow, otherwise color white
    
    useEffect(colorFromUrl, [asPath, link]); //initially get color
    
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
                        onMouseLeave={colorFromUrl} //when out of hover, return to regular color
                    >{children}</button>
                </li>
            </a>
        </Link>
    );
}