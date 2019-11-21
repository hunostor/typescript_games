import { Context } from './context';
import { IPoint } from './IPoint';
import { ISpeed } from './ISpeed';

export class Shape {
  position: IPoint;
  width: number;
  height: number;
  speed: ISpeed;
  fill: string;
  context: Context

  constructor(width: number, height: number, fill: string, ctx: Context) {
    this.position = {x: 0, y: 0};
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.context = ctx;
  }

  Positon(position: IPoint): void {
    this.position.x = position.x; this.position.y = position.y;
  }

  Move(speed: ISpeed = null): void {
    if(speed !== null) {
      this.speed = speed;
    }
    this.position.x = this.position.x + this.speed.SpeedX;
    this.position.y = this.position.y + this.speed.SpeedY;
    this.Draw();
  }

  Draw(): void {
    this.context._2d.fillStyle = this.fill;
    this.context._2d.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  Reset(): void {
    console.log("reset");
    //this.Move(-this.position.x, -this.position.y)
    this.position.x = this.context.canvas.width / 2;
    this.position.y = this.context.canvas.height / 2;
  }
}
