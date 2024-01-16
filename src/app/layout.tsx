import { Metadata } from "next";
import '../styles/globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata={
    title: {
        default: 'Joel Grayson',
        template: '%s | Joel Grayson'
    },
    description: 'Welcome to the United Cells of Joel Grayson',
    metadataBase: new URL('https://joelgrayson.com'),
};

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

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    // TODO: plausible and printLogo
    return <html lang="en">
        <body className={font.className}>{children}</body>
    </html>;
}


// import { useEffect } from 'react';
// import PlausibleProvider from 'next-plausible';

// export default function MyApp({ Component, pageProps }: AppProps) {
//     useEffect(printLogo, []);

//     return <>
//         <PlausibleProvider domain='joelgrayson.com' enabled>
//             <Component {...pageProps} />
//         </PlausibleProvider>
//     </>;
// }

export function printLogo() {
    const bgStyle='text-shadow: #84d8f0 1px 1px 3px';
    const textStyle='text-shadow: #5ceded .3px .3px 1.5px; font-weight: bold';
    console.log(`%c┏---------------------------------------┓
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
┖---------------------------------------┛`, bgStyle, textStyle, bgStyle);
}

