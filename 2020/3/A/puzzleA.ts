import {calculateStruckTrees} from '../src/toboggan';

/** Specialized PuzzleFunction for PartA. Calculate for slope 3/1. */
export function puzzleA(inputs: string[]): number {
  return calculateStruckTrees(inputs, 3, 1);
}
