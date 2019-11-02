export class Context {
  canvas: HTMLCanvasElement;
  _2d: CanvasRenderingContext2D;

  constructor(canvas: Canvas) {
    this._2d = canvas.element.getContext('2d');
  }
};

export class Canvas {
  element: HTMLCanvasElement;
  width: number;
  height: number;

  constructor(canvasID: string, canvasWidth: number, canvasHeight: number) {
    this.element = <HTMLCanvasElement>document.getElementById(canvasID);
    this.element.width = canvasWidth;
    this.element.height = canvasHeight;
    this.width = canvasWidth;
    this.height = canvasHeight;
  }
}