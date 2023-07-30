import { ReactNode } from 'react';
import styles from '@/styles/ccc/sections.module.css';

export function Section({title, children}: {title: string, children: ReactNode}) {
    return <section className={styles.section}>
        <div className={styles.content}>
            <h2 className={styles['content-title']}>{title}</h2>
            {children}
        </div>
    </section>;
}

export function Action({children, title, icon, ...props}: {children: ReactNode; title: string; icon?: React.ReactNode; [key: string]: any}) {
    return <div {...props}>
        <div className={styles['action-title']}>
            <span>{title}</span>
            {icon}
        </div>
        {children}
    </div>;
}

/* # Demo Usage

<Section title='Producing Clean Electricity'>
    <Action title='Solar for Riverdale' onMouseEnter={wrap(viewers.solar)}>
        <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20} />
    </Action>
</Section>

    ↓

<section className={styles.section}>
    <div className={styles.content}>
        <h2 className={styles['content-title']}>Producing Clean Electricity</h2>
        <div className={styles.action} onMouseEnter={()=>setViewer(viewers.solar)}>
            <span className={styles['action-title']}>Solar for Riverdale </span>
            <Image src='/image/ccc/solar-for-riverdale/solar-panel.png' alt='solar panel' width={26} height={20} />
        </div>
    </div>
</section>

*/