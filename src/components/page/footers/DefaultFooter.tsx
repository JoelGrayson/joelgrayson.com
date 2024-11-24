'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GithubIcon, LinkedInIcon, YoutubeIcon } from '../../icons';
import Link from 'next/link';

const wigglingSrc='/image/slaphappy/s tipping hat.gif';
const stillSrc='/image/slaphappy/still s tipping hat.png';

export default function DefaultFooter() {
    const [src, setSrc]=useState<string>(stillSrc);

    return <footer className='bg-[#facb62] dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#222] dark:border-t dark:border-[#333]'>
        <div className="flex justify-center items-center p-4 gap-4">
            <Link
                href="https://github.com/JoelGrayson"
                target='_blank'
                className='grid place-items-center rounded-full bg-[#99999900] hover:bg-[#999999ff] transition-colors duration-100 unstyled'
                style={{
                    width: 40,
                    height: 40
                }}
                aria-label={'Joel\'s GitHub'}
                title={'Joel\'s GitHub'}
                tabIndex={0}
            >
                <GithubIcon width={30} className='fill-black ' />
            </Link>

            <Link
                href="https://www.linkedin.com/in/joelgrayson/"
                target='_blank'
                className='grid place-items-center rounded-md bg-[#6f97ad00] hover:bg-[#6f97adff] transition-colors duration-100 unstyled'
                style={{
                    width: 40,
                    height: 40
                }}
                aria-label="Joel's LinkedIn"
                title="Joel's LinkedIn"
                tabIndex={0}
            >
                <LinkedInIcon width={30} className="fill-[#0273B1] group-hover/linkedin:fill-blue-900" />
            </Link>

            {/* Image wiggles onHover by changing its source from the wiggling.gif to the still.png */}
            <Link
                href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A'
                className='unstyled flex justify-center items-center ml-2'
                onMouseEnter={()=>setSrc(wigglingSrc)}
                onMouseLeave={()=>setSrc(stillSrc)}
                target='_blank'
                tabIndex={0}
                aria-label='Slaphappy YouTube Channel'
            >
                <YoutubeIcon width={30} />
                <div className='flex items-end mr-0 relative bottom-1'>
                    <Image width='53' height='57' priority={false} src={src} className='w-13 color-[#0F1CA0] hue-rotate-30 brightness-[0.5] dark:brightness-[0.8]' alt='S' />
                    <span className='text-xl text-[#0F1CA0] dark:text-dark-text relative top-[-10px]'>laphappy</span>
                </div>
            </Link>
        </div>
        
        <div className="text-center pb-4">
            &copy; 2019–{new Date().getFullYear()} Joel Grayson
        </div>
    </footer>;
}
