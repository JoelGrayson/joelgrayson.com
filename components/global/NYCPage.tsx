import Page from '@/components/global/Page';
import Link from 'next/link';

export default function NYCPage({ children }: { children: any }) {
    return <Page bottomPadding>
        <Link className="styled" href='/nyc/nyc-government'>Return to syllabus</Link>
        <br />
        {children}
    </Page>;
}

