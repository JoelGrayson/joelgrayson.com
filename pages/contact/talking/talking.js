import Page from '../../../components/Page';
import Image from 'next/image';
import styles from './talking.module.css';
import { useState, useRef, useEffect } from 'react';
import MotionPathPlugin from './MotionPathPlugin.min.js';
import { gsap } from 'gsap';

import talkingJoel from './images/Talking Joel.webp';
import trumpet from './images/trumpet.png';
import listeningJoel from './images/Listening Joel.webp';

function Talking() {
    // const [aic, setAic]=useState('1'); //animation iteraction count (changes when hovering)

    const talkingRef=useRef();
    const circleRef=useRef();
    const pathRef=useRef();
    
    useEffect(()=>{
        gsap.registerPlugin(MotionPathPlugin);
        gsap.from(talkingRef.current, {
            x: -300,
            opacity: 0,
            duration: 1
        });
        gsap.to(circleRef.current, {
            duration: 1,
            delay: 1,
            motionPath: {
                path: pathRef.current,
                align: pathRef.current,
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            ease: "M0,0,C0.528,0.474,0.68,0.605,0.858,0.69,0.9,0.71,0.986,0.946,1,1"
        })
    });

    return (<Page>
        <div id='talking' ref={talkingRef}>
            <div className={styles.leftImgContainer}>
                <svg width="140" height="220" viewBox="0 0 167 193" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* invisible stroke for animating circle on */}
                    <path ref={pathRef}
                        d="M 1.5 1 C 39.1969 6.5437 68.4843 13.8245 91 20 C 118 34 118 30 126 61 C 116 85.5588 65.0942 82.0013 35.5 86 C 9.1098 89.5658 4 105 -2 126 C -5.0719 153.916 25.8101 169.012 64.5 177.916 C 82.1467 181.978 101.418 184.751 141 190 C 137.179 189.121 153.722 190.742 166.5 192.5"
                        stroke="black"
                    />
                </svg>
                <Image src={talkingJoel} width='434px' alt='Talking Joel'
                    // onMouseEnter={_=>setAic('infinite')}//when mouse enters, repeat forever
                    // onMouseLeave={_=>setAic('1')} //when mouse exits, stop repeating
                />
                {/*circle*/}
                <div className={styles.circle} ref={circleRef} ></div>
            </div>
        </div>
        <div>
            <Image src={trumpet} alt="Trumpet"/>
            <Image src={listeningJoel} alt="Listening Joel"/>
        </div>
    </Page>);
}

export default Talking;