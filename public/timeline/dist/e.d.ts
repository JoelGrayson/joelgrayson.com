export type propsT = {
    scope?: 'day' | 'month' | 'year' | 'range';
    day?: Date | string;
    month?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    year?: number;
    startDate?: Date | string | number;
    endDate?: Date | string | number | 'today';
    rangeScope?: 'day' | 'month' | 'year';
};
export type eventT = propsT & {
    dateString: string;
    title: string;
    note: string | Element;
    color: string;
};
export default function e(title: string, date: propsT, note?: string | Element, color?: string): eventT;
