var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Timeline_transitionInterval;
import { forEachYear, inCoords } from './utils.js';
const born = 2006; //default start
const now = new Date().getFullYear(); //default end
const tools = ['home', 'left', 'zoom-out', 'zoom-in', 'right'];
export default class Timeline {
    constructor() {
        // Internal settings
        _Timeline_transitionInterval.set(this, void 0);
        // Rendering
        this.draw = () => {
            const { c, w, h, clear } = this.getVars();
            clear();
            this.renderEvent();
            this.renderLines();
            this.renderControls(); //last so that it is on top
            requestAnimationFrame(this.draw); //go to next frame
        };
        this.getVars = () => {
            const c = this.c;
            const canvasEl = this.canvasEl;
            const w = canvasEl.width;
            const h = canvasEl.height;
            return {
                canvasEl,
                c,
                w,
                h,
                clear: () => c.clearRect(0, 0, w, h),
                s: (n) => Math.floor(n).toString(), //toString
            };
        };
        // Events
        this.clickEvent = (e) => {
            // Control button listeners
            for (let i = 0; i < tools.length; i++) { //background rectangles
                if (inCoords(10 + 40 * i, 10, 30, 30, e.offsetX, e.offsetY)) { //c.rect(10+40*i, 10, 30, 30)
                    const sixthInterval = (this.end - this.start) / 6;
                    switch (tools[i]) {
                        case 'home':
                            this.smoothly({
                                start: born - this.start,
                                end: now - this.end
                            });
                            break;
                        case 'left':
                            this.smoothly({
                                start: -sixthInterval,
                                end: -sixthInterval
                            });
                            break;
                        case 'zoom-out':
                            this.smoothly({
                                start: -sixthInterval,
                                end: sixthInterval
                            });
                            break;
                        case 'zoom-in':
                            this.smoothly({
                                start: sixthInterval,
                                end: -sixthInterval
                            });
                            break;
                        case 'right':
                            this.smoothly({
                                start: sixthInterval,
                                end: sixthInterval
                            });
                            break;
                    }
                }
            }
        };
        this.smoothly = (changeBy) => {
            if (__classPrivateFieldGet(this, _Timeline_transitionInterval, "f")) {
                clearInterval(__classPrivateFieldGet(this, _Timeline_transitionInterval, "f"));
                __classPrivateFieldSet(this, _Timeline_transitionInterval, undefined, "f");
            }
            const duration = 250;
            const frequency = 10;
            __classPrivateFieldSet(this, _Timeline_transitionInterval, window.setInterval((() => {
                let timePassed = 0;
                return () => {
                    if (timePassed > duration)
                        return window.clearInterval(__classPrivateFieldGet(this, _Timeline_transitionInterval, "f"));
                    const numTimesWillRepeat = duration / frequency;
                    this.start += changeBy.start / numTimesWillRepeat;
                    this.end += changeBy.end / numTimesWillRepeat;
                    timePassed += frequency;
                };
            })(), frequency), "f");
        };
        this.canvasEl = document.getElementById('timeline');
        this.canvasEl.addEventListener('click', this.clickEvent);
        this.canvasEl.addEventListener('wheel', this.wheelEvent);
        this.c = this.canvasEl.getContext('2d');
        this.c.textAlign = 'center';
        this.start = born;
        this.end = now;
        this.showControls = true;
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
        const { c, h, s } = this.getVars();
        const lineWidth = 2; //must be even
        const middle = h / 2;
        const lineY = middle - lineWidth / 2;
        c.fillStyle = 'black';
        const fontSize = 20;
        c.font = `${20}px Avenir`;
        forEachYear(this, ({ year, offset, startingPlace, endingPlace, yearSpan }) => {
            // Middle Timeline Line
            c.fillRect(startingPlace, lineY, endingPlace, lineWidth); //timeline line
            // Year
            // Year Lines (Sleepers)
            // Year Text
            c.fillText(`'${s(year).slice(-2)}`, startingPlace + offset * yearSpan, lineY + fontSize); //'06 instead of 2006
        });
    }
    renderEvent() {
    }
    renderControls() {
        const { c, w, h, s } = this.getVars();
        c.fillStyle = '#d9d9d9';
        c.strokeStyle = 'black';
        for (let i = 0; i < tools.length; i++) { //background rectangles
            c.rect(10 + 40 * i, 10, 30, 30);
            c.fill();
            c.stroke();
        }
        for (let i = 0; i < tools.length; i++) { //images on top
            const tool = tools[i];
            c.drawImage(this.images[tool], 10 + i * 40, 10, 30, 30);
        }
    }
    wheelEvent(e) {
        console.log('Scroll event', e);
    }
}
_Timeline_transitionInterval = new WeakMap();
//# sourceMappingURL=Timeline.js.map