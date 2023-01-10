import { useState } from 'react';
import styles from '../../../../styles/home/logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function SEBLogo({size='80px'}: {size?: string}) {
    // const [rotating, setRotating]=useState(true);

    return (<Link href='https://studentsforelectricbuses.org'><a target='_blank'>
        <div className={styles.container} style={{height: size, width: size}}
            // onMouseEnter={_=>setRotating(false)}
            // onMouseLeave={_=>setRotating(true)}
        >
            <div className={styles.entire} style={{height: size, width: size}}>
                <Image src="/image/home/seb-logo/entire.png" alt="Logo" height='80px' width='80px' />
            </div>
            <div className={styles.inner} style={{height: size, width: size}}>
                <Image alt="Outer logo" height={size} width={size} src="/image/home/seb-logo/inner.png" />
            </div>
            {/* <div className={rotating ? styles.rotatingOuter : styles.outer}> */}
            <div className={styles.rotatingOuter} style={{height: size, width: size}}>
                <Image alt="Inner logo" height={size} width={size} src="/image/home/seb-logo/outer.png" />
            </div>
        </div>
    </a></Link>);
}
