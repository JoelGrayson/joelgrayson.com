import { viewers } from './index';
import styles from '../../styles/ccc/viewer.module.css';
import UpDownArrow from '../../components/UpDownArrow';

export default function Viewer({ status, setStatus }: { status: viewers, setStatus: Function }) {
    return (
        (status===viewers.hidden)
        ? (<div className={`${styles.viewer} ${styles.collapsedViewer}`} onClick={_=>setStatus(viewers.none)}>
            <button className={styles.viewerToggleContainer}>
                <button className={styles.viewerToggle}>
                    <UpDownArrow dir='up' />
                </button>
            </button>
        </div>)
        : (<div id='viewer' className={styles.viewer}>
            <button className={styles.viewerToggleContainer}>
                <button className={styles.viewerToggle} onClick={_=>setStatus(viewers.hidden)}>
                    <UpDownArrow dir='down' />
                </button>
            </button>

            <h4 className='text-center'>Description</h4>
            {(()=>{
                switch (status) {
                    case viewers.none:
                        return <p>Hover a section to see its description</p>;
                    case viewers.solar:
                        return <p>Solar description.</p>;
                    default:
                        return <p>No description for section &quot;{status}&quot;</p>
                }
            })()}
        </div>)
    );
}