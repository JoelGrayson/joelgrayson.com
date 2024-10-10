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
                console.log(res);
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
            
            <p className='indent-8'>I helped to bring a <Link href='/combating-climate-change#solar-for-riverdale' target='_blank'>solar installation</Link> to Riverdale Country School, which will save 250 metric tons of CO₂ equivalent each year, save Riverdale money, supply backup power during outages, and provide live energy data for use in the science curriculum. I founded <Link href='https://studentsforelectricbuses.org' target='_blank'>Students for Electric Buses</Link>, a club attempting to transition Riverdale&apos;s bus provider to electric school buses. I also did <Link href='/research/organic-optoelectronics' target='_blank'>research on organic solar cells</Link> at New York University&apos;s Lee Research Lab.</p>
            <p className='indent-8'>I served on Manhattan Community Board One&apos;s Environmental Protection Committee, which plans Lower Manhattan&apos;s climate resiliency projects, and the Youth & Education Committee. I worked with the Mayor&apos;s Office of Climate and Environmental Justice and Street Vendor Project on connecting street vendors to the electrical grid instead of using gas generators (<Link href='/connecting-street-vendors-to-the-grid'>see more</Link>).</p>
            <p className='indent-8'>Among my software projects, <Link href='https://buseroo.com' target='_blank'>Buseroo.com</Link> has helped students find which school bus goes to any address, <Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj' target='_blank'>Homework Checker</Link> helps {(stats?.homeworkCheckerUsers && stats?.homeworkCheckerUsers!==-4) ? stats?.homeworkCheckerUsers : ''} students manage their homework, <Link href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf' target='_blank'>Focus for Google Docs</Link> helps {stats?.focusUsers && stats?.focusUsers!==-4 ? stats?.focusUsers : ''} people write without distractions,{stats?.editTimeUsers && stats.editTimeUsers!==-4 ? <span> <Link href='https://apps.apple.com/us/app/edit-time/id6464405876' target='_blank'>Edit Time</Link> helps {stats.editTimeUsers} people manage their file&apos;s last modified properties,</span> : ''} and <Link href='https://lirongart.com' target='_blank'>LirongArt.com</Link> showcases my mom&apos;s paintings.</p>
            <p className='indent-8'>Among my engineering projects, I built a vending machine that served snacks to people at school, Jacob&apos;s ladder that acts as my morning alarm, wooden pinball machine, and slayer exciter. You can explore my projects in more depth below:</p>
        </div>

        <Tiles stats={stats} />

        <div className='bg-gray-200 pt-5 pb-10' style={{
            borderTop: '1px solid #ddd'
        }}>
            <h3 className='text-center mb-2'>Recent Videos</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, 300px)',
                gap: '1rem',
                justifyContent: 'center',
                justifyItems: 'center'
            }}>
                {/* Venderoo */}
                <Yt width='fit-content'>bHHk2FL5Ujs</Yt>
                {/* TEDx */}
                <Yt width='fit-content'>rV_8xB7rGyQ</Yt>
                {/* The Hectic Journey */}
                <Yt width='fit-content'>1o4ugYFm5ag</Yt>
            </div>
        </div>
    </Page>;
}

