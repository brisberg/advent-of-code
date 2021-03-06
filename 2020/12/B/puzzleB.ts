import {Directions, Ferry} from '../src/ferry';
import {manhattenDistance} from '../src/manhatten-distance';
import {PartBRules} from './rules';

/**
 * Specialized PuzzleFunction for Puzzle 12.B.
 *
 * Sets up a Ferry simulation (using rules from part B), feeds it all the
 * instructions, and reports the manhatten distance traveled.
 */
export function puzzleB(inputs: string[]): number {
  const ferry = new Ferry([0, 0], [10, 1], PartBRules);

  for (const instruction of inputs) {
    ferry.execute(instruction);
  }

  const position = ferry.getPosition();
  const direction = ferry.getDirection();
  console.log(`After executing all commands, the Ferry is at ${position[0]}, ${
      position[1]} facing ${direction}.`);
  return manhattenDistance(position);
}
