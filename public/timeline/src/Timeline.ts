import JGraphicsLibrary from './JGraphicsLibrary.js';

const born: year=2006; //default start
const now: year=new Date().getFullYear(); //default end
const tools=['home', 'left', 'zoom-out', 'zoom-in', 'right'];

// Types
type tool=typeof tools[number];
type year=number;
type images={
    [key in tool]: HTMLImageElement;
};
type forEachYearProps={
    year: number;
    offset: number;
    yearSpan: number;
};

export default class Timeline extends JGraphicsLibrary {
    // Elements
    images: images;

    // View settings
    start: year;
    end: year;
    showControls: boolean;

    // Config
    xPadding=15;

    constructor() { //setup
        super(document.getElementById('timeline') as HTMLCanvasElement)
        this.canvasEl.addEventListener('click', this.clickEvent);
        this.canvasEl.addEventListener('wheel', this.wheelEvent);
        this.c.textAlign='center';
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
        this.images={};
        for (let tool of tools) {
            this.images[tool]=new Image();
            this.images[tool].src=`./controls/${tool}.png`;
        }

        // Start draw loop
        window.requestAnimationFrame(this.draw);
    }

    // Rendering
    draw=()=>{
        const { clear }=this.getVars();

        clear();
        this.renderEvent();
        this.renderLines();
        this.renderControls(); //last so that it is on top

        window.requestAnimationFrame(this.draw); //go to next frame
    }

    renderLines() {
        const { c, h, s, leftOffset, rightOffset }=this.getVars();

        const lineWidth=2; //must be even
        const middle=h/2;
        const lineY=middle-lineWidth/2;
        c.fillStyle='black';
        const fontSize=20;
        c.font=`${fontSize}px Avenir`;

        c.fillRect(leftOffset, lineY, rightOffset, lineWidth); //middle timeline line
        this.forEachYear(({ year, offset, yearSpan }: forEachYearProps)=>{
            // Year Lines (sleepers)
            
            // Year Text
            c.fillText(`'${s(year).slice(-2)}`, leftOffset+offset*yearSpan, lineY+fontSize); //'06 instead of 2006
        });

        // Render arrow heads <- and -> for the ends of the timeline line
        c.strokeStyle='black';
        c.lineWidth=2;
        c.lineJoin='round';
        // Left Arrow
        const leftMost=leftOffset-9;
        this.drawLine(leftMost, middle, leftMost+5, middle-5);
        this.drawLine(leftMost, middle, leftMost+5, middle+5);
        this.drawLine(leftMost, middle, leftMost+9, middle);
        // Right Arrow
        const rightMost=rightOffset+24;
        this.drawLine(rightMost, middle, rightMost-5, middle-5);
        this.drawLine(rightMost, middle, rightMost-5, middle+5);
        this.drawLine(rightMost, middle, rightMost-9, middle);
    }

    renderEvent() {

    }
    
    renderControls() {
        const { c }=this.getVars();

        const imagePadding=2; //inner image padding
        c.fillStyle='#d9d9d9';
        c.strokeStyle='black';

        for (let i=0; i<tools.length; i++) { //background rectangles
            c.rect(10+40*i, 10, 30, 30); 
            c.fill();
            c.stroke();
        }
        for (let i=0; i<tools.length; i++) { //images on top
            const tool=tools[i];
            c.drawImage(this.images[tool], 10+i*40+imagePadding, 10+imagePadding, 30-2*imagePadding, 30-2*imagePadding);
        }
    }

    // Event Handlers
    clickEvent=(e: MouseEvent)=>{
        // Control button listeners
        for (let i=0; i<tools.length; i++) { //background rectangles
            if (this.inCoords(10+40*i, 10, 30, 30, e.offsetX, e.offsetY)) { //c.rect(10+40*i, 10, 30, 30)
                const sixthInterval=(this.end-this.start)/6;
                switch (tools[i]) {
                    case 'home':
                        this.smoothlyMove({
                            start: born-this.start,
                            end: now-this.end
                        })
                            .then(()=>{ //make sure that afterward, the same exact values are used because of floating point errors
                                this.start=born;
                                this.end=now;
                            });
                        break;
                    case 'left':
                        this.smoothlyMove({
                            start: -sixthInterval,
                            end: -sixthInterval
                        });
                        break;
                    case 'zoom-out':
                        this.smoothlyMove({
                            start: -sixthInterval,
                            end: sixthInterval
                        });
                        break;
                    case 'zoom-in':
                        this.smoothlyMove({
                            start: sixthInterval,
                            end: -sixthInterval
                        });
                        break;
                    case 'right':
                        this.smoothlyMove({
                            start: sixthInterval,
                            end: sixthInterval
                        });
                        break;
                }
            }
        }
    }

    wheelEvent(e: WheelEvent) { //zooming
        console.log('Scroll event', e);
        console.log('Scrolling into', e.offsetX, e.offsetY);
        
    }

    // # Helpers
    // ## Rendering Helpers
    smoothlyMove=(changeBy: { start: number; end: number })=>{
        return new Promise<void>((resolve, reject)=>{
            const duration=250;

            const animate=(()=>{ //clojure for internal state variables below
                const initialStart=this.start;
                const initialEnd=this.end;
                let startingTimestamp=-1;
    
                const innerAnimate=(timestamp: number)=>{ //called every frame
                    if (startingTimestamp===-1 && timestamp===-1) return window.requestAnimationFrame(innerAnimate); //not ready yet
                    
                    if (startingTimestamp===-1 && timestamp!==-1) //make ready by starting timer
                        startingTimestamp=timestamp;

                    const timePassed=timestamp-startingTimestamp;
                    const progress=timePassed/duration; //0 to 1
    
                    if (progress>=1) return resolve(); //finished
    
                    this.start=initialStart+changeBy.start*progress;
                    this.end=  initialEnd+  changeBy.end  *progress;
    
                    return window.requestAnimationFrame(innerAnimate);
                };
                return innerAnimate;
            })();
    
            animate(-1);
        });
    }


    // ## Other Helpers
    forEachYear=(cb: (obj: forEachYearProps)=>void)=>{
        const { leftOffset, rightOffset }=this.getVars();
        const span=rightOffset-leftOffset; //span of entire timeline line
        const yearSpan=Math.floor(span/(this.end-this.start)); //width per year
    
        const roundStart=Math.ceil(this.start); //cannot start at 2006.5, but 2007
        const roundEnd=Math.floor(this.end);
    
        for (let year=roundStart; year<=roundEnd; year++) {
            const offset=year-this.start;
            cb({ year, offset, yearSpan });
        }
    }

    year2X() { //get the x offset of a year
        
    }

    x2Year() { //turn x offset into year float

    }
    
    getVars: ()=>{ //returns variables that should not be set through this.var=
        canvasEl: HTMLCanvasElement;
        c: CanvasRenderingContext2D;
        w: number;
        h: number;
        leftOffset: number;
        rightOffset: number;
        clear: ()=>void;
        s: (n: number)=>string;
    }=()=>{
        const c=this.c;
        const canvasEl=this.canvasEl;
        const w=canvasEl.width;
        const h=canvasEl.height;
        const leftOffset=this.xPadding;
        const rightOffset=w-2*this.xPadding;

        return {
            canvasEl,
            c, w, h, leftOffset, rightOffset,
            clear: ()=>c.clearRect(0, 0, w, h),
            s: (n: number)=>Math.floor(n).toString(), //toString
        };
    }
}
