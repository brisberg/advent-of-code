import {Dir, DirectionLabels, Ferry} from '../src/ferry';
import {manhattenDistance} from '../src/manhatten-distance';
import {PartARules} from './rules';

/**
 * Specialized PuzzleFunction for Puzzle 12.A.
 *
 * Sets up a Ferry simulation, feeds it all the instructions, and reports the
 * manhatten distance traveled.
 */
export function puzzleA(inputs: string[]): number {
  const ferry = new Ferry([0, 0], Dir.East, PartARules);

  for (const instruction of inputs) {
    ferry.execute(instruction);
  }

  const position = ferry.getPosition();
  const direction = ferry.getDirection();
  console.log(`After executing all commands, the Ferry is at ${position[0]}, ${
      position[1]} facing ${DirectionLabels[direction]}.`);
  return manhattenDistance(position);
}
