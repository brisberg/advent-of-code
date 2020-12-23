import {Sequence} from '../src/sequence';

/**
 * Specialized PuzzleFunction for Puzzle 15.B.
 *
 * Initialize a Game with the initial inputs. Repeatedly consider the last
 * number based on the puzzle rules. Report the 30 millionth number in the
 * sequence.
 */
export function puzzleB(inputs: string[]): number {
  if (inputs.length !== 1) {
    throw new Error(
        'Malformed Input. Must be a single line of comma-separated numbers.');
  }

  const input = inputs[0].split(',').map((n) => parseInt(n));
  const sequence = new Sequence(input);

  let result: number
  for (let i = input.length + 1; i < 30000000; i++) {
    result = sequence.next();
  }

  console.log(`After ${sequence.getStep()} steps, the last number spoken was ${
      result}.`)
  return result;
}
