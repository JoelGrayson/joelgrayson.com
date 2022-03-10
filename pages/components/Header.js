import {useRouter} from 'next/router';
// import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import circle from './circle.png';

export default function Header() {
    const { asPath }=useRouter() //the path (window object cannot be used)
    
    return (
        //Classname order: gradient, border, other
        <header>
            <nav className='
                border-solid border-b-[1px] border-black p-3
                bg-gradient-to-b from-[#fcd98b] to-[#faca62]
                w-full flex justify-center'
            >
                <ul className='flex list-none items-center'>
                    <Link href='/'><a>
                        <li className='flex items-center pr-4'>
                            <Image src={circle} width='60px' height='60px' alt='logo' />
                        </li>
                    </a></Link>
                    <HeaderItem asPath={asPath} link='/'>Home</HeaderItem>
                    <HeaderItem asPath={asPath} link='/machines'>Machines</HeaderItem>
                    <HeaderItem asPath={asPath} link='/projects'>Projects</HeaderItem>
                    <HeaderItem asPath={asPath} link='/art'>Art</HeaderItem>
                    <HeaderItem asPath={asPath} link='/performances'>Performances</HeaderItem>
                    <HeaderItem asPath={asPath} link='/perspective'>The Perspective</HeaderItem>
                    <HeaderItem asPath={asPath} link='/contact'>Contact</HeaderItem>
                </ul>
            </nav>
        </header>
    );
}

function HeaderItem({link /*a href's link*/, asPath, children}) { //highlighted if is current page
    let isActivePage=(link===asPath); //determines if button is yellow or white

    return (
        <Link href={link}>
            <a>
                <li className={`${isActivePage ? 'bg-[#FFE273]' : 'bg-white'} mx-[9px] rounded-[13px] py-[0.6rem] px-7
                border-solid border-[#11111130] border-[0.2px]
                hover:bg-[#ffe062]
                active:bg-[#ffd13c]`}> {/* Active is when mouseDown on button */}
                    <button className='text-black font-[15px]'
                    style={{fontFamily: 'AvenirMedium'}}>{children}</button>
                </li>
            </a>
        </Link>
    );
}