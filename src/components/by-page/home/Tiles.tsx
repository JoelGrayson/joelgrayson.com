'use client';

import Image from 'next/image';
import Link from 'next/link';

import SEBLogo from './SEBLogo';
import ViolinBow from '@/components/page/headers/parts/ViolinBow';

export type Stats={
    id: string;
    date: string;
    focusUsers: number;
    homeworkCheckerUsers: number;
    buserooSearches: number;
    shirtocracyOrders: number;
    journalUsers: number;
    projectsUsers: number;
    habitUsers: number;
    numbersUsers: number;
    editTimeUsers: number;
    blogViews: number;
    buserooUsers: number;
    shanghaiDictionarySearches: number;
    driveDownloadLinkGeneratorVisits: number;
    dropboxDownloadLinkGeneratorVisits: number;
    boxDownloadLinkGeneratorVisits: number;
    pageVisits: {
        id: string;
        url: string;
        visits: number;
    }[];
};

export default function Tiles({ stats }: { stats: Stats | null }) {
    return <>
        {/* Icons */}
        <article className='mx-auto px-4 !max-w-[600px] d:gap-[20px]' style={{
            display: 'grid',
            marginTop: 33,
            paddingBottom: 58,
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            justifyItems: 'center',
            alignItems: 'center'
        }}>
            <Tile href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj' tryptic>
                <Image alt='Homework Checker Logo' height={50} width={50} src='/image/home/optimized/homework-checker-logo.avif' />
                <span className='text-[0.8rem]'>Homework Checker</span>
                { stats?.homeworkCheckerUsers!=null && stats.homeworkCheckerUsers!==-4 && <Label>{stats.homeworkCheckerUsers} installs</Label> }
            </Tile>
            <Tile href='https://apps.apple.com/us/app/edit-time/id6464405876' tryptic>
                <Image alt='Edit Time Logo' height={50} width={50} className='relative left-0.5 bottom-3' src='/image/home/edit-time-logo.png' />
                <span className='relative bottom-3'>Edit Time</span>
                { stats?.editTimeUsers!=null && stats.editTimeUsers!==-4 && <Label>{stats.editTimeUsers} installs</Label> }
            </Tile>
            <Tile href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'>
                <Image alt='focus-logo' height={50} width={50} src='/image/home/optimized/focus-logo.avif' />
                <span>Focus</span>
                { stats?.focusUsers!=null && stats.focusUsers!==-4 && <Label>{stats.focusUsers} installs</Label> }
            </Tile>

            <Tile href='https://buseroo.com'>
                <Image alt='buseroo-logo' height={48} width={48} className='mb-0.5' src='/image/home/optimized/buseroo-logo.avif' />
                <span>Buseroo<DotCom /></span>
                { stats?.buserooSearches!=null && stats.buserooSearches!==-4 && <Label>{stats.buserooSearches} searches</Label> }
            </Tile>
            <Tile href='https://shanghaidictionary.com'>
                <Image alt='Shanghai Dictionary Logo' height={50} width={50} src='/image/home/shanghai-dictionary-logo.jpg' />
                <span className=''>Shanghai Dictionary<DotCom /></span>
                { stats?.shanghaiDictionarySearches!=null && <Label absolute={false}>{stats?.shanghaiDictionarySearches} searches</Label> }
            </Tile>
            <Tile href='https://lirongart.com'>
                <Image alt='Lirong Art Logo' height={70} width={70} className='relative mb-2' src='/image/home/lirongart-logo.png' />
                <span className=''>Lirong Art<DotCom /></span>
            </Tile>

            <Tile href='https://shirtocracy.com'>
                <Image alt='Shirtocracy Logo' height={80} width={80} className='relative left-0.5 mb-1' src='/image/home/shirtocracy-logo.png' />
                <span className=''>Shirtocracy<DotCom /></span>
            </Tile>
            <Tile href='https://sparelearn.com'>
                <Image alt='Spare Learn Logo' height={50} width={50} src='/image/software/sparelearn/logo.png' />
                <span className='text-[1rem]'>SpareLearn<DotCom /></span>
            </Tile>
            <Tile href='https://memorizethepresidents.com'>
                <Image alt='Memorize the Presidents Logo' height={80} width={80} className='relative left-0.5 mb-1' src='/image/home/memorize-the-presidents-logo.png' />
                <span className=''>MemorizeThe<br />Presidents<DotCom /></span>
            </Tile>

            <Tile href='/combating-climate-change#solar-for-riverdale' target='_self'>
                {/* TODO: sunbeam going down when hover */}
                <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center'}}>
                    <Image alt='solar' height={50} width={37.5} src='/image/home/optimized/solar-for-riverdale.avif' />
                </div>
                <span>Solar for Riverdale</span>
            </Tile>
            <Tile href='https://studentsforelectricbuses.org'>
                <SEBLogo size={75} />
                <span>Students for Electric Buses</span>
            </Tile>
            <Tile href='/connecting-street-vendors-to-the-grid' target='_self'>
                <Image alt='Generators vs. Grid' height={55} width={100} className='relative left-2' src='/image/connecting-street-vendors-to-the-grid/generators-versus-grid.gif' />
                <span className='text-[0.8rem]'>Connecting Street Vendors to the Grid</span>
            </Tile>

            <Tile href='/machines' target='_self'>
                <div style={{width: 80, height: 69, display: 'grid', placeItems: 'center'}}>
                    <Image alt='Combination Safe Machine' height={80} width={71.3} src='/image/home/optimized/machine.avif' />
                </div>
                <span>Machines</span>
            </Tile>
            <Tile href='/music'>
                <ViolinBow />
                <span>Compositions</span>
            </Tile>
            <Tile href='/research/organic-optoelectronics' target='_self'>
                <Image alt='Homework Checker Logo' height={50} width={50} src='/image/ccc/BrDPA-AzoBipy Structure.png' className='mb-1 pt-3' />
                <span className='text-[1rem]'>Organic Solar Cell Research</span>
            </Tile>
            
            {/* Arrangement:
            Homework Checker, Edit Time, Focus
            Buseroo.com, LirongArt.com, Shirtocracy.com
            ShanghaiDictionary.com, SpareLearn.com, MemorizeThePresidents.com
            Solar for Riverdale, Students for Electric Buses, Connecting Street Vendors to the Grid
            Machines, Compositions, Organic Solar Cell Research */}
            {/* More Tiles: Venderoo, NYC Government, BulletBrainstorm */}
        </article>
    </>;
}


function Tile({ href, children, target='_blank', tryptic=false }: { href: string; children: any; target?: string; tryptic?: boolean }) {
    return <Link
        className='unstyled relative shadow-md hover:shadow-lg transition duration-100'
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #333',
            borderRadius: 12,
            padding: '12px 17px',
            margin: '3px 10px',
            width: '150px',
            height: 150,
            userSelect: 'none',
            textAlign: 'center',
        
            background: 'linear-gradient(180deg, #fff, #fafafa)'
            // background: linear-gradient(180deg, #fcfcfc, #f0f0f0)
        }}
        tabIndex={0}
        {...{href, target}}
    >
        {children}
    </Link>;
}

function Label({children, absolute=true}: {children: any, absolute?: boolean}) {
    return <div className={`${absolute ? 'absolute' : ''} bottom-2 bg-[#ffd166] px-1.5 text-sm py-0.5 rounded-lg border border-[#ecb715]`}>{children}</div>;
}

function DotCom() {
    return <span className='text-sm'>.com</span>;
}

