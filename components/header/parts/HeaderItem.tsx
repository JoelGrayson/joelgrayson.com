import { useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { PathContext } from './PathContext';

export default function HeaderItem({ link /*a href's link*/, children, className }: { link: string, children: ReactNode; className?: any }) { //highlighted if is current page
    const asPath=useContext(PathContext);

    const [bgColor, setBgColor]=useState('#fff');
    const colorFromUrl=()=>setBgColor(link===asPath ? '#ffe273' : '#fff'); //if the page is the url page, color yellow, otherwise color white

    useEffect(colorFromUrl, [asPath, link]); //initially get color
    
    return <Link href={link} className={className}>
        <li className='cursor-pointer m:flex m:justify-center'>
            {/* Active is when mouseDown on button */}
            <button
                className='
                    text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                    border-solid border-[#11111130] border-[0.2px]
                    mobile:px-[.5rem] mobile:py-[.3rem]
                ' 
                style={{backgroundColor: bgColor, fontFamily: 'AvenirMedium'}}
                // Active: #ffd13c
                onMouseEnter={()=>setBgColor('#ffe062')} //hover color
                onMouseLeave={colorFromUrl} //when out of hover, return to regular color
            >
                {children}
            </button>
        </li>
    </Link>;
}
