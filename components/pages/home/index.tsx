import Image from 'next/image';
import Page from '../../Page';

import SEBLogo from './parts/SEB Logo';
import BtnIcon from './parts/BtnIcon';
import Block from './parts/Block';
import Portrait from './portrait';
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
    }, []);

    return <Page title='Joel Grayson'>
        <div className='w-full p-0 m-0'>
            {/* top */}
            <div className='w-full h-[290px] p-0' style={{background: "linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)"}}>
                <div className='j_max-w relative mx-auto h-full'> {/* container for images same width as content */}
                    {/* signature gif */}
                    <div className='absolute bottom-8 left-11'>
                        <Image src='/image/signature.gif' alt='Joel Grayson Signature' width='371' height='150' />
                    </div>

                    <Portrait />
                </div>
            </div>

            <article className='j_container j_max-w'>
                <Block>
                    <h2 className='title text-center'>Climate Change Projects</h2>
                    <div className='flex justify-center'>
                        <BtnIcon href='#'>
                            <Image alt='solar' height={50} width={50} src='/image/ccc/solar.png' />
                            <span>Solar for Riverdale</span>
                        </BtnIcon> {/* sunbeam going down when hover */}
                        <BtnIcon href='https://studentsforelectricbuses.org'>
                            <SEBLogo size={75} noLink />
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
                            <span>Buseroo</span>
                        </BtnIcon>
                        <BtnIcon href='https://chrome.google.com/webstore/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'>
                            <Image alt='focus-logo' height={50} width={50} src='/image/home/focus-logo.png' />
                            <span>Focus</span>
                            { focusInstalls!=null && <span>{focusInstalls} installs</span> }
                        </BtnIcon>
                        <BtnIcon href='https://chrome.google.com/webstore/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>
                            <Image alt='homework-checker-logo' height={50} width={50} src='/image/home/homework-checker-logo.png' />
                            <span>Homework Checker</span>
                            { hCInstalls!=null && <span>{hCInstalls} installs</span> }
                        </BtnIcon>
                    </div>
                </Block>
                <br />
            </article>
        </div>
    </Page>;
}
