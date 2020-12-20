/** Dir represents a cardinal direction. */
export enum Dir {
  North = 0,
  East,
  South,
  West,
}

/** Mapping of Dir enum values to command strings */
export const DirectionCommands: {[direction in Dir]: string} = {
  0: 'N',
  1: 'E',
  2: 'S',
  3: 'W'
}

/** Mapping of Dir enum values to display labels */
export const DirectionLabels: {[direction in Dir]: string} = {
  0: 'North',
  1: 'East',
  2: 'South',
  3: 'West'
}

/** Position type represents an [X,Y] tuple. */
export type Position = [number, number];

/** Rules objects provides a mapping of `cmd` strings to update functions. */
export type Rules = {
  [cmd: string]: (this: Ferry, magnitude: number) => void,
};

/**
 * Ferry class represents a ferry boat crossing the water in a storm. It
 * remembers its position and orientation and can execute movement instructions.
 *
 * Position is denoted relative to a cartisian origin.
 * - North points "up" on the grid, corresponding to positive Y.
 * - East points "right" on the grid, corresponding to positive X.
 * - South points "down" on the grid, corresponding to negative Y.
 * - West points "left" on the grid, corresponding to negative X.
 */
export class Ferry {
  protected orientation: Dir;
  protected position: Position;
  private rules: Rules;

  public constructor(position: Position, direction: Dir, rules: Rules) {
    this.position = [position[0], position[1]];
    this.orientation = direction;
    this.rules = rules;
  }

  public getDirection(): Dir {
    return this.orientation;
  }

  public getPosition(): Position {
    return this.position;
  }

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
