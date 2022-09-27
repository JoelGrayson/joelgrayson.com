import { useState } from 'react';
import Page from '../../components/Page';
import styles from '../../styles/ccc/sections.module.css';
import Image from 'next/image';
import Viewer from './Viewer';

export enum viewers { //viewer types
    // Special
    none,
    hidden,
    // Pages
    solar,
    seb
};

export default function CCC() {
    const [viewer, setViewer]=useState<viewers>(viewers.none); //viewer status
    
    return (<Page className={styles.main}>
        <Viewer status={viewer} setStatus={setViewer} />

        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles['content-title']}>Producing Clean Electricity</h2>
                <div className={styles.action} onMouseEnter={_=>setViewer(viewers.solar)}>
                    <span className={styles['action-title']}>Solar for Riverdale </span>
                    <Image src="/images/ccc/solar.png" alt="solar panel" width={26} height={20} />
                </div>
            </div>
        </section>
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles['content-title']}>Transitioning to Clean Infrastructure</h2>
                <div className={styles.action} onMouseEnter={_=>setViewer(viewers.seb)}>
                    <span className={styles['action-title']}>Students for Electric Buses</span>
                </div>
            </div>
        </section>
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles['content-title']}>Raising Public Awareness</h2>
                <div className={styles.action}>
                    <span className={styles['action-title']}>Action Title</span>
                </div>
            </div>
        </section>
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles['content-title']}>Energy Efficiency</h2>
                <div className={styles.action}>
                    <span className={styles['action-title']}>Action Title</span>
                </div>
            </div>
        </section>
    </Page>)
}
