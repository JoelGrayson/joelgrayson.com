import Link from 'next/link';
import Page from '@/components/@jcomponents/Page';
import SEO from '@/components/page/parts/SEO';

export default function JComponents() {
    return <Page>
        <SEO seo={{ title: 'JComponents' }} />
        <h1 style={{textAlign: 'center'}}>JComponents</h1>
        <p>Easily integrate custom-made components into your React projects.</p>
        <p>This page is a demo of all the components</p>
        
        <br/>
        <h3>Contribute</h3>
        <ul>
            <li>Source code: <Link href='https://github.com/JoelGrayson/JComponents' target='_blank' rel='noreferrer'>github.com/JoelGrayson/JComponents</Link></li>
            <li>Issue tracker: <Link href='https://github.com/JoelGrayson/JComponents/issues' target='_blank' rel='noreferrer'>github.com/JoelGrayson/JComponents/issues</Link></li>
        </ul>
    </Page>;
}
