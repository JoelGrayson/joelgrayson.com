import { gsap } from 'gsap';
import Page from '../components/global/Page';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Custom404() {
    const shrugRef=useRef() as React.MutableRefObject<HTMLImageElement>;

    useEffect(()=>{
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

    return <Page nopadding>
        <div className='flex justify-center items-center p-24'>
            <div className='left w-[500px] h-[350px] grid place-items-center'>
                <Image ref={shrugRef} width='455' height='342' src='/image/joel/shrugging.png' alt='Shrug' />
            </div>
            <div className='right flex flex-col items-center gap-8'>
                <h1 className='text-5xl font-bold'>404</h1>
                <p>This page does not exist.</p>
                <Link href='/'>
                    <button className='btn-red'>Return home</button>
                </Link>
            </div>
        </div>
    </Page>;
}
