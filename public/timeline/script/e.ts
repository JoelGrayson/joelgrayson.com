function* generateColor(): Generator<string> {
    const formerColors: Set<string>=new Set(); //colors already returned
    while (true) {
        let newColor=`hsla(${Math.random()*360}, ${Math.random()*100}%, ${Math.random()*100}%, ${Math.random()*100}%)`;
        while (formerColors.has(newColor)) { //generate color again
            newColor=`hsla(${Math.random()*360}, ${Math.random()*100}%, ${Math.random()*100}%, ${Math.random()*100}%)`;
        }
        yield newColor;
    }
};
const colorGenerator=generateColor();

const turnIntoDate=(str: string | Date | number | undefined)=>str instanceof Date ? str : new Date(str as string);

export type propsT={
    scope?: 'day' | 'month' | 'year' | 'range'; //default is range

    day?: Date | string; //specific day
    month?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11; //if scope is month
    year?: number; //if scope is month or year
    
    // if range
    startDate?: Date | string | number;
    endDate?: Date | string | number | 'today';
    rangeScope?: 'day' | 'month' | 'year'; //default is month
};

export type eventT=propsT & { //output
    title: string;
    note: string | React.ReactNode;
    color: string;
};

export default function e(title: string, date: propsT, note: string | React.ReactNode='', color?: string): eventT {
    // Default values
    date.scope??='range';
    date.rangeScope??='month';
    color??=colorGenerator.next().value as string;
    
    // Return event object based on scope
    switch (date.scope) {
        case 'day':
            if (date.day==undefined) throw new Error('Day must be specified');
            return {
                scope: 'day',
                day: turnIntoDate(date.day),
                title, note, color
            };
        case 'month':
            if (date.month==undefined || date.year==undefined) throw new Error('Month and year must be specified');
            return {
                scope: 'month',
                month: date.month,
                year: date.year,
                title, note, color
            };
        case 'year':
            if (date.year==undefined) throw new Error('Year must be specified');
            return {
                scope: 'year',
                year: date.year,
                title, note, color
            };
        case 'range':
            if (date.year==undefined || date.startDate==undefined || date.endDate==undefined) throw new Error('Year must be specified');
            return {
                scope: 'range',
                startDate: turnIntoDate(date.startDate),
                endDate: date.endDate==='today' ? new Date() : turnIntoDate(date.endDate),
                rangeScope: date.rangeScope,
                title, note, color
            };
        default: throw new Error('Scope must be day, month, year or range');
    }
}
