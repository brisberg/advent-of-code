import {findInvalidValue} from '../src/findInvalidValue';

/**
 * Specialized PuzzleFunction for Puzzle 9.A.
 *
 * Read all coded values, parse them as integers, pass them one by one to a Code
 * Reader instance. Break when the Code Reader reports an Invalid value, return
 * it.
 */
export function puzzleA(inputs: string[]): number {
  const result = findInvalidValue(inputs, 25);

  return result[0] || 0;
}
