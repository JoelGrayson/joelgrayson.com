import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '@/components/google-analytics/gtag.js';

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(printLogo, []);

    const router=useRouter();
    useEffect(()=>{
        router.events.on('routeChangeComplete', gtag.pageView);
        return ()=>router.events.off('routeChangeComplete', gtag.pageView);
    }, [router.events]);

    return <>
        <Component {...pageProps} />

        {/* Google tag (gtag.js) */}
        <Script strategy='afterInteractive' async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script strategy='afterInteractive' id='google-analytics'>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}</Script>
    </>;
}




function printLogo() {
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
}

