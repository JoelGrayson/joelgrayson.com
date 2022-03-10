import {useRouter} from 'next/router';
import Head from 'next/head';

function Header() {
    const { asPath }=useRouter() //the path (window object cannot be used)
    
    return (
        //Classname order: gradient, border, other
        <Head>
            <nav className='
            border-solid border-b-[1px] border-black p-3
            bg-gradient-to-b from-[#fcd98b] to-[#faca62]
            w-full flex justify-center'>
                <ul className='flex list-none'>
                    <HeaderItem asPath={asPath} link='/'>Home</HeaderItem>
                    <HeaderItem asPath={asPath} link='/machines'>Machines</HeaderItem>
                    <HeaderItem asPath={asPath} link='/projects'>Projects</HeaderItem>
                    <HeaderItem asPath={asPath} link='/art'>Art</HeaderItem>
                    <HeaderItem asPath={asPath} link='/performances'>Performances</HeaderItem>
                    <HeaderItem asPath={asPath} link='/perspective'>The Perspective</HeaderItem>
                    <HeaderItem asPath={asPath} link='/contact'>Contact</HeaderItem>
                </ul>
            </nav>
        </Head>
    );
}
export default Header;

function HeaderItem({link /*a href's link*/, asPath, children}) { //highlighted if is current page
    let isActivePage=(link===asPath); //determines if button is yellow or white

    return (
        <a href={link}>
            <li className={`${isActivePage ? 'bg-[#FFE273]' : 'bg-white'} mx-[9px] rounded-[13px] py-[0.6rem] px-7
            border-solid border-[#11111130] border-[0.2px]
            hover:bg-[#ffe062]
            active:bg-[#ffd13c]`}> {/* Active is when mouseDown on button */}
                <button className='text-black font-[15px]'
                style={{fontFamily: 'AvenirMedium'}}>{children}</button>
            </li>
        </a>
    );
}