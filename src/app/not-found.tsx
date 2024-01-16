import { AppPage as Page } from '@/components/page/DefaultPage';
import Link from 'next/link';
import ShruggingJoel from './404/ShruggingJoel';
import ReportError from './404/ReportError';

export default function Custom404() {
    return <Page noPadding seo={{
        noIndex: true
    }}>
        <div className='flex justify-center items-center p-24'>
            <div className='left w-[500px] h-[350px] grid place-items-center'>
                <ShruggingJoel />
            </div>
            <div className='right flex flex-col items-center gap-8'>
                <h1 className='text-5xl font-bold'>404</h1>
                <p>This page does not exist.</p>
                <Link href='/' className='unstyled'>
                    <button className='btn-red'>Return home</button>
                </Link>
            </div>
        </div>

        <ReportError />
    </Page>;
}
