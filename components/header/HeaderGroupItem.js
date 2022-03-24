import { useState } from 'react';

export default function HeaderGroupItem({link, children, arrow=true /* bool to show arrow */}) {
    const [hovered, setHovered]=useState(false);
    
    return (<a className='unstyled relative' href={link || '#'}>
        <div
            onMouseEnter={_=>setHovered(true)}
            onMouseLeave={_=>setHovered(false)}
        >
            {/* --> Left Arrow (onhover increases arrow length) */}
            {arrow && (
                <svg width={hovered ? '37px' : "33px"} height="15px" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className='inline pr-2'
                >
                    <path d="M0 6.90909H31M31 6.90909L22.5 14M31 6.90909L22.5 1" stroke="black" strokeWidth="2"/>
                </svg>
            )}

            {/* Content */}
            <span className={hovered ? "gradient-text" : ""}>{children}</span>
        </div>
    </a>);
}