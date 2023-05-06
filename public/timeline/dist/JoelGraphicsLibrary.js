export default class JGraphicsLibrary {
    constructor() { }
    drawLine(x, y, x2, y2) {
        c.beginPath();
        c.moveTo(leftMost, middle);
        c.lineTo(leftMost + 5, middle - 5);
        c.closePath();
        c.stroke();
    }
}
//# sourceMappingURL=JoelGraphicsLibrary.js.map