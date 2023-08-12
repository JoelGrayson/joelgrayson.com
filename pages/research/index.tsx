import Page from '@/components/global/Page';
// import Button from '@jcomponents/button';
// import Image from 'next/image';
import Link from 'next/link';

export default function Research() {
    return <Page bottomPadding>
        <h1 className='text-center'>Research</h1>

        <Link href='/research/organic-optoelectronics' className='styled'>
            Twisting Crystal Charge Transfer Complexes for Organic Optoelectronics
        </Link>
    </Page>;
}
