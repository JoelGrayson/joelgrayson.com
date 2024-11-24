'use client';

import Image from 'next/image';
import Link from 'next/link';

import SEBLogo from './SEBLogo';
import ViolinBow from '@/components/page/headers/parts/ViolinBow';
import formatNumber from '@/components/global/formatNumber';

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
            <Tryptic
                name='Homework Checker'
                href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'
                stat={stats?.homeworkCheckerUsers}
            >
                <span className='text-[0.8rem]'>Homework Checker</span>
            </Tryptic>
            <Tryptic
                name='Edit Time'
                href='https://apps.apple.com/us/app/edit-time/id6464405876'
                stat={stats?.editTimeUsers}
            >
                Edit Time
            </Tryptic>
            <Tryptic
                name='Focus'
                href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'
                stat={stats?.focusUsers}
            >
                Focus
            </Tryptic>
            
            <Tryptic
                name='Buseroo'
                href='https://buseroo.com'
                stat={stats?.buserooSearches}
                statMetric='searches'
            >
                Buseroo<DotCom />
            </Tryptic>
            <Tryptic
                name='Shanghai Dictionary'
                href='https://shanghaidictionary.com'
                stat={stats?.shanghaiDictionarySearches}
                statMetric='searches'
            >
                Shanghai Dictionary<DotCom />
            </Tryptic>
            
            <Tile href='https://lirongart.com'>
                <Image alt='Lirong Art Logo' width={50} height={50} className='relative mb-2' src='/image/home/lirongart-logo.png' />
                <span>Lirong Art<DotCom /></span>
            </Tile>

            <Tile href='https://shirtocracy.com'>
                <Image alt='Shirtocracy Logo' width={60} height={60} className='relative left-0.5 mb-1 dark:invert' src='/image/home/shirtocracy-logo.png' />
                {/* <Image alt='Shirtocracy Logo' width={60} height={60} className='dark:hidden relative left-0.5 mb-1' src='/image/home/shirtocracy-logo.png' />
                <Image alt='Shirtocracy Logo' width={60} height={60} className='hidden dark:block relative left-0.5 mb-1' src='/image/home/shirtocracy-logo-dark.png' /> */}
                <span>Shirtocracy<DotCom /></span>
            </Tile>
            <Tile href='https://sparelearn.com'>
                <Image alt='Spare Learn Logo' width={50} height={50} src='/image/software/sparelearn/logo.png' />
                <span className='text-[1rem]'>SpareLearn<DotCom /></span>
            </Tile>
            <Tile href='https://memorizethepresidents.com'>
                <Image alt='Memorize the Presidents Logo' width={50} height={50} className='relative left-0.5 mb-1' src='/image/home/memorize-the-presidents-logo.png' />
                <span>MemorizeThe<br />Presidents<DotCom /></span>
            </Tile>

            <Tile href='/combating-climate-change#solar-for-riverdale' target='_self'>
                {/* TODO: sunbeam going down when hover */}
                <Image alt='Solar' width={50} height={38} src='/image/home/optimized/solar-for-riverdale.avif' />
                <span>Solar for Riverdale</span>
            </Tile>
            <Tile href='https://studentsforelectricbuses.org'>
                <SEBLogo size={50} />
                <span>Students for Electric Buses</span>
            </Tile>
            <Tile href='/connecting-street-vendors-to-the-grid' target='_self'>
                <Image alt='Generators vs. Grid' width={100} height={55} className='relative left-2' src='/image/connecting-street-vendors-to-the-grid/generators-versus-grid.gif' />
                <span className='text-[0.8rem]'>Connecting Street Vendors to the Grid</span>
            </Tile>

            <Tile href='/machines' target='_self'>
                <Image alt='Combination Safe Machine' width={60} height={53} src='/image/home/optimized/machine.avif' />
                <span>Machines</span>
            </Tile>
            <Tile href='/music'>
                <ViolinBow size={50} />
                <span>Compositions</span>
            </Tile>
            <Tile href='/research/organic-optoelectronics' target='_self'>
                <Image alt='Organic Solar Cells' width={50} height={50} src='/image/ccc/BrDPA-AzoBipy-Structure.png' className='mb-1 pt-3 dark:invert' />
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

function Tile({ href, children, target='_blank', gap=10 }: { href: string; children: any; target?: string; gap?: number }) {
    return <Link
        className='
            unstyled relative shadow-md hover:shadow-lg transition duration-100
            bg-gradient-to-b
            from-[#fff] to-[#fafafa]
            dark:from-dark-bg-lighter dark:to-dark-bg
        '
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap,
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #333',
            borderRadius: 12,
            padding: '12px 17px',
            margin: '3px 10px',
            width: '150px',
            height: 150,
            userSelect: 'none',
            textAlign: 'center'
        }}
        tabIndex={0}
        {...{href, target}}
    >
        {children}
    </Link>;
}

function Tryptic({ name, href, children, stat, statMetric='installs' }: { name: string; href: string; children: any; stat: number | null | undefined; statMetric?: string }) {
    return <Tile href={href} gap={1}>
        <div style={{ height: 50 }}>
            <Image alt={`${name} Logo`} width={50} height={50} src={`/image/home/${hyphenateName(name)}-logo.png`} />
        </div>
        <span>{children}</span>
        { stat!=null && stat!==-4 && <Label>{formatNumber(stat)} {statMetric}</Label> }
    </Tile>;
}

function hyphenateName(name: string) {
    return name.toLowerCase().replace(/ /g, '-');
}

function Label({children}: {children: any}) {
    return <div className='
        px-1.5 text-sm py-0.5 rounded-lg border
        bg-[#ffd166] border-[#ecb715]
        dark:bg-dark-bg-lighter dark:border-dark-text
    '>{children}</div>;
}

function DotCom() {
    return <span className='text-sm'>.com</span>;
}

