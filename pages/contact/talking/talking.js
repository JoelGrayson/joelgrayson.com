import Image from 'next/image';
import styles from './talking.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import talkingJoel from './Talking Joel.webp';

function Talking() {
    // const [aic, setAic]=useState('1'); //animation iteraction count (changes when hovering)

    const talkingRef=useRef();
    const circleRef=useRef();
    
    useEffect(()=>{ //animate contact every 5 seconds circle runs through
        // gsap.registerPlugin(MotionPathPlugin);
        gsap.set(circleRef.current, {css: {opacity: 0} }); //hide circle at start
        gsap.from(talkingRef.current, {
            x: -300,
            opacity: 0,
            duration: 1
        });
        const tl=gsap.timeline({
            delay: 1,
            repeatDelay: 5,
            repeat: -1
        });
        function frame(speed, x, y) { //animating shortcut
            const coeffSpeed=0.5; //adjust this for speeding up/slowing down
            tl.to(circleRef.current, {
                duration: speed*coeffSpeed,
                ease: 'linear',
                x, y
            });
        }
        tl.to(circleRef.current, { opacity: 0 }); //hide while moving to start
        tl.to(circleRef.current, { x: 1, y: 1, duration: .3 }); //quickly return to the start
        tl.to(circleRef.current, { css: {scaleX: 1, scaleY: 1}, duration: .3 }); //quickly return to the start
        tl.to(circleRef.current, { opacity: 1, duration: 0.2 }); //show
        frame(1,   80,  30);
        frame(0.4, 105, 50);
        frame(1,  -86,  150);
        frame(0.5,-36,  160);
        frame(1.3, 110, 170);
        tl.to(circleRef.current, {
            delay: .3,
            duration: .3,
            css: {
                opacity: 0,
                scaleX: 0,
                scaleY: 0
            }
        })
    });

    return (<>
        <div id='talking' ref={talkingRef}>
            <div className={styles.leftImgContainer}>
                <Image src={talkingJoel} width='434px' alt='Talking Joel'/>
                <div className={styles.circle} ref={circleRef}></div> {/* circle */}
            </div>
        </div>
    </>);
}

export default Talking;