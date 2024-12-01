import '../styles/global.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import PlausibleProvider from 'next-plausible';
import localFont from 'next/font/local';
import printLogo from '@/components/page/printLogo';

import { lazy } from 'react';
const RickRoll=lazy(()=>import('@/components/RickRoll'));

const font=localFont({
    variable: '--font',
    src: [
        {
            path: '../styles/fonts/AvenirBook.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../styles/fonts/AvenirMedium.woff2',
            // path: '../styles/fonts/MyriadProSemibold.woff2',
            weight: '600',
            style: 'semibold'
        },
        {
            path: '../styles/fonts/MyriadProBold.woff2',
            weight: '800',
            style: 'bold'
        },
    ]
});


export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(printLogo, []);

    return <>
        <PlausibleProvider domain='joelgrayson.com' enabled>
            <main className={font.className}>
                <Component {...pageProps} />
                { new Date().getMonth()===3 && new Date().getDate()===1 && <RickRoll /> }
            </main>
        </PlausibleProvider>
    </>;
}
