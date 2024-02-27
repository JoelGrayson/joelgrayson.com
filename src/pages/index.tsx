import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Content from '../app/Content';
import Link from 'next/link';

export default function Home() {
    return <Page noPadding bottomPadding pathname='/' seo={{
        title: 'Joel Grayson',
        keywords: [
            'Joel Grayson',
            'New York'
        ],
        description: 'The official website of the United Cells of Joel Grayson',
        og: {
            image: '/image/home/portraits/4.22.2023/JoelGrayson.jpg',
            imageAlt: 'Joel Grayson Profile Photo'
        }
    }}>
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

        <div className="w-full max-w-[650px] mx-auto pt-8 pb-1 leading-8">
            <p className='indent-8'>Hi, I&apos;m Joel. I have a passion for <Link href='/combating-climate-change'>combating climate change</Link>, <Link href='/nyc'>government</Link>, <Link href='/software'>software development</Link>, and <Link href='/machines'>engineering</Link>.</p>
            <p className='indent-8'>I am working to bring a <Link href='/combating-climate-change#solar-for-riverdale'>solar installation</Link> to Riverdale Country School, which will save 331 metric tons of CO₂ equivalent each year, save Riverdale money, supply backup power during outages, and provide live energy data for use in the science curriculum. I founded <Link href='https://studentsforelectricbuses.org' target='_blank'>Students for Electric Buses</Link>, a club attempting to transition Riverdale’s bus provider to electric school buses. I also did <Link href='/research/organic-optoelectronics'>research on organic solar cells</Link> at New York University’s Lee Lab.</p>
            <p className='indent-8'>I serve on Manhattan Community Board One’s Environmental Protection Committee, which plans Lower Manhattan’s climate resiliency projects, and the Youth & Education Committee. I am working with the Mayor’s Office of Climate and Environmental Justice and Street Vendor Project to enable street vendors to connect to the electrical grid instead of using gas generators, which would prevent 450 tons of gas from being burned annually per vendor and improve NYC’s air quality (<Link href='/connecting-street-vendors-to-the-grid'>see more</Link>). I am working to open new maker spaces in public schools to give kids the same opportunity to make that I had.</p>
            <p className='indent-8'>Among my software projects, <Link href='https://buseroo.com' target='_blank'>Buseroo.com</Link> has helped students find which school bus goes to any address over 500 times, <Link href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj' target='_blank'>Homework Checker</Link> helps 1,000 students manage their homework, <Link href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf' target='_blank'>Focus for Google Docs</Link> helps over 400 people write without distractions, and <Link href='https://lirongart.com' target='_blank'>LirongArt.com</Link> showcases my mom’s paintings.</p>
            <p className='indent-8'>Among my engineering projects, I made a <Link href='https://youtu.be/8BwmKFodra0?t=76' target='_blank'>Jacob’s ladder</Link> that acts as my alarm, waking me up every morning. I built a vending machine that serves snacks to people at school, a wooden pinball machine, Tesla coil, and various other devices. You can explore my projects in more depth below:</p>
        </div>


        {/* Client component */}
        <Content />

    </Page>;
}

