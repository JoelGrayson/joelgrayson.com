import { gsap } from 'gsap';
import Page from '@/components/page-client/DefaultPage';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
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

    const router=useRouter();

    useEffect(()=>{ //report error
        if (!window || !router) return;
        if (window.location.hostname==='localhost')
            return console.log('not reporting because localhost');
        if (router.query.dont_report)
            return console.log('not reporting because dont_report in query');
        
        console.log('reporting error');
        fetch('/api/log-error/page-not-found');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeof window, router]);
    
    return <Page noPadding seo={{
        noIndex: true
    }}>
        <div className='flex justify-center items-center p-24'>
            <div className='left w-[500px] h-[350px] grid place-items-center'>
                <Image ref={shrugRef} width='455' height='326' src='/image/joel/shrugging-2023.png' alt='Shrug' className='relative top-3' />
            </div>
            <div className='right flex flex-col items-center gap-8'>
                <h1 className='text-5xl font-bold'>404</h1>
                <p>This page does not exist.</p>
                <Link href='/' className='unstyled'>
                    <button className='btn-red'>Return home</button>
                </Link>
            </div>
        </div>
    </Page>;
}
