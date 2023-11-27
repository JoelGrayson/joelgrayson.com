import { useState } from 'react';
import Image from 'next/image';
import { GithubIcon, YoutubeIcon } from '../../icons';

const wigglingSrc='/image/slaphappy/s tipping hat.gif';
const stillSrc='/image/slaphappy/still s tipping hat.png';

export default function DefaultFooter() {
    const [src, setSrc]=useState<string>(stillSrc);

    return <footer className='bg-[#facb62] flex justify-center p-4 gap-5'>
        {/* Image wiggles onHover by changing its source from the wiggling.gif to the still.png */}
        {/* eslint-disable */}
        <a href="https://github.com/JoelGrayson" target='_blank' className='flex' aria-label='GitHub Profile'>
            <GithubIcon width={30} />
        </a>
        <a href='https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A' className='unstyled flex justify-center items-center'
            onMouseEnter={()=>setSrc(wigglingSrc)}
            onMouseLeave={()=>setSrc(stillSrc)}
        >
            <YoutubeIcon width={30} />
            <div className='flex items-end mr-0 relative bottom-1'>
                <Image width='53' height='57' priority={false} src={src} className='w-13 color-[#0F1CA0] hue-rotate-30 brightness-[0.5]' alt='S' />
                <span className='text-xl text-[#0F1CA0] relative top-[-10px]'>laphappy</span>
            </div>
        </a>
        {/* eslint-enable */}
    </footer>;
}
