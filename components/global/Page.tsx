import Head from 'next/head';
import Header from '../header';
import Footer from '../Footer';
import { ReactNode, useEffect } from 'react';
import SEO, { SEOProps } from './SEO';

export default function Page({children, nopadding, seo, noheader=false, ...props}: {
    children: ReactNode;
    nopadding?: boolean;
    seo?: SEOProps;
    noheader?: boolean;
    [key: string]: any;
}) {
    useEffect(()=>{ //redirect from .vercel.app -> .com
        if (typeof window!=='undefined')
            if (window.location.hostname.includes('joelgrayson.vercel.app'))
                window.location.hostname='joelgrayson.com';
    }, []);
    
    return <>
        <SEO seo={seo} />
        <Head>
            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/image/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/image/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/image/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/image/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#f8faf9" />
            <meta name="msapplication-config" content="/image/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
        </Head>

        {!noheader && <Header />} {/* 77px */}

        <main {...props} style={{
            position: 'relative',
            padding: 0, margin: 0,
            width: '100%',
            minHeight: 'calc(100vh - 77px - 89px)', // fills the entire page (minus footer and header's heights)
            ...props.style
        }}>
            { nopadding
                ? children
                : <div className='j_container j_max-w'>{children}</div> //if center, wrap in centering container
            }
        </main>
        <Footer/> {/* 89px */}
    </>;
};