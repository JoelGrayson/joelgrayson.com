import { useState } from 'react';

export default function HeaderGroup({title, children}) {
    const [open, setOpen]=useState(false);
    
    return (<>
        <li onMouseLeave={_=>setOpen(false)}>
            {/* Active is when mouseDown on button */}
            <button
                className='flex items-center text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                border-solid border-[#11111130] border-[0.2px] hover:bg-[#ffe062] ' //active: #ffd13c
                style={{fontFamily: 'AvenirMedium'}}
                onMouseEnter={_=>setOpen(true)}
            >
                {title}
                {/* v    down arrow      ^ up arrow onHover */}
                <svg width="14" height="12" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='inline ml-2'
                    style={{
                        animation: 'transform 0.5s',
                        transform: open ? 'scaleY(-1)' : '' //flip arrow onHover
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


