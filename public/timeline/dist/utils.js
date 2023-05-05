// Date
export const monthNumToStr = (monthNum) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthNum];
export function jdate(date = new Date()) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(2);
    return `${month}.${day}.${year}`;
}
export const turnIntoDate = (str) => str instanceof Date ? str : new Date(str);
// Event
export function* generateColor() {
    const formerColors = new Set(); //colors already returned
    while (true) {
        let newColor = `hsla(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%, ${Math.random() * 100}%)`;
        while (formerColors.has(newColor)) { //generate color again
            newColor = `hsla(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%, ${Math.random() * 100}%)`;
        }
        yield newColor;
    }
}
;
// Graphics
export function inCoords(x, y, w, h, x2, y2) {
    return x2 >= x && x2 <= x + w && y2 >= y && y2 <= y + h;
}
export const forEachYear = (thisObj, cb) => {
    const { c, w, h, s } = thisObj.getVars();
    const xPadding = 5;
    const startingPlace = xPadding;
    const endingPlace = w - xPadding - c.measureText('00').width; //width of 4 characters (year)
    const span = endingPlace - startingPlace; //span of entire timeline line
    const yearSpan = Math.floor(span / (thisObj.end - thisObj.start)); //width per year
    const roundStart = Math.ceil(thisObj.start); //cannot start at 2006.5, but 2007
    const roundEnd = Math.floor(thisObj.end);
    for (let year = roundStart; year <= roundEnd; year++) {
        const offset = year - thisObj.start;
        cb({ year, offset, startingPlace, endingPlace, yearSpan });
    }
};
// export function getOffset(e: eventT): number {
// }
//# sourceMappingURL=utils.js.map