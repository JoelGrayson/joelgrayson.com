import UpDownArrow from './UpDownArrow';
import styles from './header-group.module.css';
import Link from 'next/link';

export default function HeaderGroup({ pathname, title, children, link, className, pixelOffset }: { pathname?: string; title: string; children: any; link?: string; className?: any; pixelOffset?: number | string }) {
    const isCurrentPage=link===pathname; //always yellow
    
    return <li className={`${className} header-group ${styles['header-group']}`}>
        {/* Active is when mouseDown on button */}
        <Link
            href={link || ''}
            style={{
                backgroundColor: isCurrentPage ? '#ffe273' : undefined
            }}
            className={`
                unstyled
                flex items-center text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                border-solid border-[#11111130] border-[0.2px] hover:bg-[#ffe062] active:bg-[#ffd13c]
                ${pathname===link ? 'bg-[#ffe273]' : ''}
                mobile:px-[.5rem] mobile:py-[.3rem]
                semibold
            `}
            tabIndex={0}
        >
            {title}
            <UpDownArrow />
        </Link>

        <div className={`${styles['header-group-content']} absolute ml-3 p-4 rounded-md height-fit border-2 backdrop-blur-sm bg-[#ffffffdd] dark:bg-[#000000dd] border-gray-500 z-10 select-none`}>
            {/* Vertical line */}
            <div
                style={{
                    height: `calc(100% - 16px - 12px + ${pixelOffset}px)`,
                    width: '2px',
                    position: 'absolute',
                    left: '14px',
                    top: 0
                }}
                className='bg-black dark:bg-white'
            />

            {children}
        </div>
    </li>;
}

