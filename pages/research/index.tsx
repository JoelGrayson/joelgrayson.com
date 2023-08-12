import Page from '@/components/global/Page';
// import Button from '@jcomponents/button';
// import Image from 'next/image';
import Link from 'next/link';

export default function Research() {
    return <Page bottomPadding>
        <h1 className='text-center'>Research</h1>

        <p><Link href='/research/organic-optoelectronics' className='styled'>
            Twisting Crystal Charge Transfer Complexes for Organic Optoelectronics
        </Link></p>
        <p><Link href='/perspective/chinas-brutal-road-to-socialism' className='styled'>
            China's Brutal Road to Socialism
        </Link></p>
    </Page>;
}
