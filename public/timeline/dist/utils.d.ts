export type year = number;
export declare const monthNumToStr: (monthNum: number) => string;
export declare function jdate(date?: Date): string;
export declare const turnIntoDate: (str: string | Date | number | undefined) => Date;
export declare function year2Date(year: number | string): Date;
export declare function date2Year(date: Date | string | number): number;
export declare function generateColor(): Generator<string>;
