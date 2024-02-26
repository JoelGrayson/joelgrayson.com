'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GithubIcon, LinkedInIcon, YoutubeIcon } from '../../icons';
import Link from 'next/link';

const wigglingSrc='/image/slaphappy/s tipping hat.gif';
const stillSrc='/image/slaphappy/still s tipping hat.png';

export default function DefaultFooter() {
    const [src, setSrc]=useState<string>(stillSrc);

    return <footer className='bg-[#facb62]'>
        <div className="flex justify-center p-4 gap-5">
            {/* eslint-disable */}
            <Link href="https://github.com/JoelGrayson" target='_blank' className='flex' aria-label='GitHub Profile' tabIndex={0}>
                <GithubIcon width={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/joelgrayson/" target='_blank' className='flex' aria-label='LinkedIn Profile' tabIndex={0}>
                <LinkedInIcon width={30} />
            </Link>
            {/* Image wiggles onHover by changing its source from the wiggling.gif to the still.png */}
            <Link
                href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'
                className='unstyled flex justify-center items-center'
                onMouseEnter={()=>setSrc(wigglingSrc)}
                onMouseLeave={()=>setSrc(stillSrc)}
                target='_blank'
                tabIndex={0}
                aria-label='Slaphappy YouTube Channel'
            >
                <YoutubeIcon width={30} />
                <div className='flex items-end mr-0 relative bottom-1'>
                    <Image width='53' height='57' priority={false} src={src} className='w-13 color-[#0F1CA0] hue-rotate-30 brightness-[0.5]' alt='S' />
                    <span className='text-xl text-[#0F1CA0] relative top-[-10px]'>laphappy</span>
                </div>
            </Link>
            {/* eslint-enable */}
        </div>
        <div className="text-center pb-4">
            &copy; 2019–{new Date().getFullYear()} Joel Grayson
        </div>
    </footer>;
}
