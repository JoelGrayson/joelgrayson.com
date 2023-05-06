type year = number;
declare const tools: string[];
type tool = typeof tools[number];
type images = {
    [key in tool]: HTMLImageElement;
};
export default class Timeline {
    #private;
    canvasEl: HTMLCanvasElement;
    c: CanvasRenderingContext2D;
    images: images;
    start: year;
    end: year;
    showControls: boolean;
    constructor();
    draw: () => void;
    getVars: () => {
        canvasEl: HTMLCanvasElement;
        c: CanvasRenderingContext2D;
        w: number;
        h: number;
        clear: () => void;
        s: (n: number) => string;
    };
    renderLines(): void;
    renderEvent(): void;
    renderControls(): void;
    clickEvent: (e: MouseEvent) => void;
    smoothly: (changeBy: {
        start: number;
        end: number;
    }) => void;
    wheelEvent(e: Event): void;
}
export {};
