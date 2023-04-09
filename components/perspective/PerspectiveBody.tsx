import localFont from 'next/font/local';
import Link from 'next/link';
import JThreeDots from '../JThreeDots';
import Container from '@jcomponents/container';
import SEO from '../global/SEO';

const chomsky=localFont({ src: './chomsky/Chomsky.woff2' });

export default function PerspectiveBody({children, title, maxWidth=800}: {children: JSX.Element | any; title?: string; maxWidth?: number}) {
    return <div style={{backgroundColor: '#fdfdfd'}}>
        <SEO seo={{
            title: "Joel's Perspective",
            description: 'Short blog articles about philosophy, science, climate change, and other topics',
            keywords: ['blog', 'Joel Grayson', 'articles']
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
