'use client';

import Image from 'next/image';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export default function ViolinBow({ size=42 }: { size?: number }) {
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
        height: size,
        width: size,
        position: 'relative'
    }}>
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <Image src='/image/header/violin.png' height={size} width={size} alt='violin' />
        </div>
        <div ref={bowRef} style={{ position: 'absolute', top: 0, left: 0 }}>
            <Image src='/image/header/bow.png' height={size} width={size} alt='bow' />
        </div>
    </div>;
}
