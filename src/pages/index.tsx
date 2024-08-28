import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Content from '@/app/Content';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const [hCInstalls, setHCInstalls]=useState<number | null>(null);
    const [focusInstalls, setFocusInstalls]=useState<number | null>(null);
    const [buserooSearches, setBuserooSearches]=useState<number | null>(null);
    const editTimeInstalls=1980 as number; //manually inserted from AppStoreConnect analytics

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
    
    return <Page noPadding pathname='/' seo={{
        title: 'Joel Grayson',
        keywords: [
            'Joel Grayson',
            'New York'
        ],
        description: 'The official website of the United Cells of Joel Grayson',
        og: {
            image: '/image/home/portraits/4.22.2023/Joel Grayson.jpg',
            imageAlt: 'Joel Grayson Profile Photo'
        }
    }}>
        {/* Profile and Signature */}
        <div className='w-full h-[290px] m:h-[220px] p-0' style={{background: 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%)'}}>
            {/* container for images same width as content */}
            <div className={`
                j_max-w relative mx-auto d:px-12 flex justify-around items-end h-full
                ${''/*m:flex-row-reverse*/}
            `}>
                {/* signature gif */}
                <Image
                    src='/image/ucjg/signature.gif' alt='Joel Grayson Signature'
                    width={371*.8} height={149*.8}
                    className={`
                        d:mx-3
                        mb-14
                        w-[297px] h-[119px]    ${''/* 80% OG size */}
                        m:w-[185px] m:h-[74px] ${''/* 50% OG size */}
                    `}
                    priority
                />
                {/* Portrait */}
                <Image
                    src='/image/home/portraits/5.26.2024/Joel Grayson.webp' alt='Joel Grayson Profile Photo'
                    width={364/2} height={540/2}
                    className={`
                        d:mx-3
                        w-[182px] h-[270px]    ${''/* 100% OG size */}
                        m:w-[127.4px] m:h-[189px] ${''/* 70% OG size */}
                    `}
                    priority
                />
            </div>
        </div>

        {/* Text Description */}
        <div className="w-full max-w-[680px] px-4 mx-auto pt-8 pb-1 leading-8">
            <p className='indent-8'>Hi, I&apos;m Joel. I like to work on <Link href='/machines' target='_blank'>machines</Link>, <Link href='/software' target='_blank'>software</Link>, and <Link href='/combating-climate-change' target='_blank'>climate solutions</Link>.</p>
            
            <p className='indent-8'>I helped to bring a <Link href='/combating-climate-change#solar-for-riverdale' target='_blank'>solar installation</Link> to Riverdale Country School, which will save 250 metric tons of CO₂ equivalent each year, save Riverdale money, supply backup power during outages, and provide live energy data for use in the science curriculum. I founded <Link href='https://studentsforelectricbuses.org' target='_blank'>Students for Electric Buses</Link>, a club attempting to transition Riverdale’s bus provider to electric school buses. I also did <Link href='/research/organic-optoelectronics' target='_blank'>research on organic solar cells</Link> at New York University’s Lee Lab.</p>
            <p className='indent-8'>I served on Manhattan Community Board One’s Environmental Protection Committee, which plans Lower Manhattan’s climate resiliency projects, and the Youth & Education Committee. I worked with the Mayor’s Office of Climate and Environmental Justice and Street Vendor Project on connecting street vendors to the electrical grid instead of using gas generators (<Link href='/connecting-street-vendors-to-the-grid'>see more</Link>).</p>
            <p className='indent-8'>Among my software projects, <Link href='https://buseroo.com' target='_blank'>Buseroo.com</Link> has helped students find which school bus goes to any address, <Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj' target='_blank'>Homework Checker</Link> helps {hCInstalls && hCInstalls!=-4 || ''} students manage their homework, <Link href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf' target='_blank'>Focus for Google Docs</Link> helps {focusInstalls && focusInstalls!=-4 || ''} people write without distractions,{editTimeInstalls && editTimeInstalls!=-4 ? <span> <Link href='https://apps.apple.com/us/app/edit-time/id6464405876' target='_blank'>Edit Time</Link> helps {editTimeInstalls} people manage their file's last modified properties,</span> : ''} and <Link href='https://lirongart.com' target='_blank'>LirongArt.com</Link> showcases my mom’s paintings.</p>
            <p className='indent-8'>Among my engineering projects, I built a vending machine that served snacks to people at school, Jacob’s ladder that acts as my morning alarm, wooden pinball machine, and slayer exciter. You can explore my projects in more depth below:</p>
        </div>


        {/* Squares (client component) */}
        <Content {...{hCInstalls, focusInstalls, editTimeInstalls, buserooSearches}} />


        {/* <div className='bg-gray-400'>
            <h3>Recent</h3>
            {/* TEDx video *}
            <Yt>rV_8xB7rGyQ</Yt>
            {/* Venderoo video *}
            {/* TODO: */}
            
            {/* GuardBox video /}
            <Yt>DbfRmZZx4VA</Yt>
        </div> */}
    </Page>;
}

