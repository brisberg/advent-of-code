import {findInvalidValue} from '../src/findInvalidValue';
import {findRangeForSum} from '../src/findRangeForSum';

/**
 * Specialized PuzzleFunction for Puzzle 9.B.
 */
export function puzzleB(inputs: string[]): number {
  return puzzleBSolver(inputs, 25);
}

/**
 * Generalized PuzzleB solver which can take any preamble size.
 *
 * Read all coded values, parse them as integers, pass them one by one to a Code
 * Reader instance. Break when the Code Reader reports an Invalid value.
 *
 * Iterate through the list of Keys left in the Decoder and look for a range of
 * values which sum to the invalid number. Return the sum of the first and last
 * numbers in this range.
 */
export function puzzleBSolver(inputs: string[], preambleSize: number): number {
  const [target] = findInvalidValue(inputs, preambleSize);

  const range = findRangeForSum(inputs.map((v) => parseInt(v)), target);

  if (!range) {
    throw new Error(
        `No continuious range could be found with a sum of ${target}`);
  }

  // Found the range, return the sum of the largest and smallest values
  let smallest = Infinity;
  let largest = 0;
  range.forEach((value) => {
    if (smallest > value) {
      smallest = value;
    }
    if (largest < value) {
      largest = value;
    }
  })

  const sum = smallest + largest;
  console.log(`Range of values which sum to ${target}:\n${range}\n\nSmallest (${
      smallest}) + Largest (${largest}) = ${sum}`)
  return smallest + largest;
}
