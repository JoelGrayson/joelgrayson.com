import Page from '../components/Page';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
    return (<Page>
        <div className='flex justify-center items-center p-24'>
            <div className='left'>
                <Image width='455' height='342' src='/image/shrug.png' alt='Shrug' />
            </div>
            <div className='right flex flex-col items-center gap-8'>
                <h1 className='text-5xl font-bold'>404</h1>
                <p>This page does not exist.</p>
                <Link href='/'>
                    <button className='btn-red'>Return home</button>
                </Link>
            </div>
        </div>
    </Page>);
}
