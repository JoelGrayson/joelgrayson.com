import Image from 'next/image';
import { gsap } from 'gsap';
import { useRef, useLayoutEffect } from 'react';

export default function ViolinBow() {
    const bowRef=useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement> ;

    useLayoutEffect(()=>{ //violin bow animation back and forth
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

    return <>
        <div className='absolute right-[-12px] bottom-[-10px]'>
            <Image src='/image/header/violin.png' height='42' width='42' alt='violin' />
        </div>
        <div className='absolute right-[-12px] bottom-[-10px]' ref={bowRef}>
            <Image src='/image/header/bow.png' height='42' width='42' alt='bow' />
        </div>
    </>;
}
