import Page from '@/components/global/Page';
import Image from 'next/image';

export default function NYCGoverment() {
    return <Page bottomPadding>
        <h1 className='text-center'>NYC Government</h1>
        <p>The curriculum of NYC Government is coming soon.</p>
        <Image width={262.5} height={350} src="/nyc-government/municipal-building.jpg" alt="Municipal Building" />
        <Image width={262.5} height={350} src="/nyc-government/joel-and-mr-kildahl.jpg" alt="Municipal Building" />
    </Page>;
}
