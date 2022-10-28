import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Page({children, title, center, ...props}: {
    children: any;
    title?: String;
    center?: boolean;
    [key: string]: any;
}) {
    return (<>
        <Header/> {/* 77px */}

        <Head>
            <title>{title || 'Joel Grayson'}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>

        <main style={{
            position: 'relative',
            padding: 0, margin: 0, width: '100%', 
            minHeight: 'calc(100vh - 77px - 89px)' // fills the entire page (minus footer and header's heights)
        }} {...{props}}>
            {center
            ? <div className='j_container j_max-w'>{children}</div> //if center, wrap in centering container
            : children}
        </main>
        <Footer/> {/* 89px */}
    </>)
};