import Page from '../../components/Page';
import styles from '../../styles/ccc/ccc.module.css';
import Image from 'next/image';

export default function CCC() {
    return (<Page className={styles.main}>
        <style jsx>{`
            section {
                position: relative;
                width: 100vw;
                background-color: #ddd;
                padding: 25px 50px;
                border-bottom: 1px solid black;
                /* border-bottom-color: black */
            }
            section:last-child {
                border: 0;
            }

            section .contents {
                display: block;
                border: 1px solid blue;
                width: 95%;
                max-width: 800px;
                margin: 0 auto;
                line-height: 1.75rem;
                padding: 0 2.5rem;
            }

            section .contents h2 {
                font-family: Myriad;
                font-size: 1.8rem;
            }
            section .contents .action .title {
                font-family: Avenir-Medium;
                font-size: 1.2rem;
            }
        `}</style>

        <div id='viewer' className={styles.viewer}>
            viewer
            
        </div>

        <section>
            <div className='contents'>
                <h2>Producing Clean Electricity</h2>
                <div className='action'>
                    <span className='title'>Solar for Riverdale </span>
                    <Image src="/images/ccc/solar.png" alt="solar panel" width={26} height={20} />
                </div>
            </div>
        </section>
        {/* <section>
            <h2>Transitioning to Clean Infrastructure</h2>
        </section>
        <section>
            <h2>Raising Public Awareness</h2>
        </section>
        <section>
            <h2>Energy Efficiency</h2>
        </section> */}
    </Page>)
}
