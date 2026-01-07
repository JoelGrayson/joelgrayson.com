import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Tiles, { Stats } from '@/components/by-page/home/Tiles';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Yt from '@/components/global/Yt';

export default function Home() {
    const [stats, setStats]=useState<Stats | null>(null);
    
    useEffect(()=>{
        if (stats) return;
        
        // if (process.env.NODE_ENV==='development') { //make sure not to make too many requests in dev
        //     setStats({
        //         "id": "cm1wwlsmg0000onyg75rxzo9g",
        //         "date": "2024-10-06T01:27:54.665Z",
        //         "focusUsers": 753,
        //         "homeworkCheckerUsers": 1000,
        //         "buserooSearches": 750,
        //         "shirtocracyOrders": 24,
        //         "journalUsers": -4,
        //         "projectsUsers": -4,
        //         "habitUsers": -4,
        //         "numbersUsers": -4,
        //         "blogViews": 1756,
        //         "buserooUsers": 7,
        //         "editTimeUsers": 2000,
        //         "shanghaiDictionarySearches": 259,
        //         "driveDownloadLinkGeneratorVisits": 10004,
        //         "dropboxDownloadLinkGeneratorVisits": 1595,
        //         "boxDownloadLinkGeneratorVisits": 8528,
        //         "pageVisits": [
        //             {
        //                 "id": "cm0389rqy0000106y8v8xq4pd",
        //                 "url": "/",
        //                 "visits": 25
        //             },
        //             {
        //                 "id": "clzg2dcwq002d2ffztkbce761",
        //                 "url": "/software/box-download-link-generator",
        //                 "visits": 8528
        //             },
        //             {
        //                 "id": "clzga9bvr000210d8f64uk69x",
        //                 "url": "/software/onedrive-download-link-generator",
        //                 "visits": 8430
        //             },
        //             {
        //                 "id": "clzgaat8t000310d8al7x2xtq",
        //                 "url": "/software/dropbox-download-link-generator",
        //                 "visits": 1595
        //             },
        //             {
        //                 "id": "clzg1r53x00002ffz2kjyr5pn",
        //                 "url": "/software/drive-download-link-generator",
        //                 "visits": 10004
        //             }
        //         ]
        //     })
        //     return;
        // }

        fetch('/api/stats')
            .then(res=>res.json())
            .then(res=>{
                console.log('Got back stats', res);
                setStats(res);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return <Page noPadding pathname='/' seo={{
        title: 'Joel Grayson',
        keywords: [
            'Joel Grayson',
            'New York'
        ],
        description: 'The official website of the United Cells of Joel Grayson',
        og: {
            image: '/image/home/portraits/4.20.2025/Joel Grayson.webp',
            imageAlt: 'Joel Grayson Profile Photo'
        }
    }}>
        {/* Profile and Signature */}
        <div className='
            w-full h-[290px] m:h-[220px] p-0
            bg-[linear-gradient(120deg,rgba(255,255,255,1)_0%,rgba(216,216,216,1)_100%)]
            dark:bg-[linear-gradient(120deg,var(--dark-bg)_0%,var(--dark-bg-lighter)_100%)]
        '>
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
                        dark:invert
                    `}
                    priority
                />
                {/* Portrait */}
                <Image
                    src='/image/home/portraits/4.20.2025/Joel Grayson.webp' alt='Joel Grayson Profile Photo'
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
            <p className='indent-8'>Hi, I&apos;m Joel. I&apos;ve worked on many projects so far and look forward to many more in the future. My apps have over 10,000 users with $2,000+ in revenue. <Link href='https://apps.apple.com/us/app/edit-time/id6464405876?pt=126612879&ct=web' target='_blank'>Edit Time</Link> changes file creation dates, <Link href='https://buseroo.com' target='_blank'>Buseroo.com</Link> calculates which school bus goes to any address, <Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj?utm_source=jgcom&utm_campaign=web&utm_medium=site' target='_blank'>Homework Checker</Link> helps manage homework, and <Link href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf?utm_source=jgcom&utm_campaign=web&utm_medium=site' target='_blank'>Focus for Google Docs</Link> is a tool to enter the writing flow. I like to build machines, like a <Link href='https://youtu.be/bHHk2FL5Ujs' target='_blank'>vending machine</Link> that served snacks in the school hallway. Regarding climate change, I helped plan a <Link href='/combating-climate-change#solar-for-riverdale' target='_blank'>109 kW solar installation</Link> for Riverdale Country School, founded <Link href='https://studentsforelectricbuses.org' target='_blank'>Students for Electric Buses</Link> to help transition Riverdale&apos;s bus provider to electric school buses, and did <Link href='/research/organic-optoelectronics' target='_blank'>research on organic solar cells</Link> at New York University&apos;s Lee Lab. In my community, I served on Manhattan Community Board One. I also run a <Link href='https://youtube.com/@JoelGrayson'>comedy YouTube channel</Link> with my Dad.</p>
        </div>

        <Tiles stats={stats} />

        <div className='
            py-5 border-t
            bg-gray-200 border-[#ddd]
            dark:bg-dark-bg dark:border-[#333] dark:text-dark-text
        '>
            {/* <h3 className='text-center mb-2'>Recent Videos</h3> */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, 300px)',
                gap: '1rem',
                justifyContent: 'center',
                justifyItems: 'center'
            }}>
                {/* Venderoo */}
                <div className='w-full'>
                    <Yt width='fit-content'>bHHk2FL5Ujs</Yt>
                    <div className='text-center'>Arduino-Based Vending Machine</div>
                </div>
                {/* TEDx */}
                <div className='w-full'>
                    <Yt width='fit-content'>rV_8xB7rGyQ</Yt>
                    <div className='text-center'>TEDx Talk on Climate Change</div>
                </div>
                {/* The Hectic Journey */}
                <div className='w-full'>
                    <Yt width='fit-content'>1o4ugYFm5ag</Yt>
                    <div className='text-center'>Stop Motion Animation</div>
                </div>
            </div>
        </div>
    </Page>;
}

