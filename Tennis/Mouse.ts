import { Context, Canvas } from "./context";
import { IPoint } from "./IPoint";

export class Mouse {
  canvas: Canvas;

  constructor(canvas: Canvas) {
    this.canvas = canvas;
  }

  CurrentPosition(event: MouseEvent): IPoint {
    var rect: ClientRect | DOMRect = this.canvas.element.getBoundingClientRect();
    var root: HTMLElement = document.documentElement;
    var mouseX = event.clientX - rect.left - root.scrollLeft;
    var mouseY = event.clientY - rect.top - root.scrollTop;
    return {x: mouseX, y: mouseY};
  }
}
