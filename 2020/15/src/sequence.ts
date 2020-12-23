import {Game} from './game';

export class Sequence {
  private game: Game;
  private lastNum: number;

  public constructor(input: number[]) {
    this.game = new Game(input);
    this.lastNum = input.pop();
  }

  public getStep(): number {
    return this.game.getTime();
  }

  public next(): number {
    const timeSince = this.game.timeSince(this.lastNum);
    // console.log(`Time: ${this.game.getTime()}, Last Number: ${this.lastNum},
    // Speak:
    // ${timeSince}`);
    this.game.speak(timeSince);
    this.lastNum = timeSince;
    return this.lastNum;
  }
}
