import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function DataPage() {
    return <Page>
        <Data />
    </Page>;
}

export function Data() {
    return <>
        <h3>Data</h3>
        <ul>
            <li><a href="/research/organic-optoelectronics/microscope-photos.zip">Microscope Photos (326 photos)</a></li>
            <li><a href="/research/organic-optoelectronics/SEM-photos.zip">SEM Photos</a></li>
            <li><a href="/research/organic-optoelectronics/microspectroscopy-absorbance-data.zip">Microspectroscopy Absorbance Data</a></li>
        </ul>
        <Link href='/research/organic-optoelectronics'>See all info</Link>.
    </>;
}

