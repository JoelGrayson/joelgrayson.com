import { Metadata } from "next";
import '../styles/globals.css';

export const metadata: Metadata={
    title: 'Joel Grayson',
    description: 'Welcome to the United Cells of Joel Grayson',
    metadataBase: new URL('https://joelgrayson.com')
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    // TODO: plausible and printLogo
    return <html lang="en">
        <body>{children}</body>
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
