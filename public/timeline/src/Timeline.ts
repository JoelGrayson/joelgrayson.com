import { forEachYear, inCoords } from './utils.js';

type year=number;
const born: year=2006;
const now: year=new Date().getFullYear();
type tool='left' | 'zoom-out' | 'zoom-in' | 'right';
const tools: tool[]=['left', 'zoom-out', 'zoom-in', 'right'];

type images={
    [key in tool]: HTMLImageElement;
};

export default class Timeline {
    // Elements
    canvasEl: HTMLCanvasElement;
    c: CanvasRenderingContext2D;
    images: images;

    // View settings
    start: year;
    end: year;
    showControls: boolean;

    constructor() { //setup
        this.canvasEl=document.getElementById('timeline') as HTMLCanvasElement;
        this.canvasEl.addEventListener('click', this.clickEvent);
        this.canvasEl.addEventListener('wheel', this.wheelEvent);
        this.c=this.canvasEl.getContext('2d')!;
        this.start=born;
        this.end=now;
        this.showControls=true;

        const resizeCanvas=()=>{
            const lowestEven=(e: number)=>e%2===0 ? e : Math.floor(e/2)*2; //must be even so that strokewidth is not blurry
            this.canvasEl.width=lowestEven(window.innerWidth-20); //canvas padding of 10px on both sides
            this.canvasEl.height=lowestEven(window.innerHeight-150);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Icon Images
        this.images={
            'left': new Image(),
            'zoom-in': new Image(),
            'zoom-out': new Image(),
            'right': new Image(),
        };
        for (let tool of tools)
            this.images[tool].src=`./controls/${tool}.png`;

        // Start draw loop
        window.requestAnimationFrame(this.draw);
    }

    // Rendering
    draw=()=>{
        const { c, w, h, clear }=this.getVars();

        clear();
        this.renderEvent();
        this.renderLines();
        this.renderControls(); //last so that it is on top

        requestAnimationFrame(this.draw); //go to next frame
    };

    getVars: ()=>{ //returns variables that should not be set through this.var=
        canvasEl: HTMLCanvasElement;
        c: CanvasRenderingContext2D;
        w: number;
        h: number;
        clear: ()=>void;
        s: (n: number)=>string;
    }=()=>{
        const c=this.c;
        const canvasEl=this.canvasEl;
        const w=canvasEl.width;
        const h=canvasEl.height;

        return {
            canvasEl,
            c,
            w,
            h,
            clear: ()=>c.clearRect(0, 0, w, h),
            s: (n: number)=>Math.floor(n).toString(), //toString
        };
    };

    renderLines() {
        const { c, w, h, s }=this.getVars();

        // Middle Timeline Line
        const lineWidth=2; //must be even
        const xPadding=5;
        const middle=h/2;
        const lineY=middle-lineWidth/2;
        c.fillStyle='black';
        c.fillRect(xPadding, lineY, w-2*xPadding, lineWidth); //timeline line

        // Year Lines (Sleepers)
        const startingPlace=xPadding;
        const endingPlace=w-xPadding-c.measureText('00').width; //width of 4 characters (year)
        const span=endingPlace-startingPlace; //span of entire timeline line
        const yearSpan=Math.floor(span/(this.end-this.start)); //width per year

        // Text
        const fontSize=20;
        c.font=`${20}px Avenir`;

        forEachYear(this, ({ year, offset }: { year: number; offset: number })=>{
            c.fillText(`'${s(year).slice(-2)}`, startingPlace+offset*yearSpan, lineY+fontSize); //'06 instead of 2006
        });
    }

    renderEvent() {

    }
    
    renderControls() {
        const { c, w, h, s }=this.getVars();

        c.fillStyle='#d9d9d9';
        c.strokeStyle='black';

        for (let i=0; i<tools.length; i++) { //background rectangles
            c.rect(10+40*i, 10, 30, 30); 
            c.fill();
            c.stroke();
        }
        for (let i=0; i<tools.length; i++) { //images on top
            const tool=tools[i];
            c.drawImage(this.images[tool], 10+i*40, 10, 30, 30);
        }
    }

    // Events
    clickEvent=(e: MouseEvent)=>{
        // Control button listeners
        for (let i=0; i<tools.length; i++) { //background rectangles
            if (inCoords(10+40*i, 10, 30, 30, e.offsetX, e.offsetY)) { //c.rect(10+40*i, 10, 30, 30)
                const sixthInterval=(this.end-this.start)/6;
                switch (tools[i]) {
                    case 'left':
                        this.start-=sixthInterval;
                        this.end-=sixthInterval;
                        break;
                    case 'zoom-out':
                        this.start-=sixthInterval;
                        this.end+=sixthInterval;
                        break;
                    case 'zoom-in':
                        this.start+=sixthInterval;
                        this.end-=sixthInterval;
                        break;
                    case 'right':
                        this.start+=sixthInterval;
                        this.end+=sixthInterval;
                        break;
                }
            }
        }
    }

    wheelEvent(e: Event) { //zooming
        console.log('Scroll event', e);
    }
}
