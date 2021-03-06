import {Sequence} from '../src/sequence';

/**
 * Specialized PuzzleFunction for Puzzle 15.A.
 *
 * Initialize a Game with the initial inputs. Repeatedly consider the last
 * number based on the puzzle rules. Report the 2020th number in the sequence.
 */
export function puzzleA(inputs: string[]): number {
  if (inputs.length !== 1) {
    throw new Error(
        'Malformed Input. Must be a single line of comma-separated numbers.');
  }

  const input = inputs[0].split(',').map((n) => parseInt(n));
  const sequence = new Sequence(input);

  let result: number
  for (let i = input.length + 1; i < 2020; i++) {
    result = sequence.next();
  }

  console.log(`After ${sequence.getStep()} steps, the last number spoken was ${
      result}.`)
  return result;
}
