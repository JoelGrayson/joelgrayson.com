import Page from '@/components/page/DefaultPage';
import Talking from '@/components/by-page/contact/Talking';
import Form from '@/components/by-page/contact/Form';
import Listening from '@/components/by-page/contact/Listening';

import styles from './contact.module.css';

export default function Contact() {
    return <Page noPadding pathname='/contact' seo={{
        title: 'Contact Joel Grayson',
        description: 'Fill out this contact form to reach Joel',
        og: {
            image: '/image/opengraph/contact.png',
            imageAlt: "Listening Joel"
        }
    }}>
        <div className='overflow-x-hidden'> {/* make sure does not overflow */}
            <div className='relative max-w-[700px] mx-auto'>
                <div className={ styles.talking }><Talking /> </div>
                <div className={  styles.form   }><Form />    </div>
                <div className={styles.listening}><Listening /></div>
            </div>
        </div>
    </Page>;
}
