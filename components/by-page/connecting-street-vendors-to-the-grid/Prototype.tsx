import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Config
const START_LOC=[293, 197];
const SPEED=[1.5, -.6];
const FREQ=400; //ms to spawn circles

export default function Prototype({ className, style }: { className?: string; style?: React.CSSProperties }) {
    const fumesRef=useRef<HTMLCanvasElement | null>(null);
    const [showingSolution, setShowingSolution]=useState(false);

    useEffect(()=>{
        const interval=setTimeout(()=>{
            setShowingSolution(!showingSolution);
        }, 4000);
        return ()=>clearTimeout(interval);
    }, [showingSolution]);
    
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
            
            if (Date.now()-tSinceCircle>(FREQ*Math.random()*2)) { //frequency is randomized with mean at FREQ
                tSinceCircle=Date.now();
                circs.push(new FumeCircle());
                for (let i=0; i<circs.length; i++) {
                    if (circs[i].opacity<0)
                        circs.splice(i, 1);
                }
            }
            
            for (let i=0; i<circs.length; i++) {
                circs[i].update();
            }
        }
        animate();
    }, []);
    


    return <div style={{
        position: 'relative',
        width: 480,
        height: 256,
        ...style
    }} className={className}>
        {/* Current */}
        <Image
            width={350} height={256}
            src="/image/connecting-street-vendors-to-the-grid/current.jpg"
            id="idling" alt="Idling"
            className='absolute top-0 left-0'
        />
        {/* Oscillating with Connect2Grid */}
        <Image
            width={350} height={256}
            src="/image/connecting-street-vendors-to-the-grid/with-connect2grid.jpg"
            id="idling" alt="Idling"
            className='absolute top-0 left-0'
            style={{
                opacity: showingSolution ? 1 : 0,
                transition: 'opacity 0.5s',
            }}
        />
        <p
            className='absolute top-2  pl-3 text-white bold shadow-md shadow-white'
            style={{
                backgroundColor: showingSolution ? 'green' : 'black',
                left: 80,
                width: showingSolution ? 170 : 210,
                borderRadius: 10,
                transition: 'background-color 0.5s'
            }}
        >
            { showingSolution ? 'Electricity from Grid' : 'Electricity from Generators' }
        </p>
        {/* Idling Canvas */}
        <canvas width="500px" height="300px" ref={fumesRef} style={{
            position: 'absolute',
            top: '0',
            right: '0',
            opacity: showingSolution ? 0 : 1,
            transition: 'opacity 0.5s'
        }} />
    </div>;
}
