import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function ViolinBow() {
    const bowRef=useRef();    

    useEffect(()=>{ //violin bow animation back and forth
        const offset=1;
        const dist=7;
        
        const from = {
            x: -1*dist+offset,
            y: -1*dist+offset
        };
        const to={
            x: dist+offset,
            y: dist+offset,
        };
        
        gsap.set(bowRef.current, from);
        
        const tl=gsap.timeline({
            repeat: -1,
            yoyo: true
        });
        tl.to(bowRef.current, {
            ...to,
            duration: .6,
            ease: 'power0'
        });
    }, []);

    return (<>
        <div className='absolute right-[-12px] bottom-[-10px]'>
            <Image src='/images/header/violin.png' height='42px' width='42px' alt='violin' />
        </div>
        <div className='absolute right-[-12px] bottom-[-10px]' ref={bowRef}>
            <Image src='/images/header/bow.png' height='42px' width='42px' alt='bow' />
        </div>
    </>);
}