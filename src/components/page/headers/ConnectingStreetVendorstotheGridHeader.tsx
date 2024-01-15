import HeaderItem from './parts/HeaderItem';

export default function ConnectingStreetVendorstotheGridHeader() {
    return (
        // Classname order: gradient, border, other
        <header className='
            w-full
            border-solid border-b-[1px] border-black p-3
            bg-gradient-to-b from-[#fcd98b] to-[#faca62]
            m:pb-0
        '>
            <nav className='j_max-w mx-auto'>
                <ul className='unstyled flex justify-end'>
                    <HeaderItem link='/connecting-street-vendors-to-the-grid' className='m:order-6'>About</HeaderItem>
                    <HeaderItem link='/connecting-street-vendors-to-the-grid/contact' className='m:order-6'>Contact</HeaderItem>
                </ul>
            </nav>
        </header>
    );
}
