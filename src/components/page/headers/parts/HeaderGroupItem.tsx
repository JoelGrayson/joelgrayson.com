'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HeaderGroupItem({ pathname, link, children, arrow=true /* bool to show arrow */ }: { pathname?: string; children: any, link?: string, arrow?: boolean }) {
    const [hovered, setHovered]=useState(false); //hovered & open
    
    return <Link
        className='unstyled relative flex'
        href={link || '#'}
        target={link?.trim()?.slice(0, 4)==='http' ? '_blank' : undefined} //open in new tab if external link
        tabIndex={0}
    >
        <div
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
        >
            {/* --> Left Arrow (onhover increases arrow length) */}
            { arrow && <svg className='inline pr-2' width={hovered ? '37px' : '33px'} height='15px' viewBox='0 0 33 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 6.90909H31M31 6.90909L22.5 14M31 6.90909L22.5 1' stroke='black' strokeWidth='2'/>
            </svg> }

            {/* Content */}
            <span className={hovered ? 'gradient-text' : ''}>{children}</span>
        </div>
    </Link>;
}
