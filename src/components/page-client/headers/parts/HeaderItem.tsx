import { useContext, ReactNode } from 'react';
import Link from 'next/link';
import { PathContext } from './PathContext';

export default function HeaderItem({ link /*a href's link*/, children, className }: { link: string, children: ReactNode; className?: any }) { //highlighted if is current page
    const asPath=useContext(PathContext);
    const isCurrentPage=link===asPath; //always yellow
    
    return <li className={`m:flex m:justify-center ${className || ''}`}>
            {/* Active is when mouseDown on button */}
            <Link
                href={link}
                className='
                    cursor-pointer mx-[9px] px-7 py-[0.6rem]
                    text-black font-[15px] bg-white rounded-[13px] select-none
                    border-solid border-[#11111130] border-[0.2px]
                    mobile:px-[.5rem] mobile:py-[.3rem]
                    hover:bg-[#ffe062]
                    h-fit block
                    unstyled
                '
                style={{
                    backgroundColor: isCurrentPage ? '#ffe273' : undefined,
                    fontFamily: 'AvenirMedium'
                }}
                tabIndex={0}
            >
                {children}
            </Link>
    </li>;
}