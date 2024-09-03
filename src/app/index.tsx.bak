import { Metadata } from 'next';
import Image from 'next/image';
import { AppPage as Page } from '@/components/page/DefaultPage';
import Content from './Content';

export const metadata: Metadata={
    title: 'Joel Grayson',
    description: 'The official website of the United Cells of Joel Grayson'
};

export default function Home() {
    return <Page noPadding pathname='/'>
        {/* Profile and Signature */}
        <div className='w-full h-[290px] m:h-[220px] p-0' style={{background: 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)'}}>
            {/* container for images same width as content */}
            <div className='
                j_max-w relative mx-auto px-12 flex justify-around items-end h-full
                m:flex-row-reverse
            '>
                {/* signature gif */}
                <Image
                    src='/image/ucjg/signature.gif' alt='Joel Grayson Signature'
                    width={371*.8} height={149*.8}
                    className={`
                        ml-3
                        mb-14
                        w-[297px] h-[119px]    ${''/* 80% OG size */}
                        m:w-[185px] m:h-[74px] ${''/* 50% OG size */}
                    `}
                    priority
                />
                {/* Portrait */}
                <Image
                    src='/image/home/portraits/4.22.2023/Joel Grayson.webp' alt='Joel Grayson Profile Photo'
                    width={229} height={270}
                    className={`
                        mr-3
                        w-[229px] h-[270px]    ${''/* 100% OG size */}
                        m:w-[160px] m:h-[189px] ${''/* 70% OG size */}
                    `}
                    priority
                />
            </div>
        </div>

        {/* Client component */}
        <Content />
    </Page>;
}

