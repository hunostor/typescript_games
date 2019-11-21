export class Player {

    constructor(private score: number = 0) {
        this.score = score;
    }

    ScoreAdd(score: number): void {
        this.score += score;
    }

    ScoreGet(): number {
        return this.score;
    }

    ScoreReset(limit: number): void {
        if(this.score === limit) {
            this.score = 0;
        }
    }
}
