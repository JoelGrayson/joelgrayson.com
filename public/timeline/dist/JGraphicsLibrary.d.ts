export default class JGraphicsLibrary {
    canvasEl: HTMLCanvasElement;
    c: CanvasRenderingContext2D;
    constructor(canvasElement: HTMLCanvasElement);
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
    inCoords(x: number, y: number, w: number, h: number, x2: number, y2: number): boolean;
}
