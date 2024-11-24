import Link from 'next/link';
import styles from './header-group-item.module.css';

export default function HeaderSubGroupItem({ pathname, link, children, }: { pathname?: string; children: any; link?: string }) {
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
        <div className={`${styles['header-group-item']} w-full flex`}>
            {/* Content */}
            <span className='link !no-underline !text-light-text dark:!text-dark-text'>{children}</span>
        </div>
    </Link>;
}
