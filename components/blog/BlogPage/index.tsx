import localFont from 'next/font/local';
import Link from 'next/link';
import JThreeDots from '@/components/JThreeDots';
import Container from '@jcomponents/container';
import SEO, { SEOProps } from '@/components/global/SEO';

const chomsky=localFont({ src: './chomsky-font/Chomsky.woff2' });

export default function BlogPage({children, seo, maxWidth=800}: {children: React.ReactNode | any; seo?: SEOProps; maxWidth?: number}) {
    return <div style={{backgroundColor: '#fdfdfd'}}>
        <SEO seo={{
            title: "Joel's Blog", //can be overridden by props.seo
            description: 'Short blog articles about philosophy, science, climate change, and other topics',
            keywords: ['blog', 'Joel Grayson', 'articles'],
            ...seo
        }} />
        
        <header className='relative flex justify-between items-center px-5 py-0'>
            <JThreeDots />
            <h1 className={`${chomsky.className} text-[2.5rem] sm:text-[3.4rem]`}>
                <Link href='/blog'>
                    Joel&apos;s Blog
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