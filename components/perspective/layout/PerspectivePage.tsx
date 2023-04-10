import localFont from 'next/font/local';
import Link from 'next/link';
import JThreeDots from '@/components/JThreeDots';
import Container from '@jcomponents/container';
import SEO, { SEOProps } from '@/components/global/SEO';

const chomsky=localFont({ src: './chomsky/Chomsky.woff2' });

export default function PerspectiveBody({children, seo, maxWidth=800}: {children: React.ReactNode | any; seo?: SEOProps; maxWidth?: number}) {
    return <div style={{backgroundColor: '#fdfdfd'}}>
        <SEO seo={{
            title: "Joel's Perspective", //can be overridden by props.seo
            description: 'Short blog articles about philosophy, science, climate change, and other topics',
            keywords: ['blog', 'Joel Grayson', 'articles'],
            ...seo
        }} />
        
        <header className='relative flex justify-between items-center px-5 py-0'>
            <JThreeDots />
            <h1 className={`${chomsky.className} text-[2.5rem] sm:text-[3.4rem]`}>
                <Link href='/perspective'>
                    Joel&apos;s Perspective
                </Link>
            </h1>
            <div />
        </header>

        <hr />
        <div className='py-10'>
            <Container maxWidth={maxWidth}>
                {children}
            </Container>
        </div>
        <hr />
    </div>;
}
