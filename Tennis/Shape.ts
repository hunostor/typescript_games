import { Context } from './context';

export class Shape {
  x: number = 0;
  y: number = 0;
  width: number;
  height: number;
  speed: number = 0;
  fill: string;
  context: Context

  constructor(width: number, height: number, fill: string, ctx: Context) {
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.context = ctx;
  }

  Positon(x: number, y: number): void {
    this.x = x; this.y = y;
  }

  Move(speedX: number = 0, speedY: number = 0): void {
    this.x = this.x + speedX;
    this.y = this.y + speedY;
    this.Draw();
  }

  Draw(): void {
    this.context._2d.fillStyle = this.fill;
    this.context._2d.fillRect(this.x, this.y, this.width, this.height);
  }
}
