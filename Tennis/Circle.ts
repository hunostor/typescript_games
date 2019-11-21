import { Shape } from "./Shape";

export class Circle extends Shape {
  Draw(): void {
    this.context._2d.fillStyle = this.fill;
    this.context._2d.beginPath();
    this.context._2d.arc(this.position.x, this.position.y, 10, 0, Math.PI*2, true);
    this.context._2d.fill();
  }
}
