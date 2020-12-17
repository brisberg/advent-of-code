import * as fs from 'fs';
import * as readline from 'readline';

export type PuzzleFunction = (inputs: string[]) => number;

/**
 * executePuzzle takes a puzzle function and a path to the inputs file
 * (relative to the puzzle file) and reads the file into an array of strings and
 * executes the puzzle solution.
 */
export function executePuzzle(
    inputPath = './input.txt', puzzleFn: PuzzleFunction): void {
  // Read all lines from input file as numbers into the `inputs` array
  const inputs: string[] = [];
  const reader = readline.createInterface({
    input: fs.createReadStream(inputPath),
  });

  reader.on('line', (line) => {
    inputs.push(line);
  });

  reader.on('close', () => {
    const result = puzzleFn(inputs);
    console.log(result);
  });
}
