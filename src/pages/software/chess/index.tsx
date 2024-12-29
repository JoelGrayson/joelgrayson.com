import Page from '@/components/page/DefaultPage';
import Image from 'next/image';
import Link from 'next/link';

export default function Chess() {
    return <Page seo={{
        title: 'Chess',
        description: 'A chess game coded in Processing.'
    }}>
        <div className='container'>
            <h1>Chess</h1>
            <Image alt='chess icon' src='/software/chess/icon.png' className='absolute right-[1rem] top-[1rem]' width='100' />
            <p>Coded in Processing November 2020.</p>
            <br /><br />
            <Link href='/software/chess/Chess.pde'><button>Source code</button></Link>
            <br/><br /><br />
            <Image alt='certified' width='60' src='/image/ucjg/certified.png' />
        </div>
    </Page>;
}
