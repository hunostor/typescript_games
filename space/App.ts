import { Context } from "./src/Context";
import { Circle } from "./src/Shapes/Circle";

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
canvas = <HTMLCanvasElement>document.getElementById('cnvs');
ctx = canvas.getContext("2d");

let circle = new Circle(400, 400, 100, "red", 5, ctx);

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    circle.draw();
}

window.onload = () => {
    gameLoop();
}

// TODO: https://youtu.be/tE8BiBEWfO4?t=1212