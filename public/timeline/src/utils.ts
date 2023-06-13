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

export const turnIntoDate=(str: string | Date | number | undefined)=>
    str instanceof Date ? str : new Date(str as string);

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
    else if (typeof date==='number') //already a year
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

