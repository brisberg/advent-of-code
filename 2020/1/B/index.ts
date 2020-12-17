import * as fs from 'fs';
import * as readline from 'readline';
import {computeResult} from './puzzleB';

// Read all lines from input file as numbers into the `inputs` array
const inputs: number[] = [];
const reader = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

reader.on('line', (line) => {
  inputs.push(parseInt(line));
});

reader.on('close', () => {
  const result = computeResult(inputs);
  console.log(result);
});
