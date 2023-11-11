import Page from '@/components/global/Page';
import Button from '@jcomponents/button';
import Link from 'next/link';

export default function HowDoCulturesCombine() {
    return <Page bottomPadding>
        <h1 className='text-center'>How Do Cultures Combine?</h1>
        <Link href='/research/how-do-cultures-combine/survey'>
            <Button>Survey</Button>
        </Link>
    </Page>;
}

