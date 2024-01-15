import Page from '@/components/page-client/DefaultPage';
import Link from 'next/link';

export default function NYCPage({ children }: { children: any }) {
    return <Page bottomPadding>
        <Link href='/nyc/nyc-government'>Return to syllabus</Link>
        <br />
        {children}
    </Page>;
}

