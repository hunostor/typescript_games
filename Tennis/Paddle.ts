import { Shape } from "./Shape";
import { IPoint } from "./IPoint";
import { Mouse } from "./Mouse";

export class Paddle extends Shape {
  MouseMove(mouse: Mouse, event: MouseEvent): void {
    var mousePos: IPoint = mouse.CurrentPosition(event);
    this.Positon({ x: this.position.x, y: mousePos.y });
  }
}
