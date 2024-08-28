'use client';

import Image from 'next/image';

import SEBLogo from '@/components/by-page/home/SEB Logo';
import BtnIcon from '@/components/by-page/home/BtnIcon';

// TODO: add shadow to boxes
// TODO: add shading gradient in boxes

export default function Content({hCInstalls, focusInstalls, buserooSearches, editTimeInstalls}: {hCInstalls: number | null, focusInstalls: number | null, buserooSearches: number | null; editTimeInstalls: number}) {
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
            <BtnIcon href='/combating-climate-change#solar-for-riverdale' target='_self'>
                <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center'}}>
                    <Image alt='solar' height={50} width={37.5} src='/image/home/optimized/solar-for-riverdale.avif' />
                </div>
                <span>Solar for Riverdale</span>
            </BtnIcon> {/* sunbeam going down when hover */}
            <BtnIcon href='https://studentsforelectricbuses.org'>
                <SEBLogo size={75} />
                <span>Students for Electric Buses</span>
            </BtnIcon> {/* sunbeam going down when hover */}
            <BtnIcon href='/machines' target='_self'>
                <div style={{width: 80, height: 69, display: 'grid', placeItems: 'center'}}>
                    <Image alt='Combination Safe Machine' height={80} width={71.3} src='/image/home/optimized/machine.avif' />
                </div>
                <span>Machines</span>
            </BtnIcon> {/* sunbeam going down when hover */}
            
            <BtnIcon href='https://buseroo.com'>
                <Image alt='buseroo-logo' height={48} width={48} className='mb-0.5' src='/image/home/optimized/buseroo-logo.avif' />
                <span>Buseroo.com</span>
                { buserooSearches!=null && <Label>{buserooSearches} searches</Label> }
            </BtnIcon>
            <BtnIcon href='https://chromewebstore.google.com/detail/focus-for-google-docs/djnloioaddlnmagobbcnjpppmbelfocf'>
                <Image alt='focus-logo' height={50} width={50} src='/image/home/optimized/focus-logo.avif' />
                <span>Focus</span>
                { focusInstalls!=null && <Label>{focusInstalls} installs</Label> }
            </BtnIcon>
            <BtnIcon href='https://chromewebstore.google.com/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj'>
                <Image alt='Homework Checker Logo' height={50} width={50} src='/image/home/optimized/homework-checker-logo.avif' />
                <span className='text-[0.8rem]'>Homework Checker</span>
                { hCInstalls!=null && <Label>{hCInstalls} installs</Label> }
            </BtnIcon>
        
            <BtnIcon href='https://apps.apple.com/us/app/edit-time/id6464405876'>
                <Image alt='Edit Time Logo' height={80} width={80} className='relative left-0.5 bottom-3' src='/image/home/edit-time-logo.png' />
                <span className='relative bottom-3'>Edit Time</span>
                <Label>{editTimeInstalls} installs</Label>
            </BtnIcon>
            <BtnIcon href='https://sparelearn.com'>
                <Image alt='Spare Learn Logo' height={50} width={50} src='/image/software/sparelearn/logo.png' />
                <span className='text-[1rem]'>SpareLearn.com</span>
            </BtnIcon>
            <BtnIcon href='/research/organic-optoelectronics' target='_self'>
                <Image alt='Homework Checker Logo' height={50} width={50} src='/image/ccc/BrDPA-AzoBipy Structure.png' className='mb-1 pt-3' />
                <span className='text-[1rem]'>Organic Solar Cell Research</span>
            </BtnIcon>
            
            <BtnIcon href='/connecting-street-vendors-to-the-grid' target='_self'>
                <Image alt='Generators vs. Grid' height={55} width={100} className='relative left-2' src='/image/connecting-street-vendors-to-the-grid/generators-versus-grid.gif' />
                <span className='text-[0.8rem]'>Connecting Street Vendors to the Grid</span>
            </BtnIcon>

            <BtnIcon href='https://lirongart.com'>
                <Image alt='Lirong Art Logo' height={70} width={70} className='relative mb-2' src='/image/home/lirongart-logo.png' />
                <span className=''>Lirong Art</span>
            </BtnIcon>
            <BtnIcon href='https://shirtocracy.com'>
                <Image alt='Shirtocracy Logo' height={80} width={80} className='relative left-0.5 mb-1' src='/image/home/shirtocracy-logo.png' />
                <span className=''>Shirtocracy</span>
            </BtnIcon>

            {/* <BtnIcon href='/nyc'>
                <Image alt='NYC Logo' height={70} width={70} className='relative top-1' src='/image/patriotism/nyc-flag.jpg' />
                <span className='relative top-3'>NYC</span>
            </BtnIcon> */}
            {/* <BtnIcon href=''>
                <Image alt='NYC Logo' height={70} width={70} className='relative top-1' src='/image/patriotism/nyc-flag.jpg' />
                <span className='relative top-3'>Venderoo</span>
            </BtnIcon> */}
            {/* <BtnIcon href='/nyc'>
                <ViolinBow />
                <span className='relative top-3'>Compositions</span>
            </BtnIcon> */}
            
            {/* Memorize the Presidents */}
            {/* More Tiles: Venderoo, Compositions, NYC Government, BulletBrainstorm */}
        </article>
    </>;
}

function Label({children}: {children: any}) {
    return <div className='absolute bottom-2 bg-[#ffd166] px-1.5 text-sm py-0.5 rounded-lg border border-[#ecb715]'>{children}</div>;
}

