import { Context } from "./context";
import { IPoint } from "./IPoint";

export class ScreenText {
    text: string;
    context: Context;
    position: IPoint;

    constructor(text: string, position: IPoint, context: Context) {
        this.text = text;
        this.position = position;
        this.context = context;
    }

    Draw() {
        this.context._2d.fillText(this.text, this.position.x, this.position.y);
    }
}
