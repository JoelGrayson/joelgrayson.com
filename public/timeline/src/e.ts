import { jdate, monthNumToStr, generateColor, turnIntoDate } from './utils.js';

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
    dateString: string; //displayed on event
    title: string;
    note: string;
    color: string;
};

export type eventPositionT=eventT & {
    // Extended
    startYear: number;
    endYear: number;
    
    y: number;
    x: number;
    width: number;
    height: number;

    isSelected?: boolean;
};

const colorGenerator=generateColor();

export default function e(title: string, date: propsT, note: string='', color?: string): eventT {
    // Default values
    date.scope??='range';
    if (date.scope==='range' && date.rangeScope==undefined) //default rangeScope is month
        date.rangeScope??='month';
    if (date.rangeScope!=undefined) //setting rangeScope sets scope to range
        date.scope='range';
    color??=colorGenerator.next().value as string; //if no color, generate random
    
    // Return event object based on scope
    switch (date.scope) {
        case 'day':
            if (date.day==undefined) throw new Error('Day must be specified');
            const day=turnIntoDate(date.day);
            return {
                scope: 'day',
                day,
                dateString: jdate(day), //month.day.year
                title, note, color
            };
        case 'month':
            if (date.month==undefined || date.year==undefined) throw new Error('Month and year must be specified');
            return {
                scope: 'month',
                month: date.month,
                year: date.year,
                dateString: `${monthNumToStr(date.month)}.${date.year}`, //month.year
                title, note, color
            };
        case 'year':
            if (date.year==undefined) throw new Error('Year must be specified');
            return {
                scope: 'year',
                year: date.year,
                dateString: date.year.toString(), //year
                title, note, color
            };
        case 'range':
            if (!(date.year==undefined || (date.startDate==undefined || date.endDate==undefined))) throw new Error('Year must be specified');
            console.log(date);
            const startDate=turnIntoDate(date.startDate);
            const endDate=date.endDate==='today' ? new Date() : turnIntoDate(date.endDate);
            return {
                scope: 'range',
                startDate,
                endDate,
                rangeScope: date.rangeScope,
                dateString: (()=>{
                    switch (date.rangeScope) {
                        case 'year':
                            if (startDate.getFullYear()===endDate.getFullYear())
                                return startDate.getFullYear().toString(); //2022
                            else
                                return `${startDate.getFullYear()}-${startDate.getFullYear().toString().slice(2)}`; //2022-24
                        case 'month':
                            if (startDate.getFullYear()===endDate.getFullYear())
                                if (startDate.getMonth()===endDate.getMonth())
                                    return `${monthNumToStr(startDate.getMonth())} ${startDate.getFullYear()}`; //Jan 2023
                                else
                                    return `${monthNumToStr(startDate.getMonth())}-${monthNumToStr(startDate.getMonth())}${startDate.getFullYear()}`; //Jan-Feb 2023
                            else
                                return `${monthNumToStr(startDate.getMonth())} ${startDate.getFullYear()}-${monthNumToStr(startDate.getMonth())} ${startDate.getFullYear()}`; //Jan 2023-Feb 2024
                        case 'day': // 5.4.23 or Jan 3-7, 2023 or Jan 3-Mar 5, 2023 or 2.2.21-3.3.23
                            if (startDate.getFullYear()===endDate.getFullYear())
                                if (startDate.getMonth()===endDate.getMonth())
                                    if (startDate.getDate()===endDate.getDate()) //same day
                                        return jdate(startDate); //5.4.23
                                    else
                                        return `${startDate.getDate()}-${endDate.getDate()} ${monthNumToStr(startDate.getMonth())} ${startDate.getFullYear()}`; //Jan 3-7, 2023
                                else
                                    return `${monthNumToStr(startDate.getMonth())} ${startDate.getDate()}-${monthNumToStr(endDate.getMonth())} ${endDate.getDate()}, ${startDate.getFullYear()}`; //Jan 3-Mar 5, 2023
                            else
                                return `${startDate.getDate()}.${startDate.getMonth()+1}-${endDate.getDate()}.${endDate.getMonth()+1}.${startDate.getFullYear()}`; //2.2.23-3.3.23
                        default:
                            throw new Error(`Invalid rangeScope ${date.rangeScope}`);
                    }
                })(),
                title, note, color
            };
        default: throw new Error('Scope must be day, month, year or range');
    }
}
