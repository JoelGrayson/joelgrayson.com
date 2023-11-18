import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import { ReactNode, useEffect } from 'react';
import SEO, { SEOProps } from './SEO';
import pageStyle from '@/styles/page/page.module.css';
import Connect2GridHeader from '../header/connect2grid';
import Connect2GridFooter from '../footer/connect2grid';

export default function Page({ children, noPadding, bottomPadding, seo, header='default', noPageStyling=false, ...props }: {
    children: ReactNode;
    noPadding?: boolean;
    bottomPadding?: boolean;
    seo?: SEOProps;
    header?: 'default' | 'connect2grid' | 'hidden' | false;
    noPageStyling?: boolean;
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

        {(()=>{
            if (header===false || header==='hidden') return;
            if (header==='default')
                return <Header />; //77px
            if (header==='connect2grid')
                return <Connect2GridHeader />;
        })()}

        <main {...props} style={{
            position: 'relative',
            padding: 0, margin: 0,
            width: '100%',
            minHeight: 'calc(100vh - 77px - 89px)', // fills the entire page (minus footer and header's heights)
            paddingBottom: bottomPadding ? 60 : 0,
            ...props.style
        }}>
            { noPadding
                ? children
                : <div id='pageNamespace' className={`j_container j_max-w ${noPageStyling ? '' : pageStyle.pageNamespace}`}>{children}</div> //if center, wrap in centering container
            }
        </main>

        {(()=>{
            if (header===false || header==='hidden') return;
            if (header==='default')
                return <Footer />; //89px
            if (header==='connect2grid')
                return <Connect2GridFooter />;
        })()}
    </>;
};
