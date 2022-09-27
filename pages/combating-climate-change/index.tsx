import { useRef, useEffect } from 'react';
import Page from '../../components/Page';
import styles from '../../styles/ccc/ccc.module.css';
import Image from 'next/image';
import draw from './draw';

export default function CCC() {
    const canvasRef=useRef();

    useEffect(()=>{
        const canvasEl: HTMLCanvasElement=canvasRef.current!;
        const c=canvasEl.getContext('2d')!;

        let t=0; //time or frame count since starting
        let animationFrameId: number;

        function render() {
            t++;
            draw(c, t);
            animationFrameId=requestAnimationFrame(render);
        }
        render();
        
        return ()=>cancelAnimationFrame(animationFrameId);
    }, []);

    return (<Page className={styles.main} center>
        <style jsx>{`
            article section {
                background-color: #ddd;
                padding: 25px 50px;
                border-bottom: 1px solid black;
                /* border-bottom-color: black */
            }
            article section:last-child {
                border: 0;
            }
            article section h2 {
                font-family: Myriad;
                font-size: 1.8rem;
            }
            article section .item .title {
                font-family: Avenir-Medium;
                font-size: 1.2rem;
            }
        `}</style>

        <article>
            <section>
                <h2>Producing Clean Electricity</h2>
                <div className='item'>
                    <span className='title'>Solar for Riverdale </span>
                    <Image src="/images/ccc/solar.png" alt="solar panel" width={26} height={20} />
                </div>
            </section>
            <section>
                <h2>Transitioning to Clean Infrastructure</h2>
            </section>
            <section>
                <h2>Raising Public Awareness</h2>
            </section>
            <section>
                <h2>Energy Efficiency</h2>
            </section>
        </article>

        
        <article>
            <canvas ref={canvasRef} width={500} height={200} />
        </article>
    </Page>)
}
