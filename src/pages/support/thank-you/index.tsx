import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function ThankYou() {
    return <Page bottomPadding seo={{
        title: 'Thank You for Your Support',
    }}>
        <h1 className='text-center my-10'>Thank You for Your Support</h1>
        <div className="flex items-center flex-col gap-8">
            <p>Your support will help my projects.</p>
            <Link className='button' href={'/'}>
                Return Home
            </Link>
        </div>
    </Page>;
}

