import { Metadata } from "next";
import '../styles/global.css';
import localFont from 'next/font/local';
import PlausibleProvider from 'next-plausible'
import PrintLogo from "./PrintLogo";

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
    return <html lang="en">
        <head>
            <PlausibleProvider domain="joelgrayson.com" />
        </head>
        <body className={font.className}>
            <PrintLogo />
            {children}
        </body>
    </html>;
}

