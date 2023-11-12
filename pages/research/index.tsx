import Page from '@/components/global/Page';
// import Button from '@jcomponents/button';
// import Image from 'next/image';
import Link from 'next/link';

export default function Research() {
    return <Page bottomPadding>
        <h1 className='text-center'>Research</h1>

        <p>
            <Link href='/research/how-do-cultures-combine' className='styled'>How Do Cultures Combine?</Link>
            <span className='ml-3 px-2 py-0' style={{
                backgroundColor: '#db4343',
                color: 'white',
                borderRadius: '4px',
            }}>In Progress</span>
        </p>
        <p><Link href='/research/organic-optoelectronics' className='styled'>
            Twisting Crystal Charge Transfer Complexes for Organic Optoelectronics
        </Link></p>
        <p><Link href='/blog/chinas-brutal-road-to-socialism' className='styled'>
            China&apos;s Brutal Road to Socialism
        </Link></p>
    </Page>;
}
