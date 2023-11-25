import { blackOrWhiteTextColor, date2Year, year } from './utils.js';
import JGraphicsLibrary from './JGraphicsLibrary.js';
import { eventT, eventPositionT } from './e.js';
import tinycolor from './tinycolor.js';

const born: year=2006; //default start
const now: year=new Date().getFullYear(); //default end
const tools=['home', 'left', 'zoom-out', 'zoom-in', 'right'];

// Types
type tool=typeof tools[number];
type images={
    [key in tool]: HTMLImageElement;
};
type forEachYearProps={
    year: number;
    offset: number;
    yearSpan: number;
};

export default class Timeline extends JGraphicsLibrary {
    // Elements
    images: images;
    eventEl: HTMLDivElement;
    events: eventPositionT[];

    // Interactive
    mouseX: number=0;
    mouseY: number=0;
    
    // View settings
    start: year;
    end: year;
    showControls: boolean;

    // Config
    xPadding=20;
    yPadding=20;
    fontSize=20;


    constructor(events: eventT[]) { //setup
        super(document.getElementById('timeline') as HTMLCanvasElement)
        this.eventEl=document.getElementById('event') as HTMLDivElement;
        this.canvasEl.addEventListener('click', this.clickEvent);
        this.canvasEl.addEventListener('mousemove', this.hoverEvent);
        this.canvasEl.addEventListener('wheel', this.wheelEvent);
        this.c.textAlign='center';
        this.start=born;
        this.end=now;
        this.showControls=true;
        this.events=this.processEvents(events);
        console.log('Events', events);
        console.log('Processed Events', this.events);

        const resizeCanvas=()=>{
            const lowestEven=(e: number)=>e%2===0 ? e : Math.floor(e/2)*2; //must be even so that strokewidth is not blurry
            this.canvasEl.width=lowestEven(window.innerWidth-20); //canvas padding of 10px on both sides
            this.canvasEl.height=lowestEven(window.innerHeight-150);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Icon Images
        this.images={};
        for (let tool of tools) {
            this.images[tool]=new Image();
            this.images[tool].src=`./controls/${tool}.png`;
        }

        // Event HTML Element
        this.eventEl.addEventListener('click', e=>{
            this.eventEl.classList.add('hidden');
            for (const e of this.events) //deselect all events
                e.isSelected=false;
        });
        
        // Start draw loop
        window.requestAnimationFrame(this.draw);
    }

    processEvents(events: eventT[]): eventPositionT[] { //find the start year and end year value of each event (called once)
        return events.map((event: eventT)=>{ //add start and end year
            let startYear: number;
            let endYear: number;
            switch (event.scope) {
                case 'day':
                    if (!(event.day instanceof Date)) throw new Error('Day must be a Date object');
                    const nextDay=new Date(event.day); //clone date
                    nextDay.setDate(nextDay.getDate()+1);

                    startYear=date2Year(event.day);
                    endYear=date2Year(nextDay);
                    break;
                case 'month':
                    startYear=date2Year(new Date(event.year!, event.month!, 0));
                    endYear=date2Year(new Date(event.year!, event.month!, 30));
                    break;
                case 'year':
                    startYear=event.year!;
                    endYear=event.year!;
                    break;
                case 'range':
                    startYear=date2Year(new Date(event.startDate!));
                    endYear=date2Year(new Date(event.endDate!));
                    break;
                default:
                    throw new Error('Invalid event scope');
            }
            
            return {
                ...event,
                startYear,
                endYear,
    
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        });
    }

    
    // Rendering
    draw=()=>{
        const { c, clear }=this.getVars();

        c.font=`${this.fontSize}px Avenir`;
        clear();
        this.calculateEventPositions();
        this.renderEvents();
        this.renderLines();
        this.renderControls(); //last so that it is on top
        window.requestAnimationFrame(this.draw); //go to next frame
        
        // // Render Cursor
        // c.beginPath();
        // c.arc(this.mouseX, this.mouseY, 10, 0, 1.9*Math.PI);
        // c.fill();
    }

    calculateEventPositions(): void { //find the position of each event based on zoom settings (called every frame)
        // Useful for rendering and collision detection in hover/click events)
        const { timelineBottom }=this.getVars();

        const eventHeight=30;

        // Make sure no overlaying events
        const yearsCovered=[];
    
        for (const e of this.events) {
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
            

            const minimumWidth=30; //event cannot be shorter than this
            const startPosition=this.year2X(e.startYear);
            let width=this.year2X(e.endYear)-startPosition;
            width=width<minimumWidth ? minimumWidth : width; //if width is too small, make it minimumWidth
            const endPosition=startPosition+width;

            let renderedInVicinity=0; //number of events that have already been rendered in the vicinity
            yearsCovered.forEach(({ startPosition: otherStartPosition, endPosition: otherEndPosition })=>{
                const overlap=endPosition>otherStartPosition && startPosition<otherEndPosition;
                // const otherInCurr=otherStartPosition>=startPosition && otherEndPosition<=endPosition;
                // const currInOther=startPosition>=otherStartPosition && endPosition<=otherEndPosition;    
                // if (overlap || currInOther || otherInCurr)
                if (overlap)
                    renderedInVicinity++;
            });

            let heightOffset=timelineBottom-eventHeight-5 /* timeline */ - eventHeight*renderedInVicinity /* stack offset */;

            e.x=startPosition;
            e.y=heightOffset;
            e.width=width;
            e.height=eventHeight;

            yearsCovered.push({ startPosition, endPosition }); //log year
        }
    }

    renderLines() {
        const { c, timelineBottom, s, leftOffset, rightOffset }=this.getVars();

        const lineWidth=2; //must be even
        const lineY=timelineBottom-lineWidth/2;
        c.fillStyle='black';

        c.fillRect(leftOffset, lineY, rightOffset, lineWidth); //middle timeline line
        this.forEachYear(({ year, offset, yearSpan }: forEachYearProps)=>{
            // Year Lines (sleepers)
            
            // Year Text
            c.fillText(`'${s(year).slice(-2)}`, leftOffset+offset*yearSpan, lineY+this.fontSize); //'06 instead of 2006
        });

        // Render arrow heads <- and -> for the ends of the timeline line
        c.strokeStyle='black';
        c.lineWidth=2;
        c.lineJoin='round';
        // Left Arrow
        const leftMost=leftOffset-9;
        this.drawLine(leftMost, timelineBottom, leftMost+5, timelineBottom-5);
        this.drawLine(leftMost, timelineBottom, leftMost+5, timelineBottom+5);
        this.drawLine(leftMost, timelineBottom, leftMost+9, timelineBottom);
        // Right Arrow
        const rightMost=rightOffset+24;
        this.drawLine(rightMost, timelineBottom, rightMost-5, timelineBottom-5);
        this.drawLine(rightMost, timelineBottom, rightMost-5, timelineBottom+5);
        this.drawLine(rightMost, timelineBottom, rightMost-9, timelineBottom);
    }

    renderEvents() {
        const { c }=this.getVars();

        for (const e of this.events) {
            let color=tinycolor(e.color)!;
            
            // Hovered style is darker
            if (this.inCoords(e.x, e.y, e.width, e.height, this.mouseX, this.mouseY))
                color=color.darken(20);

            c.fillStyle=color.toString();
            c.strokeStyle=color.darken(20).toString();

            if (e.isSelected) {
                c.fillStyle='#a9dafc';
                c.strokeStyle='#0e7dcc';
                c.lineWidth=3;
            } else {
                c.lineWidth=1;
            }
            
            c.beginPath();
            c.rect(
                e.x,
                e.y,
                e.width,
                e.height
            );
            c.fill();
            c.stroke();

            // Text color
            c.fillStyle=blackOrWhiteTextColor(<string>c.fillStyle);

            // Place text in center of event
            c.textBaseline='middle';
            c.textAlign='center';
            c.fillText(e.title, e.x+e.width/2, e.y+e.height/2, e.width);
        }
    }
    
    renderControls() {
        const { c }=this.getVars();

        const imagePadding=2; //inner image padding
        c.strokeStyle='black';

        for (let i=0; i<tools.length; i++) { //background rectangles
            c.beginPath();
            const [x, y, w, h]=[this.xPadding+40*i, this.yPadding, 30, 30];
            if (this.inCoords(x, y, w, h, this.mouseX, this.mouseY))
                c.fillStyle='#aaa';
            else
                c.fillStyle='#d9d9d9';

            c.rect(x, y, w, h);
            c.fill();
            c.stroke();
        }
        for (let i=0; i<tools.length; i++) { //images on top
            const tool=tools[i];
            c.drawImage(this.images[tool], this.xPadding+i*40+imagePadding, this.yPadding+imagePadding, 30-2*imagePadding, 30-2*imagePadding);
        }
    }

    // Event Handlers
    clickEvent=(e: MouseEvent)=>{
        // Control button listeners
        for (let i=0; i<tools.length; i++) { //background rectangles
            if (this.inCoords(10+40*i, 10, 30, 30, e.offsetX, e.offsetY)) { //clicked inside the tool
                const moveBy=(this.end-this.start)/6; //move by 1/6 of the timeline
                switch (tools[i]) {
                    case 'home':
                        this.smoothlyMove({
                            start: born-this.start,
                            end: now-this.end
                        })
                            .then(()=>{ //make sure that afterward, the same exact values are used because of floating point errors
                                this.start=born;
                                this.end=now;
                            });
                        return; //exit the function so computation is over and no other action is executed
                    case 'left':
                        this.smoothlyMove({
                            start: -moveBy,
                            end: -moveBy
                        });
                        return;
                    case 'zoom-out':
                        this.smoothlyMove({
                            start: -moveBy,
                            end: moveBy
                        });
                        return;
                    case 'zoom-in':
                        this.smoothlyMove({
                            start: moveBy,
                            end: -moveBy
                        });
                        return;
                    case 'right':
                        this.smoothlyMove({
                            start: moveBy,
                            end: moveBy
                        });
                        return;
                }
            }
        }

        // Event event listeners (haha)
        for (const e of this.events) {
            if (this.inCoords(e.x, e.y, e.width, e.height, this.mouseX, this.mouseY)) {
                this.selectEvent(e);
                return;
            }
        }
    }

    hoverEvent=(mouseEvent: any)=>{ //update mouseX and mouseY coordinates
        this.mouseX=mouseEvent.offsetX;
        this.mouseY=mouseEvent.offsetY;
    }

    wheelEvent(e: WheelEvent) { //zooming
        console.log('Scroll event', e);
        console.log('Scrolling into', e.offsetX, e.offsetY);
        
        // e.deltaX controls position moving left-right
        // e.deltaY controls zoom
    }

    // # Helpers
    // ## Rendering Helpers
    smoothlyMove=(changeBy: { start: number; end: number })=>{
        return new Promise<void>((resolve, reject)=>{
            const duration=250;

            const animate=(()=>{ //clojure for internal state variables below
                const initialStart=this.start;
                const initialEnd=this.end;
                let startingTimestamp=-1;
    
                const innerAnimate=(timestamp: number)=>{ //called every frame
                    if (startingTimestamp===-1 && timestamp===-1) return window.requestAnimationFrame(innerAnimate); //not ready yet
                    
                    if (startingTimestamp===-1 && timestamp!==-1) //make ready by starting timer
                        startingTimestamp=timestamp;

                    const timePassed=timestamp-startingTimestamp;
                    const progress=timePassed/duration; //0 to 1
    
                    if (progress>=1) return resolve(); //finished
    
                    this.start=initialStart+changeBy.start*progress;
                    this.end=  initialEnd+  changeBy.end  *progress;
    
                    return window.requestAnimationFrame(innerAnimate);
                };
                return innerAnimate;
            })();
    
            animate(-1);
        });
    }

    selectEvent(e: eventPositionT) {
        for (const event of this.events) //deselect any other event
            event.isSelected=false;

        e.isSelected=true;
        console.log('Selecting event', e)
        this.eventEl.classList.remove('hidden');
        this.eventEl.style.backgroundColor=e.color;
        this.eventEl.style.color=blackOrWhiteTextColor(e.color);
        (this.eventEl.querySelector('.date-string') as HTMLParagraphElement).innerText=e.dateString;
        (this.eventEl.querySelector('.title') as HTMLParagraphElement).innerText=e.title;
        (this.eventEl.querySelector('.description') as HTMLParagraphElement).innerHTML=e.note || '';
    }
    

    // ## Other Helpers
    forEachYear=(cb: (obj: forEachYearProps)=>void)=>{
        const { yearSpan }=this.getVars();
    
        const roundStart=Math.ceil(this.start); //cannot start at 2006.5, but 2007
        const roundEnd=Math.floor(this.end);
    
        for (let year=roundStart; year<=roundEnd; year++) {
            const offset=year-this.start;
            cb({ year, offset, yearSpan });
        }
    }

    year2X(year: year): number { //get the x offset from left of canvas of a date or year
        const { yearSpan }=this.getVars();
        const offset=year-this.start; //offset from start in years
        return offset*yearSpan;
    }

    x2Year(x: number): number { //turn x offset into year float
        return 0; //not implemented yet but might not be needed
    }
    
    getVars: ()=>{ //returns variables that should not be set through this.var=
                   //const { c, h, s }=this.getVars(); is a way of importing necessary variables like libraries
        canvasEl: HTMLCanvasElement;
        c: CanvasRenderingContext2D;

        w: number;
        h: number;
        leftOffset: number;
        rightOffset: number;
        timelineBottom: number;

        clear: ()=>void;
        s: (n: number)=>string;
        yearSpan: number;
    }=()=>{
        const canvasEl=this.canvasEl;
        const c=this.c;

        const w=canvasEl.width;
        const h=canvasEl.height;
        const leftOffset=this.xPadding;
        const rightOffset=w-2*leftOffset;
        const timelineBottom=h-50;

        const span=rightOffset-leftOffset; //span of entire timeline line
        const yearSpan=Math.floor(span/(this.end-this.start)); //width per year

        return {
            canvasEl,
            c, w, h, leftOffset, rightOffset, timelineBottom,
            clear: ()=>c.clearRect(0, 0, w, h),
            s: (n: number)=>Math.floor(n).toString(), //round and toString
            yearSpan
        };
    }
}

