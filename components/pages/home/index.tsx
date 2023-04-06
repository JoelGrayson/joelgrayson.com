import Image from 'next/image';
import Page from '../../Page';

import SEBLogo from './parts/SEB Logo';
import BtnIcon from './parts/BtnIcon';
import Block from './parts/Block';
import { useEffect, useState } from 'react';

// TODO: add shadow to boxes
// TODO: add shading gradient in boxes

export default function Home() {
    const [hCInstalls, setHCInstalls]=useState(null);
    const [focusInstalls, setFocusInstalls]=useState(null);

    useEffect(()=>{
        if (hCInstalls!=null || focusInstalls!=null) return;
        
        fetch('/api/home/stats')
            .then(res=>res.json())
            .then((res)=>{
                if (res.hCInstalls===-1 || !res.hCInstalls) return console.log('hCInstalls is -1');
                if (res.focusInstalls===-1 || !res.focusInstalls) return console.log('focusInstalls is -1');

                console.log('/api/home/stats returned', res);
                setHCInstalls(res.hCInstalls);
                setFocusInstalls(res.focusInstalls);
            });
    // eslint-disable
    }, []);
    // eslint-enable

    return <Page title='Joel Grayson'>
        <div className='w-full p-0 m-0'>
            {/* top */}
            <div className='w-full h-[290px] p-0' style={{background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)"}}>
                <div className='j_max-w relative mx-auto h-full'> {/* container for images same width as content */}
                    {/* signature gif */}
                    <div className='absolute bottom-8 left-11'>
                        <Image src='/image/signature.gif' alt='Joel Grayson Signature' width='371' height='149' priority />
                    </div>
                    {/* Portrait */}
                    <div className='absolute p-0 bottom-0 mb-[-6px] right-24'>
                        <span style={{
                            display: 'inline-flex',
                            justifyContent: 'center',
                            position: 'relative',
                            top: 0
                        }}>
                            <span style={{
                                position: 'relative',
                                top: 40,
                                height: `${270+60}px`,
                                width: `${209+20}px`,
                                borderRadius: 10,
                                marginLeft: 3,
                                marginRight: 3
                            }}>
                                <Image
                                    src={`/image/home/portraits/3.20.2022/Joel Grayson.png`}
                                    height={270} width={209}
                                    alt='Joel Grayson Profile Photo'
                                    style={{
                                        position: 'absolute',
                                        left: '10px',
                                        bottom: '40px',
                                    }}
                                    priority
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <article className='j_container j_max-w'>
                <Block>
                    <h2 className='title text-center'>Climate Change Projects</h2>
                    <div className='flex justify-center'>
                        <BtnIcon href='#'>
                            <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center'}}>
                                <Image alt='solar' height={50} width={37.5} src='/image/ccc/solar.png' />
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
