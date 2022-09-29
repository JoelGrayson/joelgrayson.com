import styles from '../../styles/ccc/viewer.module.css';
import UpDownArrow from '../../components/UpDownArrow';
import { viewers } from './index';

export default function Viewer({ status, setStatus }: { status: viewers, setStatus: Function }) {
    function toggleShown() {
        if (isHidden())
            setStatus(viewers.none);
        else
            setStatus(viewers.hidden);
    }
    function isHidden() {
        return status===viewers.hidden;
    }
    
    return (<div
        onClick={_=>{if (isHidden()) toggleShown()}} //click box to expand only when hidden
        className={isHidden() ? `${styles.viewer} ${styles.collapsedViewer}` : styles.viewer} //if hidden, add collapsedViewer class
    >
        <button className={styles.viewerToggleContainer} onClick={toggleShown}>
            <div className={styles.viewerToggle}>
                <UpDownArrow dir={isHidden() ? 'up' : 'down'} />
            </div>
        </button> 

        { !isHidden() && (<>
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
        </>)}
    </div>);
}
