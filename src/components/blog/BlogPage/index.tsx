import localFont from 'next/font/local';
import Link from 'next/link';
import JThreeDots from '@/components/page/headers/parts/JThreeDots';
import Container from '@jcomponents/container';
import SEO, { SEOProps } from '@/components/page/parts/SEO';

const chomsky=localFont({ src: './chomsky-font/Chomsky.woff2', fallback: ['serif'] });

export default function BlogPage({children, seo, maxWidth=800}: {children: React.ReactNode | any; seo?: SEOProps; maxWidth?: number}) {
    return <div className='bg-light-bg-darker dark:bg-dark-bg'>
        <SEO seo={{
            title: "Joel's Blog", //can be overridden by props.seo
            description: 'Short blog articles about philosophy, science, climate change, and other topics',
            keywords: ['blog', 'Joel Grayson', 'articles'],
            ...seo
        }} />
        
        <header className='relative flex justify-between items-center px-5 py-0'>
            <JThreeDots tabIndex={0} />
            <span className={`${chomsky.className} text-[2.5rem] sm:text-[3.4rem] mt-[10px] leading-[1.8]`} tabIndex={0}>
                <Link href='/blog' className='unstyled'>
                    Joel&apos;s Blog
                </Link>
            </span>
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
