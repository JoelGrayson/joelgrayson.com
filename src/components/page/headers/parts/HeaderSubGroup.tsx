'use client';

import { useState } from 'react';
import HeaderSubGroupArrow from './HeaderSubGroupArrow';

export default function HeaderSubGroup({ pathname, link, title, children }: { pathname?: string; link?: string; title: string, children: any }) {
    const [hovered, setHovered]=useState(false); //hovered & open
    // const [hovered, setHovered]=[true, (e: any)=>{}]; //always open for testing

    return <button className='unstyled relative w-full items-center p-0 m-0 flex'
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        style={{ height: '24px' }}
        tabIndex={0}
        onClick={()=>{
            setHovered(true);
        }}
    >
        {/* --> Left Arrow (onhover increases arrow length) */}
        <svg className='inline pr-2' width='33px' height='15px' viewBox='0 0 33 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 6.90909H31M31 6.90909L22.5 14M31 6.90909L22.5 1' className='stroke-black dark:stroke-white' strokeWidth='2'/>
        </svg>
        
        <span
            className='inline'
            onMouseEnter={()=>setHovered(true)}
        >
            <span
                className={hovered ? 'gradient-text semibold' : ''}
                style={{
                    backgroundColor: pathname===link ? '#ffe273' : undefined,
                    borderRadius: 10
                }}
            >{title}</span>
            {/* side arrow > which becomes --> on hover */}
            <HeaderSubGroupArrow open={hovered} />
        </span>
        
        { /* show children if open */
            hovered && <div className='p-4 rounded-md height-fit backdrop-blur-sm bg-[#ffffffdd] dark:bg-[#000000dd]' style={{
                zIndex: 5,
                width: 'fit-content',
                border: '2px solid gray',
                left: '7.6rem',
                position: 'absolute',
                top: '-100%',
            }}>
                <span style={{whiteSpace: 'nowrap', userSelect: 'none'}}>{children}</span>
            </div>
        }
    </button>;
}
