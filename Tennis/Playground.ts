import { Context } from "./context";
import { Shape } from "./Shape";
import { ISpeed } from "./ISpeed";

export class Playground {
    shapeList: Shape[] = [];


    constructor(private context: Context) {}

    AddShape(shape: Shape): void {
        this.shapeList.push(shape);
    }

    CrasNotify(): void {
        for(let shape of this.shapeList) {
            this.crash(shape);
        }
    }
    

    private crash(shape: Shape) {
        this.crashRightWall(shape);
        this.crashFloor(shape);
        this.crashLeftWall(shape);        
        this.crashTop(shape);
    }

    private noCrash(shape: Shape): ISpeed {
        return { SpeedX: shape.speed.SpeedX, SpeedY: shape.speed.SpeedY };
    }

    private crashRightWall(shape): void {
        if(shape.position.x >= this.context.canvas.width) {
            shape.Move({ SpeedX: -shape.speed.SpeedX , SpeedY: shape.speed.SpeedY });
          }
    }

    private crashLeftWall(shape: Shape): void {
        if(shape.position.x <= 0) {
            shape.Move({ SpeedX: -shape.speed.SpeedX , SpeedY: shape.speed.SpeedY });
            //shape.Reset();
        }
    }

    private crashFloor(shape: Shape) {
        if(shape.position.y >= this.context.canvas.height) {
            shape.Move( { SpeedX: shape.speed.SpeedX, SpeedY: -shape.speed.SpeedY } );
        }
    }

    private crashTop(shape: Shape) {
        if(shape.position.y <= 0) {
            shape.Move({ SpeedX: shape.speed.SpeedX, SpeedY: -shape.speed.SpeedY });
        }
    }
}
