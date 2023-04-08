import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(()=>{
        console.log(
`%c┏---------------------------------------┓
|                                       |
|            jjjjjjjjj                  |
|        jjjjjjjjjjjjjjj                |
|     jjjjjjjjjjjjjjjjjjj               |
|    jjjjjjjjj      jjjjj   jjjjjjjjj   |
|    jjjjj          jjjjjjjjjjjjjjjjj   |
|                  jjjjjjjjjjjjj        |
|              jjjjjjjjjj               |
|           jjjjjjjjjjjj   jjjj   jjjj  |
|        jjjjjjjjjjjjjj   jjjjjj jjjjjj |
|      jjjjjjjjjjjjjjjj    jjjj   jjjj  |
|    jjjjjjjj   jjjjjj         jjjj     |
|   jjjjjj    jjjjjjj         jjjjjj    |
|  jjjjj    jjjjjjjj           jjjj     |
|  jjjjj  jjjjjjjj                      |
|  jjjjjjjjjjjj                         |
|   jjjjjjjj           %cjoelgrayson.com%c  |
|                                       |
┖---------------------------------------┛`, 'text-shadow: #84d8f0 0 0 2px', 'text-shadow: cyan 0 0 2px; font-weight: bold', 'text-shadow: #84d8f0 0 0 2px');
    }, []);

    return <>
        <Component {...pageProps} />

        {/* Google tag (gtag.js) */}
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-25JL4Z9H4S' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}</Script>
    </>;
}
