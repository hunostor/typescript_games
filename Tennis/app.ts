import { Shape } from "./Shape";
import { Context, Canvas } from "./context";
import { Circle } from "./Circle";

const cl = console.log;

if(false) {
  console.log = () => {};
}


var ballX: number = 100;
var ballSpeedX: number = 8;
var ballY: number = 100;
var ballSpeedY: number = 4;


window.onload = function() {
  const canvas = new Canvas("gameCanvas", 800, 600);
  let context = new Context(canvas);

  let rectagle = new Shape(10, 10, "white", context);
  rectagle.Positon(ballX, 200);

  let circle = new Circle(10, 10, "red", context);
  circle.Positon(0, 150);

  var framesPerSecond: number = 30;
  setInterval(function() {
    drawEverything(canvas, context, circle);
    boundary(canvas, circle);
  }, 1000 / framesPerSecond);

  cl('hello game world!');
}

function boundary(canvas: Canvas, shape: Shape): void {
  if(shape.x >= canvas.width) {
    ballSpeedX = -ballSpeedX
  }

  if(shape.y >= canvas.height) {
    ballSpeedY= -ballSpeedY;
  }

  if(shape.x <= 0) {
    ballSpeedX = -ballSpeedX;
  }

  if(shape.y <= 0) {
    ballSpeedY = -ballSpeedY;
  }
}


function drawEverything(canvas: Canvas, context: Context, shape: Shape): void {
  const black = new Shape(canvas.width, canvas.height, "black", context);
  black.Draw();
  const red = new Shape(20, 200, "red", context);
  red.Positon(0, 200)
  red.Draw();

  const white = new Shape(100, 200, "white", context);
  white.Positon(300, 420);
  white.Draw();

  shape.Move(ballSpeedX, ballSpeedY);
}
