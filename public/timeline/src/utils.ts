import tinycolor from './tinycolor.js';

// Date
export type year=number;

export const monthNumToStr=(monthNum: number)=>
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthNum];

export function jdate(date=new Date()): string {
    const month=date.getMonth()+1;
    const day=date.getDate();
    const year=date.getFullYear().toString().slice(2);
    return `${month}.${day}.${year}`;
}

export const turnIntoDate=(input: string | Date | number | undefined)=>{
    if (input instanceof Date)
        return input;
    if (typeof input==='number') //set year as number
        return new Date(input, 0, 1);
    if (typeof input==='string')
        return new Date(input);
    console.log('input', input);
    throw new Error('Not valid type');
}

export function year2Date(year: number | string): Date {
    if (typeof year==='string') //cast to number
        year=parseFloat(year);

    const date=new Date();
    const monthsRemaining=(year-Math.floor(year))*12;
    const daysRemaining=(monthsRemaining-Math.floor(monthsRemaining))*30;
    date.setFullYear(year);
    date.setMonth(monthsRemaining);
    date.setDate(daysRemaining);
    return date;
}

export function date2Year(date: Date | string | number): number { //year in decimals
    if (typeof date==='string') //cast to date
        date=new Date(date);
    if (typeof date==='number') //already a year
        return date;

    const year=date.getFullYear();
    const month=date.getMonth();
    const day=date.getDate();

    return year+month/12+day/365;
}


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


// Formatting
export function blackOrWhiteTextColor(rawColor) {
    return tinycolor(rawColor)!.getBrightness()>128 ? 'black' : 'white';
}

