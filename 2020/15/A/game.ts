// export interface TimeTuple {
//   // Time stamp of the last time number was used
//   time: number;
//   // Time stamp of the time before that the number was used
//   since: number;
// }

// TimeTuple represents a tuple of the last two previous times the number was
// used. [0]: The latest time. [1]: The last time before that
export type TimeTuple = [number, number];

/**
 * Game class represents one instance of playing the Elvs' Memory Game.
 *
 * It is initialized with a set of starting numbers. It can read announce the
 * next number in the game sequence.
 */
export class Game {
  private time = 0;
  // Mapping of numbers to the game time they were last spoken
  private memory: {[num: number]: TimeTuple} = {};

  public constructor(inputs: number[]) {
    inputs.forEach((num) => this.speak(num));
  }

  public getTime(): number {
    return this.time;
  }

  /** Returns the number of turns since the given number was spoken */
  public timeSince(num: number): number {
    const tuple = this.memory[num];

    if (!tuple) {
      console.error(
          'Unexpectedly requesting the time since a number never spoken');
    }
    return tuple[0] - tuple[1];
  }

  /** Speaks a given number, advancing game time and recording it in memory */
  public speak(num: number): void {
    this.time++;
    const tuple = this.memory[num];
    if (!tuple) {
      this.memory[num] = [this.time, this.time];
    } else {
      this.memory[num] = [this.time, tuple[0]];
    }
    return;
  }
}
