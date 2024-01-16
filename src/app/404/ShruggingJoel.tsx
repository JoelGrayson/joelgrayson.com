'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ShruggingJoel() {
    const shrugRef=useRef() as React.MutableRefObject<HTMLImageElement>;

    useEffect(()=>{ //shrug animation
        gsap.fromTo(shrugRef.current, {
            // opacity: 0,
            zoom: 0
        }, {
            // opacity: 1,
            zoom: 1,
            duration: 1,
            ease: 'back' //'elastic'
        });
    }, []);

    return <Image ref={shrugRef} width='455' height='326' src='/image/joel/shrugging-2023.png' alt='Shrug' className='relative top-3' />;
}