import Image from 'next/image';
import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Home() {
    return <Page noPadding pathname='/' seo={{
        title: 'Venderoo',
        keywords: [
            'Vending machine',
        ],
    }}>
        <h1>Venderoo</h1>
        {/* Video explanation */}
        {/* Images */}
    </Page>;
}

