import { date2Year } from './utils.js';
import JGraphicsLibrary from './JGraphicsLibrary.js';
const born = 2006; //default start
const now = new Date().getFullYear(); //default end
const tools = ['home', 'left', 'zoom-out', 'zoom-in', 'right'];
export default class Timeline extends JGraphicsLibrary {
    constructor(events) {
        super(document.getElementById('timeline'));
        // Config
        this.xPadding = 15;
        // Rendering
        this.draw = () => {
            const { clear } = this.getVars();
            clear();
            this.renderEvents();
            this.renderLines();
            this.renderControls(); //last so that it is on top
            window.requestAnimationFrame(this.draw); //go to next frame
        };
        // Event Handlers
        this.clickEvent = (e) => {
            // Control button listeners
            for (let i = 0; i < tools.length; i++) { //background rectangles
                if (this.inCoords(10 + 40 * i, 10, 30, 30, e.offsetX, e.offsetY)) { //c.rect(10+40*i, 10, 30, 30)
                    const sixthInterval = (this.end - this.start) / 6;
                    switch (tools[i]) {
                        case 'home':
                            this.smoothlyMove({
                                start: born - this.start,
                                end: now - this.end
                            })
                                .then(() => {
                                this.start = born;
                                this.end = now;
                            });
                            break;
                        case 'left':
                            this.smoothlyMove({
                                start: -sixthInterval,
                                end: -sixthInterval
                            });
                            break;
                        case 'zoom-out':
                            this.smoothlyMove({
                                start: -sixthInterval,
                                end: sixthInterval
                            });
                            break;
                        case 'zoom-in':
                            this.smoothlyMove({
                                start: sixthInterval,
                                end: -sixthInterval
                            });
                            break;
                        case 'right':
                            this.smoothlyMove({
                                start: sixthInterval,
                                end: sixthInterval
                            });
                            break;
                    }
                }
            }
        };
        // # Helpers
        // ## Rendering Helpers
        this.smoothlyMove = (changeBy) => {
            return new Promise((resolve, reject) => {
                const duration = 250;
                const animate = (() => {
                    const initialStart = this.start;
                    const initialEnd = this.end;
                    let startingTimestamp = -1;
                    const innerAnimate = (timestamp) => {
                        if (startingTimestamp === -1 && timestamp === -1)
                            return window.requestAnimationFrame(innerAnimate); //not ready yet
                        if (startingTimestamp === -1 && timestamp !== -1) //make ready by starting timer
                            startingTimestamp = timestamp;
                        const timePassed = timestamp - startingTimestamp;
                        const progress = timePassed / duration; //0 to 1
                        if (progress >= 1)
                            return resolve(); //finished
                        this.start = initialStart + changeBy.start * progress;
                        this.end = initialEnd + changeBy.end * progress;
                        return window.requestAnimationFrame(innerAnimate);
                    };
                    return innerAnimate;
                })();
                animate(-1);
            });
        };
        // ## Other Helpers
        this.forEachYear = (cb) => {
            const { leftOffset, rightOffset, yearSpan } = this.getVars();
            const roundStart = Math.ceil(this.start); //cannot start at 2006.5, but 2007
            const roundEnd = Math.floor(this.end);
            for (let year = roundStart; year <= roundEnd; year++) {
                const offset = year - this.start;
                cb({ year, offset, yearSpan });
            }
        };
        this.getVars = () => {
            const c = this.c;
            const canvasEl = this.canvasEl;
            const w = canvasEl.width;
            const h = canvasEl.height;
            const leftOffset = this.xPadding;
            const rightOffset = w - 2 * this.xPadding;
            const span = rightOffset - leftOffset; //span of entire timeline line
            const yearSpan = Math.floor(span / (this.end - this.start)); //width per year
            return {
                canvasEl,
                c, w, h, leftOffset, rightOffset,
                clear: () => c.clearRect(0, 0, w, h),
                s: (n) => Math.floor(n).toString(),
                yearSpan
            };
        };
        this.canvasEl.addEventListener('click', this.clickEvent);
        this.canvasEl.addEventListener('wheel', this.wheelEvent);
        this.c.textAlign = 'center';
        this.start = born;
        this.end = now;
        this.showControls = true;
        this.events = events;
        console.log(events);
        const resizeCanvas = () => {
            const lowestEven = (e) => e % 2 === 0 ? e : Math.floor(e / 2) * 2; //must be even so that strokewidth is not blurry
            this.canvasEl.width = lowestEven(window.innerWidth - 20); //canvas padding of 10px on both sides
            this.canvasEl.height = lowestEven(window.innerHeight - 150);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Icon Images
        this.images = {};
        for (let tool of tools) {
            this.images[tool] = new Image();
            this.images[tool].src = `./controls/${tool}.png`;
        }
        // Start draw loop
        window.requestAnimationFrame(this.draw);
    }
    renderLines() {
        const { c, h, s, leftOffset, rightOffset } = this.getVars();
        const lineWidth = 2; //must be even
        const middle = h / 2;
        const lineY = middle - lineWidth / 2;
        c.fillStyle = 'black';
        const fontSize = 20;
        c.font = `${fontSize}px Avenir`;
        c.fillRect(leftOffset, lineY, rightOffset, lineWidth); //middle timeline line
        this.forEachYear(({ year, offset, yearSpan }) => {
            // Year Lines (sleepers)
            // Year Text
            c.fillText(`'${s(year).slice(-2)}`, leftOffset + offset * yearSpan, lineY + fontSize); //'06 instead of 2006
        });
        // Render arrow heads <- and -> for the ends of the timeline line
        c.strokeStyle = 'black';
        c.lineWidth = 2;
        c.lineJoin = 'round';
        // Left Arrow
        const leftMost = leftOffset - 9;
        this.drawLine(leftMost, middle, leftMost + 5, middle - 5);
        this.drawLine(leftMost, middle, leftMost + 5, middle + 5);
        this.drawLine(leftMost, middle, leftMost + 9, middle);
        // Right Arrow
        const rightMost = rightOffset + 24;
        this.drawLine(rightMost, middle, rightMost - 5, middle - 5);
        this.drawLine(rightMost, middle, rightMost - 5, middle + 5);
        this.drawLine(rightMost, middle, rightMost - 9, middle);
    }
    renderEvents() {
        const { c, h } = this.getVars();
        const eventHeight = 30;
        const eventWidth = 80;
        const minimumVicinity = eventWidth * 1; //if an event is within this distance, it will be pushed up
        c.strokeStyle = 'black';
        c.lineWidth = 1;
        c.fillStyle = '#ccc';
        // Make sure no overlaying events
        const yearsCovered = [];
        for (const e of this.events) {
            // console.log(e);
            /* Example e:
            {
                "scope": "range",
                "startDate": "2019-09-01T04:00:00.000Z", //typeof date
                "endDate": "2023-05-11T11:28:16.458Z", //typeof enddate
                "rangeScope": "month",
                "dateString": "Sep 2019-Sep 2019",
                "title": "Student Government Grade Representative",
                "note": "",
                "color": "hsla(82.55540965795339, 32.82372588962783%, 90.63269527226213%, 42.10319331808845%)" //typeof string
            } */
            // c.rect(this.year2X(date2Year(e.startDate)), h/2-eventHeight-5, eventWidth, eventHeight);
            const minimumWidth = 30; //event cannot be shorter than this
            const startingYear = date2Year(e.startDate);
            const startingPosition = this.year2X(startingYear);
            const endingYear = date2Year(e.endDate);
            const width = this.year2X(endingYear) - startingPosition;
            let renderedInVicinity = 0; //number of events that have already been rendered in the vicinity
            yearsCovered.forEach(year => {
                if (Math.abs(year - startingYear) > minimumVicinity)
                    renderedInVicinity++;
            });
            // console.log('renderedInVicinity', renderedInVicinity);
            console.log(yearsCovered);
            c.rect(startingPosition, h / 2 - eventHeight - 5 /* timeline */ - eventHeight * renderedInVicinity /* stack */, width < minimumWidth ? minimumWidth : width, eventHeight);
            c.fill();
            c.stroke();
            switch (e.scope) {
                case 'year':
                    break;
                case 'month':
                    break;
                case 'day':
                    break;
                case 'range':
                    break;
                default:
                    throw new Error(`Invalid scope ${e.scope}`);
            }
            yearsCovered.push(date2Year(e.startDate)); //log year
        }
    }
    renderControls() {
        const { c } = this.getVars();
        const imagePadding = 2; //inner image padding
        c.fillStyle = '#d9d9d9';
        c.strokeStyle = 'black';
        for (let i = 0; i < tools.length; i++) { //background rectangles
            c.rect(10 + 40 * i, 10, 30, 30);
            c.fill();
            c.stroke();
        }
        for (let i = 0; i < tools.length; i++) { //images on top
            const tool = tools[i];
            c.drawImage(this.images[tool], 10 + i * 40 + imagePadding, 10 + imagePadding, 30 - 2 * imagePadding, 30 - 2 * imagePadding);
        }
    }
    wheelEvent(e) {
        console.log('Scroll event', e);
        console.log('Scrolling into', e.offsetX, e.offsetY);
    }
    year2X(year) {
        const { yearSpan } = this.getVars();
        const offset = year - this.start; //offset from start in years
        return offset * yearSpan;
    }
    x2YDate(x) {
        return new Date();
    }
}
//# sourceMappingURL=Timeline.js.map