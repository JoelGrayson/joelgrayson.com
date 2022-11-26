import { useState } from 'react';

import wiggle from './slaphappy s.gif';
import still from './still slaphappy s.png';
import Image from 'next/image';

function Footer() {
    const [src, setSrc]=useState(still);

    return (
        <footer className='bg-[#facb62] flex justify-center p-4'>
            {/* Image wiggles onHover by changing its source from the wiggling.gif to the still.png */}
            <a href="https://www.youtube.com/SonAndFather" className='no-underline flex justify-center items-center'
                onMouseEnter={_=>setSrc(wiggle)}
                onMouseLeave={_=>setSrc(still)}
            >
                <YoutubeSvg/>
                <div className='flex items-end'>
                    <Image src={src} className='w-13 color-[#0F1CA0] hue-rotate-30 brightness-[0.5]' alt='S' />
                    <span className='text-xl text-[#0F1CA0]'>laphappy</span>
                </div>
            </a>
        </footer>
    );
}

function YoutubeSvg() {
    return (
        <svg preserveAspectRatio="none" viewBox="0 3 24 18" height="25px" width="34px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g>
                <path fill='#FF2600' d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"></path>
            </g>
        </svg>
    );
}

export default Footer;