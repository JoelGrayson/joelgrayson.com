import Image from 'next/image';
import trumpet from './trumpet.png';

import { gsap } from 'gsap';

export default function Listening() {
    return (<>
        <div className='flex'>
            <Image src={trumpet} alt="Trumpet" />
            <Image src='/image/Listening Joel.webp' alt="Listening Joel" className='pl-5' width='216px' height='181px'
                onMouseEnter={e=>{ //lean when hovering
                    gsap.set(e.target, { //move aside
                        x: -30,
                        y: -3,
                        rotate: '-10deg',
                        duration: 1
                    });
                }} onMouseLeave={e=>{ //lean out
                    gsap.set(e.target, {
                        x: 0,
                        rotate: 0,
                        duration: 1
                    });
                }}
            />
        </div>
    </>);
}