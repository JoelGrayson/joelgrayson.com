import Head from 'next/head';
import Header from './header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function Page({children, title, padding, noheader=false, ...props}: {
    children: ReactNode;
    title?: string;
    padding?: boolean;
    noheader?: boolean;
    [key: string]: any;
}) {
    return <>
        {!noheader && <Header />} {/* 77px */}

        <Head>
            <title>{title || 'Joel Grayson'}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>

        <main {...props} style={{
            position: 'relative',
            padding: 0, margin: 0,
            width: '100%',
            minHeight: 'calc(100vh - 77px - 89px)', // fills the entire page (minus footer and header's heights)
            ...props.style
        }}>
            { padding
            ? <div className='j_container j_max-w'>{children}</div> //if center, wrap in centering container
            : children }
        </main>
        <Footer/> {/* 89px */}
    </>;
};