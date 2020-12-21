export type DirectionLabels = 'North'|'East'|'West'|'South';
export type Dirs = 'N'|'E'|'S'|'W';
export type Commands = 'R'|'L'|'F'|Dirs;

/** Mapping of command Direction codes to direction offsets */
export const DirCoords: {[label in Dirs]: Position} = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
}

/** Mapping of Human Readable identifiers to direction offsets */
export const Directions: {[label in DirectionLabels]: Position} = {
  North: DirCoords.N,
  East: DirCoords.E,
  South: DirCoords.S,
  West: DirCoords.W,
}

/** Position type represents an [X,Y] tuple. */
export type Position = [number, number];

/** Rules objects provides a mapping of `cmd` strings to update functions. */
export type Rules = {
  [cmd in Commands]: (this: Ferry, magnitude: number) => void;
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
  // Current position of the ferry (relative to origin)
  protected position: Position;
  // Current position of waypoint (relative to ferry)
  protected waypoint: Position;
  private rules: Rules;

  public constructor(position: Position, waypoint: Position, rules: Rules) {
    this.position = [position[0], position[1]];
    this.waypoint = waypoint;
    this.rules = rules;
  }

  public getDirection(): Position {
    return this.waypoint;
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
