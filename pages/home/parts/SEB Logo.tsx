import { useState } from 'react';
import styles from '../../../styles/home/logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    const [rotating, setRotating] = useState(true);

    return (<Link href='/'><a>
        <div className={styles.container}
            onMouseEnter={_=>setRotating(false)}
            onMouseLeave={_=>setRotating(true)}
        >
            <div className={styles.entire}>
                <Image src="/images/home/seb-logo/entire.png" alt="Logo" height='80px' width='80px' />
            </div>
            <div className={styles.inner}>
                <Image alt="Outer logo" height='80px' width='80px' src="/images/home/seb-logo/inner.png" />
            </div>
            <div className={rotating ? styles.rotatingOuter : styles.outer}>
                <Image alt="Inner logo" height='80px' width='80px' src="/images/home/seb-logo/outer.png" />
            </div>
        </div>
    </a></Link>);
}
