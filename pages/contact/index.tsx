import Page from '@/components/global/Page';
import Talking from '@/components/by-page/contact/talking/_Talking';
import Form from '@/components/by-page/contact/form/_Form';
import Listening from '@/components/by-page/contact/listening/_Listening';

import styles from './contact.module.css';

export default function Contact() {
    return <Page noPadding>
        <div className='overflow-x-hidden'> {/* make sure does not overflow */}
            <div className='relative max-w-[700px] mx-auto'>
                <div className={ styles.talking }><Talking /> </div>
                <div className={  styles.form   }><Form />    </div>
                <div className={styles.listening}><Listening /></div>
            </div>
        </div>
    </Page>;
}