import JGraphicsLibrary from './JGraphicsLibrary.js';
declare const tools: string[];
type tool = typeof tools[number];
type year = number;
type images = {
    [key in tool]: HTMLImageElement;
};
type forEachYearProps = {
    year: number;
    offset: number;
    yearSpan: number;
};
export default class Timeline extends JGraphicsLibrary {
    images: images;
    start: year;
    end: year;
    showControls: boolean;
    xPadding: number;
    constructor();
    draw: () => void;
    renderLines(): void;
    renderEvent(): void;
    renderControls(): void;
    clickEvent: (e: MouseEvent) => void;
    wheelEvent(e: WheelEvent): void;
    smoothlyMove: (changeBy: {
        start: number;
        end: number;
    }) => Promise<void>;
    forEachYear: (cb: (obj: forEachYearProps) => void) => void;
    year2X(): void;
    x2Year(): void;
    getVars: () => {
        canvasEl: HTMLCanvasElement;
        c: CanvasRenderingContext2D;
        w: number;
        h: number;
        leftOffset: number;
        rightOffset: number;
        clear: () => void;
        s: (n: number) => string;
    };
}
export {};
