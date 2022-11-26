import { useState } from 'react';
import UpDownArrow from '../../UpDownArrow';

export default function HeaderGroup({title, children}: any) {
    const [open, setOpen]=useState(false);
    
    return (<li onMouseLeave={_=>setOpen(false)}>
        {/* Active is when mouseDown on button */}
        <button
            className='flex items-center text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
            border-solid border-[#11111130] border-[0.2px] hover:bg-[#ffe062] ' //active: #ffd13c
            style={{fontFamily: 'AvenirMedium'}}
            onMouseEnter={_=>setOpen(true)}
        >
            {title}
            {/* v    down arrow      ^ up arrow onHover */}
            <UpDownArrow dir={(open ? 'up' : 'down')} />
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
                }}/>
                
                {children}
            </div>
        }
    </li>);
}


