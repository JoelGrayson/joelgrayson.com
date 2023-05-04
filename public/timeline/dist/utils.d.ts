export declare const monthNumToStr: (monthNum: number) => string;
export declare function jdate(date?: Date): string;
export declare const turnIntoDate: (str: string | Date | number | undefined) => Date;
export declare function generateColor(): Generator<string>;
export declare function inCoords(x: number, y: number, w: number, h: number, x2: number, y2: number): boolean;
export declare const forEachYear: (thisObj: {
    start: number;
    end: number;
}, cb: Function) => void;
