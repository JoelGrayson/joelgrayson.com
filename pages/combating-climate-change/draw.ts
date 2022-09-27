export default function draw(c: CanvasRenderingContext2D, t: number) { //context and time
    console.log('drew')
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillRect(0, 0, t, 100)
}
