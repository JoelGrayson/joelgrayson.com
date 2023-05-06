export default class JGraphicsLibrary {
    // Elements
    canvasEl: HTMLCanvasElement;
    c: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement) {
        this.canvasEl=canvasElement;
        this.c=this.canvasEl.getContext('2d')!; //context
    }

    // Graphics Helpers
    drawLine(x1: number, y1: number, x2: number, y2: number) {
        this.c.beginPath();
        this.c.moveTo(x1, y1);
        this.c.lineTo(x2, y2);
        this.c.closePath();
        this.c.stroke();
    }

    inCoords(x: number, y: number, w: number, h: number, x2: number, y2: number) {
        return x2>=x && x2<=x+w && y2>=y && y2<=y+h;
    }
}
