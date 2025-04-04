// import { useState } from 'react';
import styles from '@/styles/home/logo.module.css';
import Image from 'next/image';

export default function SEBLogo({ size=80, inline=false, style={} }: { size?: number; inline?: boolean; style?: any }) {
    // const [rotating, setRotating]=useState(true);

    return <div className={styles.container} style={{ height: size, width: size, display: (inline ? 'inline-block' : 'block'), ...style }}
        // onMouseEnter={()=>setRotating(false)}
        // onMouseLeave={()=>setRotating(true)}
    >
        <div className={styles.entire} style={{height: size, width: size}}>
            <Image src='/image/home/seb-logo/optimized/entire.avif' alt='Students for Electric Buses Logo' width={80} height={80} />
        </div>
        <div className={styles.inner} style={{height: size, width: size}}>
            <Image alt='Inner Logo Piece' height={size} width={size} src='/image/home/seb-logo/optimized/inner.avif' />
        </div>
        {/* <div className={rotating ? styles.rotatingOuter : styles.outer}> */}
        <div className={styles.rotatingOuter} style={{height: size, width: size}}>
            <Image alt='Spinning Outer logo Piece' height={size} width={size} src='/image/home/seb-logo/optimized/outer.avif' />
        </div>
    </div>;
}
