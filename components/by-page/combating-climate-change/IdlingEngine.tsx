import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Config
const START_LOC=[206, 168];
const SPEED=[1.8, .9];
const FREQ=300; //ms to spawn circles

export default function IdlingEngine() {
    const fumesRef=useRef<HTMLCanvasElement | null>(null);
    
    useEffect(()=>{
        const canvas=fumesRef.current as HTMLCanvasElement;
        const c=canvas.getContext("2d")!; //context
        let tSinceCircle=Date.now();
    
        class FumeCircle {
            x: number;
            y: number;
            opacity: number;
            r: number;

            constructor() {
                this.x=START_LOC[0];
                this.y=START_LOC[1];
                this.r=0;
                this.render();
                this.opacity=1;
            }
            update() {
                this.x+=SPEED[0]*(Math.random())*2;
                this.y+=SPEED[1]*(Math.random())*2;
                this.opacity-=0.01;
                this.render();
                this.r+=0.35;
            }
            render() {
                c.beginPath();
                c.arc(this.x, this.y, this.r, 0, Math.PI*2);
                c.strokeStyle=`rgb(30, 30, 30, ${this.opacity})`;
                c.stroke();
                c.fillStyle=`rgb(100, 100, 100, ${this.opacity})`;
                c.lineWidth=3+Math.random()*2;
                c.fill();
            }
        }
        
        const circs: FumeCircle[]=[];
        
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth+200, innerHeight+200); //clear the frame
            
            if (Date.now()-tSinceCircle>(FREQ*Math.random()*2)) { //±200
                tSinceCircle=Date.now();
                circs.push(new FumeCircle());
            }
            
            for (let i=0; i<circs.length; i++) {
                circs[i].update();
            }
        }
        animate();
    }, []);
    


    return <div style={{
        // position: 'absolute'
        position: 'relative',
        maxWidth: 500,
        maxHeight: 500,
    }}>
        {/* Diesel Bus */}
        <Image width={300} height={200} src="/image/ccc/stopping-bus-idling/idling.png" id="idling" alt="Idling" />
        {/* Idling Canvas */}
        <canvas width="500px" height="300px" ref={fumesRef} style={{
            position: 'absolute',
            top: '0',
            right: '0'
        }} />
    </div>;
}
