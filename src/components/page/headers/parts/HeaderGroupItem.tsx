import Link from 'next/link';
import styles from './header-group-item.module.css';

export default function HeaderGroupItem({ pathname, link, children }: { pathname?: string; children: any; link?: string }) {
    return <Link
        className='unstyled relative flex'
        href={link || '#'}
        target={link?.trim()?.slice(0, 4)==='http' ? '_blank' : undefined} //open in new tab if external link
        tabIndex={0}
        style={{
            backgroundColor: pathname===link ? '#ffe273' : undefined,
            borderRadius: 10
        }}
    >
        <div className={`${styles['header-group-item']} w-full`}>
            {/* --> Left Arrow (onhover increases arrow length) */}
            <svg className={`inline pr-2 ${styles['left-arrow']}`} height='15px' viewBox='0 0 33 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 6.90909H31M31 6.90909L22.5 14M31 6.90909L22.5 1' stroke='black' strokeWidth='2'/>
            </svg>

            {/* Content */}
            <span className={styles['header-group-item-text']}>{children}</span>
        </div>
    </Link>;
}
