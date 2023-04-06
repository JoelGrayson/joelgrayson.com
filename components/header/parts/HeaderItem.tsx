import { useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { PathContext } from './PathContext';

export default function HeaderItem({link /*a href's link*/, children}: {link: string, children: ReactNode}) { //highlighted if is current page
    const asPath=useContext(PathContext);

    const [bgColor, setBgColor]=useState('#fff');
    const colorFromUrl=(_?: any)=>setBgColor(link===asPath ? '#ffe273' : '#fff'); //if the page is the url page, color yellow, otherwise color white

    useEffect(colorFromUrl, [asPath, link]); //initially get color
    
    return <Link href={link}>
        <li className='cursor-pointer'>
            {/* Active is when mouseDown on button */}
            <button
                className='text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                border-solid border-[#11111130] border-[0.2px]' //active: #ffd13c
                style={{backgroundColor: bgColor, fontFamily: 'AvenirMedium'}}
                onMouseEnter={_=>setBgColor('#ffe062')} //hover color
                onMouseLeave={colorFromUrl} //when out of hover, return to regular color
            >
                {children}
            </button>
        </li>
    </Link>;
}
