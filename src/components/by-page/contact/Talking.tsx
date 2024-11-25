import Image from 'next/image';
import styles from './talking.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TALKING_BALL_SPEED=200;
const DELAY_BETWEEN_BALLS=5;

function Talking() {
    // const [aic, setAic]=useState('1'); //animation iteraction count (changes when hovering)

    const talkingRef=useRef() as React.MutableRefObject<HTMLDivElement>;
    const circleRef=useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(()=>{ //animate contact every 5 seconds circle runs through
        // Talking
        gsap.to(talkingRef.current, { //move in and fade in
            opacity: 1,
            right: -370,
            duration: 1,
            animationTimingFunction: 'linear'
        });

        // <Testing>
        // gsap.to(circleRef.current, {
        //     duration: 1,
        //     ease: 'linear',
        //     x: 150,
        //     y: 165
        // });
        // 0, 0
        // 70, 25
        // 65, 65
        // -10, 70
        // -20, 130
        // 30, 150
        // 150, 165
        // </>


        // // Circle
        gsap.set(circleRef.current, {css: {opacity: 0} }); //hide circle at start
        const tl=gsap.timeline({
            delay: 1,
            repeatDelay: DELAY_BETWEEN_BALLS,
            repeat: -1 //repeat indefinitely
        });
        function distance(x1: number, y1: number, x2: number, y2: number) {
            return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
        }
        function frame(speed: number, x: number, y: number) { //animating shortcut
            tl.to(circleRef.current, {
                duration: speed,
                ease: 'linear',
                x, y
            });
        }
        tl.to(circleRef.current, { opacity: 0 }); //hide while moving to start
        tl.to(circleRef.current, { x: 1, y: 1, duration: .3 }); //quickly return to the start
        tl.to(circleRef.current, { css: {scaleX: 1, scaleY: 1}, duration: .3 }); //quickly return to the start
        tl.to(circleRef.current, { opacity: 1, duration: 0.2 }); //show
        // frame(1,   80,  30);
        // frame(0.4, 105, 50);
        // frame(1,  -86,  150);
        // frame(0.5,-36,  160);
        // frame(1.3, 110, 170);
        const frames=[
            [0, 0],
            [70, 25],
            [65, 65],
            [-10, 70],
            [-20, 130],
            [30, 150],
            [150, 165]
        ];
        for (let i=0; i<frames.length; i++) {
            let d;
            if (i===0)
                d=distance(0, 0, frames[i][0], frames[i][1]);
            else
                d=distance(frames[i-1][0], frames[i-1][1], frames[i][0], frames[i][1]);
            
            frame(d/TALKING_BALL_SPEED, frames[i][0], frames[i][1]);
        }
        // frames.forEach(([x, y])=>{
        //     frame(1, x, y);
        // });

        tl.to(circleRef.current, {
            delay: .2,
            duration: .3,
            css: {
                opacity: 0,
                scaleX: 0,
                scaleY: 0
            }
        });
    }, []);

    return <>
        <div id='talking' ref={talkingRef} style={{ //talkingRef starting position
            position: 'absolute',
            right: -100,
            opacity: 0
        }} >
            <div className={styles.leftImgContainer}>
                <Image src='/contact/talking-joel.webp' width='434' alt='talking-joel' height='320' priority />
                <div className={styles.circle} ref={circleRef} id='ball' />
            </div>
        </div>
    </>;
}

export default Talking;