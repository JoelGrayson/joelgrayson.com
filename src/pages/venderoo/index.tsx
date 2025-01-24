import Yt from '@/components/global/Yt';
import { GithubIcon } from '@/components/icons';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';
// import Image from 'next/image';
// import Link from 'next/link';

export default function Venderoo() {
    return <Page pathname='/venderoo' seo={{
        title: 'Venderoo',
        keywords: [
            'Vending machine',
        ],
    }}>
        <h1 className='text-center'>Venderoo</h1>

        {/* Video explanation */}
        <Yt width='100%'>bHHk2FL5Ujs</Yt>

        
        {/* Link to code */}
        <Link href='https://github.com/JoelGrayson/Venderoo' className='button flex gap-2 items-center'>
            <GithubIcon width={30} />
            <span>Source Code</span>
        </Link>

        {/* Images */}
    </Page>;
}

