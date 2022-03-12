import Page from '../../components/Page';
import Talking from './talking/Talking';
import Form from './form/Form';
import Listening from './listening/Listening';

import styles from './contact.module.css';

export default function Contact() {
    return (
        <Page>
            <div className='overflow-x-hidden'> {/* make sure does not overflow */}
                <div className='relative max-w-[700px] mx-auto'>
                    <div className={ styles.talking }><Talking /> </div>
                    <div className={  styles.form   }>  <Form />  </div>
                    <div className={styles.listening}><Listening/></div>
                </div>
            </div>
        </Page>
    );
}