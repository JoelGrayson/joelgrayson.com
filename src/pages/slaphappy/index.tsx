import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Yt from '@/components/global/Yt';

export default function Slaphappy() {
    // https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A
    
    const curtainsRef=useRef() as React.MutableRefObject<HTMLImageElement>;

    useEffect(()=>{
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
        <img src='/image/slaphappy/Channel-Art.png' alt='Slaphappy Channel Art' className='mx-auto pt-[60px] sm:pt-[100px] lg:pt-[220px]' style={{
            width: '60%',
            zIndex: -2,
            position: 'relative'
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
                    color: 'black'
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

        <div style={{width: '60%', textAlign: 'center', maxWidth: 800, margin: '0 auto', marginTop: 14}}>
            Slaphappy is a YouTube channel with comedy skits with my Dad, stop motion animations, coding/building projects, and learning resources.
        </div>

        <div className="w-full flex justify-center mt-10">
            <Link href={'https://youtube.com/@JoelGrayson'} className='button'>
                View Here
            </Link>
        </div>


        <h3 className='text-center mt-10'>Example Videos</h3>
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 j_max-w justify-items-center">
            <Yt width='400px' className='inline'>KzPlEnuLa64</Yt>
            <Yt width='400px' className='inline'>bHHk2FL5Ujs</Yt>
            <Yt width='400px' className='inline'>-optfM81WFs</Yt>
            <Yt width='400px' className='inline'>F0ameJ2K3_0</Yt>
            <Yt width='400px' className='inline'>1o4ugYFm5ag</Yt>
            <Yt width='400px' className='inline'>taCsJ-0EOAY</Yt>
        </div>
    </Page>;
}
