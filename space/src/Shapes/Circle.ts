import { Context } from "../Context";

export class Circle {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 15;
    public color: string = "red";
    

    constructor(
        x: number, 
        y: number, 
        radius: number,
        color: string = "red", 
        line_width: number = 2,
        private ctx: CanvasRenderingContext2D
        ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }

    public draw = (): void => {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color,
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.ctx.stroke();
        this.ctx.restore();
    }
}
