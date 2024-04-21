import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function Slaphappy() {
    // https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A
    
    const curtainsRef=useRef() as React.MutableRefObject<HTMLImageElement>;

    useLayoutEffect(()=>{
        const el=curtainsRef.current!;
        gsap.fromTo(
            el,
            { scale: 3 },
            { scale: 1 }
        );
    }, []);
    
    return <Page
        seo={{
            title: 'Slaphappy, Joel\'s YouTube Channel',
            description: 'Comedy skits with my dad',
            og: {
                image: '/image/opengraph/slaphappy.png'
            }
        }}
        style={{overflow: 'hidden'}}
        pathname='/slaphappy'
        noPadding bottomPadding
    >
        {/* eslint-disable */}
        {/* Curtain background image */}
        <img src='/image/slaphappy/curtains.png' ref={curtainsRef} alt='Curtains' style={{
            position: 'absolute',
            top: -30,
            left: 0,
            width: '100vw',
            zIndex: -1
        }} />
        <Link href={'https://youtube.com/@JoelGrayson'} className='unstyled'>
        <img src='/image/slaphappy/Channel-Art.png' alt='Slaphappy Channel Art' className='mx-auto pt-[60px] sm:pt-[100px] lg:pt-[160px]' style={{
            width: '60%',
            zIndex: -2,
            position: 'inherit'
        }} />
        {/* eslint-enable */}

        {/* <div className="flex justify-center items-center"> */}
            <div className='flex items-center md:flex md:gap-8 ml-[25%] mb-10'>
                <div style={{
                    backgroundColor: '#ffde5a',
                    border: '4px solid #ff5758',
                    borderRadius: 10,
                    width: 'fit-content',
                    marginLeft: '20%',
                    marginTop: 50,
                    padding: '9px 25px',
                }}>
                    <div className='text-xl bold pb-0'>Hilarity Guaranteed!</div>
                    <div className='text-sm font-semibold pt-2 text-center'>*or your money back</div>
                </div>

                <div className='pl-[20%] md:pl-0' style={{
                    height: 'fit-content',
                    marginTop: 20,
                    display: 'flex',
                    gap: 10
                }}>
                    {/* <Link href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A?sub_confirmation=1'> */}
                        <Image src='/image/slaphappy/Subscribe.png' alt='Subscribe' width='82' height='22' />
                    {/* </Link> */}
                    <span>← Why not?</span>
                </div>
            </div>
        </Link>
        {/* </div> */}

        <div style={{width: '60%', maxWidth: 800, margin: '0 auto', marginTop: 14}}>
            <p>Slaphappy shows videos my Dad and I have made together since I was 11. If you find them funny, our names are Joel Grayson and Paul Grayson. If not, they are anonymous. The channel has separate sections for stop motion animation and my various projects. I am not a professional trumpet player.</p>
        </div>

        <div className="w-full flex justify-center mt-10">
            <Link href={'https://youtube.com/@JoelGrayson'} className='button'>
                View Here
            </Link>
        </div>
    </Page>;
}
