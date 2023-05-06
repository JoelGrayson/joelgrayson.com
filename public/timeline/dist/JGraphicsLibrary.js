export default class JGraphicsLibrary {
    constructor(canvasElement) {
        this.canvasEl = canvasElement;
        this.c = this.canvasEl.getContext('2d'); //context
    }
    // Graphics Helpers
    drawLine(x1, y1, x2, y2) {
        this.c.beginPath();
        this.c.moveTo(x1, y1);
        this.c.lineTo(x2, y2);
        this.c.closePath();
        this.c.stroke();
    }
    inCoords(x, y, w, h, x2, y2) {
        return x2 >= x && x2 <= x + w && y2 >= y && y2 <= y + h;
    }
}
//# sourceMappingURL=JGraphicsLibrary.js.map