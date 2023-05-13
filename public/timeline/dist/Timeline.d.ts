import JGraphicsLibrary from './JGraphicsLibrary.js';
import { eventT } from 'e.js';
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
    events: eventT[];
    start: year;
    end: year;
    showControls: boolean;
    xPadding: number;
    constructor(events: eventT[]);
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
    date2X(date: Date): number;
    x2YDate(x: number): Date;
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
