'use client';

import Image from 'next/image';

import SEBLogo from '@/components/by-page/home/SEB Logo';
import BtnIcon from '@/components/by-page/home/BtnIcon';
import { useEffect, useState } from 'react';

// TODO: add shadow to boxes
// TODO: add shading gradient in boxes

export default function Content() {
    const [hCInstalls, setHCInstalls]=useState<number | null>(null);
    const [focusInstalls, setFocusInstalls]=useState<number | null>(null);
    const [buserooSearches, setBuserooSearches]=useState<number | null>(null);

    useEffect(()=>{
        if (hCInstalls!=null || focusInstalls!=null) return;
        
        // Need to call api.joelgrayson.com in order to use Puppeteer
        if (process.env.NODE_ENV==='development') { //skip calling api.joelgrayson.com/live-stats in development because of CORS error
            console.log('skipping getting live-stats in development');
            setBuserooSearches(-4);
            setHCInstalls(-4);
            setFocusInstalls(-4);
        } else {
            fetch('https://api.joelgrayson.com/live-stats')
                .then(res=>res.json())
                .then((res)=>{
                    if (res.hCInstalls===-1 || !res.hCInstalls) return console.log('hCInstalls is -1');
                    if (res.focusInstalls===-1 || !res.focusInstalls) return console.log('focusInstalls is -1');

                    console.log('/api/home/stats returned', res);
                    setHCInstalls(res.hCInstalls);
                    setFocusInstalls(res.focusInstalls);
                });
            
            fetch('https://buseroo.com/api/overall/stats')
                .then(res=>res.json())
                .then(res=>{
                    setBuserooSearches(res.searches);
                });
        }
    // eslint-disable-next-line
    }, []);

    return <>
        {/* Icons */}
        <article className='j_container !max-w-[700px] d:gap-[20px]' style={{
            display: 'grid',
            marginTop: 30,
            paddingBottom: 30,
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            justifyItems: 'center',
        }}>
            <BtnIcon href='/combating-climate-change#solar-for-riverdale' target='_self'>
                <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center'}}>
                    <Image alt='solar' height={50} width={37.5} src='/image/home/optimized/solar-for-riverdale.avif' />
                </div>
                <span>Solar for Riverdale</span>
            </BtnIcon> {/* sunbeam going down when hover */}
            <BtnIcon href='https://studentsforelectricbuses.org'>
                <SEBLogo size={75} />
                <span>Students for Electric Buses</span>
            </BtnIcon> {/* sunbeam going down when hover */}
            <BtnIcon href='/machines' target='_self'>
                <div style={{width: 80, height: 69, display: 'grid', placeItems: 'center'}}>
                    <Image alt='Combination Safe Machine' height={80} width={71.3} src='/image/home/optimized/machine.avif' />
                </div>
                <span>Machines</span>
            </BtnIcon> {/* sunbeam going down when hover */}
            <BtnIcon href='https://buseroo.com'>
                <Image alt='buseroo-logo' height={48} width={48} className='mb-0.5' src='/image/home/optimized/buseroo-logo.avif' />
                <span>Buseroo.com</span>
                { buserooSearches!=null && <Label>{buserooSearches} searches</Label> }
            </BtnIcon>
            <BtnIcon href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'>
                <Image alt='focus-logo' height={50} width={50} src='/image/home/optimized/focus-logo.avif' />
                <span>Focus</span>
                { focusInstalls!=null && <Label>{focusInstalls} installs</Label> }
            </BtnIcon>
            <BtnIcon href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>
                <Image alt='Homework Checker Logo' height={50} width={50} src='/image/home/optimized/homework-checker-logo.avif' />
                <span className='text-[0.8rem]'>Homework Checker</span>
                { hCInstalls!=null && <Label>{hCInstalls} installs</Label> }
            </BtnIcon>
        </article>
    </>;
}

function Label({children}: {children: any}) {
    return <div className='absolute bottom-2 bg-[#ffd166] px-1.5 text-sm py-0.5 rounded-lg border border-[#ecb715]'>{children}</div>;
}

