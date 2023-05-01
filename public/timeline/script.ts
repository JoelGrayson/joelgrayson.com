class Timeline {
    canvasEl: HTMLCanvasElement;
    c: CanvasRenderingContext2D;
    
    constructor() {
        this.canvasEl=document.getElementById('timeline') as HTMLCanvasElement;
        this.c=this.canvasEl.getContext('2d')!;
    }
    
    setup() {
        // const { c, w, h, clear }=this.getVars();
    }


    draw=()=>{
        const { c, w, h, clear }=this.getVars();

        clear();
        this.renderLines();

        requestAnimationFrame(this.draw);
    }

    getVars: ()=>{
        canvasEl: HTMLCanvasElement;
        c: CanvasRenderingContext2D;
        w: number;
        h: number;
        clear: ()=>void;
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
            clear: ()=>c.clearRect(0, 0, w, h)
        };
    }

    renderLines() {
        const { c, w, h }=this.getVars();

        const lineWidth=2; //must be even
        const xPadding=5;
        const middle=h/2;
        c.strokeStyle
        c.fillRect(xPadding, middle-lineWidth/2, w-2*xPadding, lineWidth);
    }
}

const timeline=new Timeline();
timeline.setup();
window.requestAnimationFrame(timeline.draw);
