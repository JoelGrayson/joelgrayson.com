import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Page({children, title, center, ...props}: {
    children: any;
    title?: String,
    center?: boolean,
    [key: string]: any
}) {
    return (<>
        <Header/>

        <Head>
            <title>{title || 'Joel Grayson'}</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        </Head>
        
        <main className='w-full p-0 m-0' {...{props}}>
            {
                center
                ?
                (<div className='j_container j_max-w'>
                    {children}
                </div>)
                :
                children
            }
        </main>
        <Footer/>
    </>)
};