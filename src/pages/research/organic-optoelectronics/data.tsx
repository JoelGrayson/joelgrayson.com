import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function DataPage() {
    return <Page>
        <Data />
        <Link href='/research/organic-optoelectronics'>See all info</Link>.
    </Page>;
}

export function Data() {
    return <>
        <h3>Data</h3>
        <ul>
            <li><Link download href="/research/organic-optoelectronics/microscope-photos.zip">Microscope Photos (326 photos)</Link></li>
            <li><Link href="/research/organic-optoelectronics/SEM-photos.zip">SEM Photos</Link></li>
            <li><Link href="/research/organic-optoelectronics/microspectroscopy-absorbance-data.zip">Microspectroscopy Absorbance Data</Link></li>
        </ul>
    </>;
}

