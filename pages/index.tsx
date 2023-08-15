import Image from 'next/image';
import Page from '@/components/global/Page';

import SEBLogo from '@/components/by-page/home/SEB Logo';
import BtnIcon from '@/components/by-page/home/BtnIcon';
import Block from '@/components/by-page/home/Block';
import { useEffect, useState } from 'react';

// TODO: add shadow to boxes
// TODO: add shading gradient in boxes

export default function Home() {
    const [hCInstalls, setHCInstalls]=useState<number | null>(null);
    const [focusInstalls, setFocusInstalls]=useState<number | null>(null);

    useEffect(()=>{
        if (hCInstalls!=null || focusInstalls!=null) return;
        
        if (process.env.NODE_ENV==='development') { //skip calling api.joelgrayson.com/homepage-stats in development because of CORS error
            console.log('skipping getting homepage-stats in development');
            setHCInstalls(-4);
            setFocusInstalls(-4);
        } else {
            fetch('https://api.joelgrayson.com/homepage-stats')
                .then(res=>res.json())
                .then((res)=>{
                    if (res.hCInstalls===-1 || !res.hCInstalls) return console.log('hCInstalls is -1');
                    if (res.focusInstalls===-1 || !res.focusInstalls) return console.log('focusInstalls is -1');

                    console.log('/api/home/stats returned', res);
                    setHCInstalls(res.hCInstalls);
                    setFocusInstalls(res.focusInstalls);
                });
        }
    // eslint-disable-next-line
    }, []);

    return <Page seo={{
        title: 'Joel Grayson',
        // TODO: description: ''
    }} noPadding>
        <div className='w-full p-0 m-0'>
            {/* top */}
            <div className='w-full h-[290px] p-0' style={{background: 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)'}}>
                {/* container for images same width as content */}
                <div className='
                    j_max-w relative mx-auto px-12 flex justify-around items-end h-full
                    m:flex-row-reverse
                '>
                    {/* signature gif */}
                    {/* <Image
                        src='/image/ucjg/signature.gif' alt='Joel Grayson Signature' width={371*.8} height={149*.8}
                        className={`pb-14 m:w-[${371*.5}px] m:h-[${149*.5}]`}
                        priority
                    /> */}
                    <Image
                        src='/image/ucjg/signature.gif' alt='Joel Grayson Signature'
                        width={371*.8} height={149*.8}
                        className={`
                            mb-14
                            w-[297px] h-[119px]    ${''/* 80% OG size */}
                            m:w-[185px] m:h-[74px] ${''/* 50% OG size */}
                        `}
                        priority
                    />
                    {/* Portrait */}
                    <Image
                        src={`/image/home/portraits/3.20.2022/Joel Grayson.png`} alt='Joel Grayson Profile Photo'
                        width={209} height={270}
                        className={`
                            w-[209px] h-[270px]    ${''/* 100% OG size */}
                            m:w-[146px] m:h-[118px] ${''/* 70% OG size */}
                        `}
                        priority
                    />
                </div>
            </div>

            <article className='j_container j_max-w'>
                <Block>
                    <h2 className='title text-center'>Climate Change Projects</h2>
                    <div className='flex justify-center'>
                        <BtnIcon href='#'>
                            <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center'}}>
                                <Image alt='solar' height={50} width={37.5} src='/image/ccc/solar-for-riverdale/solar-panel.png' />
                            </div>
                            <span>Solar for Riverdale</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                        <BtnIcon href='https://studentsforelectricbuses.org'>
                            <SEBLogo size={75} />
                            <span>Students for Electric Buses</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                        <BtnIcon href='#'>
                            <span>Presentations</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                    </div>
                </Block>
                <Block>
                    <h2 className='title text-center'>Software</h2>
                    <div className='flex justify-center'>
                        <BtnIcon href='https://buseroo.com'>
                            <Image alt='buseroo-logo' height={50} width={50} src='/image/home/buseroo-logo.png' />
                            <span>Buseroo.com</span>
                        </BtnIcon>
                        <BtnIcon href='https://chrome.google.com/webstore/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'>
                            <Image alt='focus-logo' height={50} width={50} src='/image/home/focus-logo.png' />
                            <span>Focus</span>
                            { focusInstalls!=null && <Label>{focusInstalls} installs</Label> }
                        </BtnIcon>
                        <BtnIcon href='https://chrome.google.com/webstore/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>
                            <Image alt='homework-checker-logo' height={50} width={50} src='/image/home/homework-checker-logo.png' />
                            <span className='text-[0.8rem]'>Homework Checker</span>
                            { hCInstalls!=null && <Label>{hCInstalls} installs</Label> }
                        </BtnIcon>
                    </div>
                </Block>
                <br />
            </article>
        </div>
    </Page>;
}

function Label({children}: {children: any}) {
    return <div className='bg-[#ffd166] px-1.5 text-sm py-0.5 rounded-lg border border-[#ecb715]'>{children}</div>;
}

