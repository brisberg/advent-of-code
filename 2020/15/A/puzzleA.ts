import {Game} from './game';

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
  const game = new Game(input);

  let lastNum = input[input.length - 1];
  while (game.getTime() < 2020) {
    // console.log(`Time: ${game.getTime()}, Number Spoken: ${lastNum}`);
    const timeSince = game.timeSince(lastNum);
    // console.log(`Time: ${game.getTime()}, Last Number: ${lastNum}, Speak: ${
    //     timeSince}`);
    game.speak(timeSince);
    lastNum = timeSince;
  }

  console.log(
      `After ${game.getTime()} steps, the last number spoken was ${lastNum}.`)
  return lastNum;
}
