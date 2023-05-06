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
//# sourceMappingURL=utils.js.map