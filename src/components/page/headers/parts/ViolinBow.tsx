'use client';

import Image from 'next/image';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export default function ViolinBow() {
    const bowRef=useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement> ;

    useEffect(()=>{ //violin bow animation back and forth
        const offset=1;
        const dist=7;
        
        const from={
            x: -1*dist+offset,
            y: -1*dist+offset
        };
        const to={
            x: dist+offset,
            y: dist+offset,
        };
        
        gsap.set(bowRef.current!, from);
        
        const tl=gsap.timeline({
            repeat: -1,
            yoyo: true
        });
        tl.to(bowRef.current!, {
            ...to,
            duration: .6,
            ease: 'power0'
        });
    }, []);

    return <div style={{
        height: 40,
        width: 40,
        position: 'relative'
    }}>
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <Image src='/image/header/violin.png' height='42' width='42' alt='violin' />
        </div>
        <div ref={bowRef} style={{ position: 'absolute', top: 0, left: 0 }}>
            <Image src='/image/header/bow.png' height='42' width='42' alt='bow' />
        </div>
    </div>;
}
