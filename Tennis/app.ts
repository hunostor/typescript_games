import { Shape } from "./Shape";
import { Context, Canvas } from "./context";
import { Circle } from "./Circle";
import { Mouse } from "./Mouse";
import { IPoint } from "./IPoint";
import { ScreenText } from "./ScreenText";
import { Player } from "./Player";
import { Playground } from "./Playground";

const cl = console.log;

if(false) {
  console.log = () => {};
}

const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 20;

let player1 = new Player(0);
let player2 = new Player(0);

const WINNING_SCORE = 3;

var ballX: number = 100;
var ballSpeedX: number = 8;
var ballY: number = 100;
var ballSpeedY: number = 4;

const canvas = new Canvas("gameCanvas", 800, 600);
let context = new Context(canvas);
let mouse = new Mouse(canvas);

function calculateMousePosition(evt: any): {x: number, y: number} {
  var rect: ClientRect | DOMRect = canvas.element.getBoundingClientRect();
  var root: HTMLElement = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {x: mouseX, y: mouseY};
}

var paddle1Y = 200;
var paddle2Y = 200;

let playgrund = new Playground(context);

let player1Score = new ScreenText(player1.ScoreGet().toString(), { x: 100, y: 100 }, context);
let player2Score = new ScreenText(player2.ScoreGet().toString(), { x: canvas.width - 100, y: 100}, context);

window.onload = function() {
  

  let rectagle = new Shape(10, 10, "white", context);
  rectagle.Positon({ x: ballX, y: 200 });

  let ball = new Circle(10, 10, "red", context);
  ball.Positon({ x: 0, y: 150 });
  ball.Move({ SpeedX: ballSpeedX, SpeedY: ballSpeedY });

  playgrund.AddShape(ball);

  var framesPerSecond: number = 30;
  setInterval(function() {
    drawEverything(canvas, context, ball);
    //playgrund.CrasNotify();
    moveEverything(canvas, ball);
  }, 1000 / framesPerSecond);

  canvas.element.addEventListener("mousemove", (event: MouseEvent) => {
    var mousePos: IPoint = mouse.CurrentPosition(event);
    paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
  })
}

function computerMovement(ball: Shape) {
  var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
  if(paddle2YCenter < ball.position.y -35) {
    paddle2Y += 6;
  }
  else if(paddle2YCenter > ball.position.y +35) {
    paddle2Y -= 6;
  }
}

function moveEverything(canvas: Canvas, ball: Shape): void {
  computerMovement(ball);

  if(ball.position.x >= canvas.width) {
    if(ball.position.y > paddle2Y && ball.position.y < paddle2Y + PADDLE_HEIGHT) {
      //ball.Move({ SpeedX: -ball.speed.SpeedX , SpeedY: ball.speed.SpeedY });
      var deltaY = ball.position.y - ( paddle2Y + PADDLE_HEIGHT/2 );
      ball.Move({ SpeedX: -ball.speed.SpeedX , SpeedY: deltaY * 0.3 });
    }
    else
    {
      player1.ScoreAdd(1);
      player1.ScoreReset(4);
      ball.Reset();
    }
  }

  if(ball.position.x <= 0) {
    if(ball.position.y > paddle1Y && ball.position.y < paddle1Y + PADDLE_HEIGHT) {
      //ball.Move({ SpeedX: -ball.speed.SpeedX , SpeedY: ball.speed.SpeedY });
      var deltaY = ball.position.y - ( paddle1Y + PADDLE_HEIGHT/2 );
      ball.Move({ SpeedX: -ball.speed.SpeedX , SpeedY: deltaY * 0.3 });
    }
    else
    {
      player2.ScoreAdd(1);
      player2.ScoreReset(4);
      ball.Reset();
    }
  }

  if(ball.position.y >= canvas.height) {
    ball.Move({ SpeedX: ball.speed.SpeedX, SpeedY: -ball.speed.SpeedY });
  }

  if(ball.position.y <= 0) {
    ball.Move({ SpeedX: ball.speed.SpeedX, SpeedY: -ball.speed.SpeedY });
  }
}


function drawEverything(canvas: Canvas, context: Context, ball: Shape): void {
  const background = new Shape(canvas.width, canvas.height, "black", context);
  background.Draw();

  // this is player paddle
  let paddleLeft = new Shape(PADDLE_THICKNESS, PADDLE_HEIGHT, "red", context);
  paddleLeft.Positon({ x: 0, y: paddle1Y });
  paddleLeft.Draw();

  // this is computer paddle
  let paddleRight = new Shape(PADDLE_THICKNESS, PADDLE_HEIGHT, "red", context);
  paddleRight.Positon({ x: canvas.width - PADDLE_THICKNESS, y: paddle2Y });
  paddleRight.Draw();

  // player score
  let player1Score = new ScreenText(player1.ScoreGet().toString() + " pont", { x: 100, y: 100 }, context);
  let player2Score = new ScreenText(player2.ScoreGet().toString() + " pont", { x: canvas.width - 100, y: 100}, context);

  player1Score.Draw();
  player2Score.Draw();

  // ball
  ball.Move();
}
