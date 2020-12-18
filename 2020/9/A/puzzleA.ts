import {CodeReader, DecodeResult} from '../src/code-reader';

/**
 * Specialized PuzzleFunction for Puzzle 9.A.
 *
 * Read all coded values, parse them as integers, pass them one by one to a Code
 * Reader instance. Break when the Code Reader reports an Invalid value, return
 * it.
 */
export function puzzleA(inputs: string[]): number {
  return findInvalidValue(inputs, 25);
}

/** Generalized solver which takes a variable premable size */
export function findInvalidValue(inputs: string[], preambleSize: number) {
  const reader = new CodeReader(preambleSize);

  for (let i = 0; i < inputs.length; i++) {
    const value = parseInt(inputs[i]);
    const result = reader.decode(value);

    if (result === DecodeResult.INVALID) {
      console.log(`First invalid value: ${value}`);
      return value;
    }
  }
}
