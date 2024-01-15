import { useRouter } from 'next/router';
import { PathContext } from './parts/PathContext';
import HeaderItem from './parts/HeaderItem';

export default function ConnectingStreetVendorstotheGridHeader() {
    const { route }=useRouter(); //the path (window object cannot be used)
    
    return (
        // Classname order: gradient, border, other
        <header className='
            w-full
            border-solid border-b-[1px] border-black p-3
            bg-gradient-to-b from-[#fcd98b] to-[#faca62]
            m:pb-0
        '>
            <nav className='j_max-w mx-auto'>
                <PathContext.Provider value={route}>
                    <ul className='unstyled flex justify-end'>
                        <HeaderItem link='/connecting-street-vendors-to-the-grid' className='m:order-6'>About</HeaderItem>
                        <HeaderItem link='/connecting-street-vendors-to-the-grid/contact' className='m:order-6'>Contact</HeaderItem>
                    </ul>
                </PathContext.Provider>
            </nav>
        </header>
    );
}
