import UpDownArrow from './UpDownArrow';
import styles from './header-group.module.css';
import Link from 'next/link';

export default function HeaderGroup({ pathname, title, children, link, className }: { pathname?: string; title: string; children: any; link?: string; className?: any }) {
    return <li className={`${className} header-group ${styles['header-group']}`}>
        {/* Active is when mouseDown on button */}
        <Link href={link || ''} className='unstyled'>
            <button
                className={`
                    unstyled
                    flex items-center text-black font-[15px] mx-[9px] bg-white rounded-[13px] py-[0.6rem] px-7 select-none
                    border-solid border-[#11111130] border-[0.2px] hover:bg-[#ffe062]  ${'' /* active: #ffd13c */}
                    mobile:px-[.5rem] mobile:py-[.3rem]
                `}
                style={{fontFamily: 'AvenirMedium'}}
                tabIndex={0}
            >
                {title}
                <UpDownArrow />
            </button>
        </Link>

        <div className={`${styles['header-group-content']} absolute ml-3 p-4 rounded-md height-fit border-2 bg-[rgb(255,255,255,0.8)] border-gray-500 z-10 select-none`}>
            {/* Vertical line */}
            <div style={{
                height: `calc(100% - 16px - 12px + 2px)`,
                width: '2px',
                backgroundColor: 'black',
                position: 'absolute',
                left: '14px',
                top: 0
            }}/>

            {children}
        </div>
    </li>;
}

