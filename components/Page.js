import Header from './Header';
import Footer from './Footer';

export default function Page({children}) {
    return <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
};