/** Dir represents a cardinal direction. */
export enum Dir {
  North = 0,
  East,
  South,
  West,
}

/** Position type represents an [X,Y] tuple. */
export type Position = [number, number];

/**
 * Ferry class represents a ferry boat crossing the water in a storm. It
 * remembers its position and orientation and can execute movement instructions.
 *
 * Position is denoted relative to a cartisian origin.
 * North points "up" on the grid, corresponding to positive Y.
 * East points "right" on the grid, corresponding to positive X.
 * South points "down" on the grid, corresponding to negative Y.
 * West points "left" on the grid, corresponding to negative X.
 */
export class Ferry {
  private orientation: Dir;
  private position: Position;

  public constructor(position: Position, direction: Dir) {
    this.position = [position[0], position[1]];
    this.orientation = direction;
  }

  public getDirection(): Dir {
    return this.orientation;
  }

  public getPosition(): Position {
    return this.position;
  }

  private rules: {[cmd: string]: (this: Ferry, magnitude: number) => void} = {
    'N': (dist: number) => this.position[1] += dist,
    'E': (dist: number) => this.position[0] += dist,
    'S': (dist: number) => this.position[1] -= dist,
    'W': (dist: number) => this.position[0] -= dist,
    'R':
        (degrees: number) => {
          const turns = Math.floor(degrees / 90);
          this.orientation = (this.orientation + turns) % 4;
        },
    'L':
        (degrees: number) => {
          const turns = Math.floor(degrees / 90);
          this.orientation = (this.orientation - turns + 4) % 4;
        },
    'F': (dist: number) =>
        this.rules[this.directionToLabel[this.orientation]].bind(this)(dist),
  };

  /** Private mapping of Dir enum balues to direction labels */
  private directionToLabel:
      {[dir: number]: string} = {0: 'N', 1: 'E', 2: 'S', 3: 'W'}

  /** Executes a single instruction to move the Ship */
  public execute(instruction: string): void {
    const cmd = instruction.charAt(0);
    const value = parseInt(instruction.substr(1));

    if (value === NaN) {
      throw new Error(`Malformed Instruction: ${instruction}`);
    }

    this.rules[cmd].bind(this)(value);
    return;
  }
}
