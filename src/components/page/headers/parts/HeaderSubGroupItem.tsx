import Link from 'next/link';
import styles from './header-group-item.module.css';
import compareLinks from './compareLinks';
import { linkTextClassName } from './HeaderGroupItem';

export default function HeaderSubGroupItem({ pathname, link, children }: { pathname?: string; children: any; link?: string }) {
    return <Link
        className={`unstyled relative flex ${compareLinks({ link, pathname }) ? 'selected-group-item' : ''}`}
        href={link || '#'}
        target={link?.trim()?.slice(0, 4)==='http' ? '_blank' : undefined} //open in new tab if external link
        tabIndex={0}
        style={{
            borderRadius: 10
        }}
    >
        <div className={`${styles['header-group-item']} w-full flex`}>
            {/* Content */}
            <span className={linkTextClassName}>{children}</span>
        </div>
    </Link>;
}
