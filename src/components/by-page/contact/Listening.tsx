import Image from 'next/image';
import { gsap } from 'gsap';

export default function Listening() {
    return <div className='flex z-10'>
        <Image src='/contact/trumpet.webp' alt='Trumpet' width={213} height={164} priority />
        <Image src='/image/joel/listening.webp' alt='Listening Joel' className='pl-5' width='216' height='181'
            onMouseEnter={e=>{ //lean when hovering
                gsap.to(e.target, { //move aside
                    x: -30,
                    y: -3,
                    rotate: '-10deg',
                    duration: .2,
                    ease: 'power2.out'
                });
            }}
            onMouseLeave={e=>{ //lean out
                gsap.to(e.target, {
                    x: 0,
                    rotate: 0,
                    duration: .2,
                    ease: 'power2.out'
                });
            }}
            priority
        />
    </div>;
}
