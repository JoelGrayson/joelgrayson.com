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

