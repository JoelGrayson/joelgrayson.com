import { eventT } from './e.js';

// Date
export const monthNumToStr=(monthNum: number)=>['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthNum];

export function jdate(date=new Date()): string {
    const month=date.getMonth()+1;
    const day=date.getDate();
    const year=date.getFullYear().toString().slice(2);
    return `${month}.${day}.${year}`;
}

export const turnIntoDate=(str: string | Date | number | undefined)=>str instanceof Date ? str : new Date(str as string);

// Event
export function* generateColor(): Generator<string> {
    const formerColors: Set<string>=new Set(); //colors already returned
    while (true) {
        let newColor=`hsla(${Math.random()*360}, ${Math.random()*100}%, ${Math.random()*100}%, ${Math.random()*100}%)`;
        while (formerColors.has(newColor)) { //generate color again
            newColor=`hsla(${Math.random()*360}, ${Math.random()*100}%, ${Math.random()*100}%, ${Math.random()*100}%)`;
        }
        yield newColor;
    }
};

// Graphics
export function inCoords(x: number, y: number, w: number, h: number, x2: number, y2: number) {
    return x2>=x && x2<=x+w && y2>=y && y2<=y+h;
}

export type forEachYearProps={
    year: number;
    offset: number;
    startingPlace: number;
    endingPlace: number;
    yearSpan: number;
};

export const forEachYear=(thisObj: { start: number; end: number; getVars: Function }, cb: (obj: forEachYearProps)=>void)=>{
    const { c, w, h, s }=thisObj.getVars();
    const xPadding=5;
    const startingPlace=xPadding;
    const endingPlace=w-xPadding-c.measureText('00').width; //width of 4 characters (year)
    const span=endingPlace-startingPlace; //span of entire timeline line
    const yearSpan=Math.floor(span/(thisObj.end-thisObj.start)); //width per year

    const roundStart=Math.ceil(thisObj.start); //cannot start at 2006.5, but 2007
    const roundEnd=Math.floor(thisObj.end);

    for (let year=roundStart; year<=roundEnd; year++) {
        const offset=year-thisObj.start;
        cb({ year, offset, startingPlace, endingPlace, yearSpan });
    }
};

// export function getOffset(e: eventT): number {

// }
