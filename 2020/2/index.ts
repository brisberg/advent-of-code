import * as fs from 'fs';
import * as readline from 'readline';

import {processPasswords} from './src/processPasswords';

// Read all lines from input file as numbers into the `inputs` array
const inputs: string[] = [];
const reader = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

reader.on('line', (line) => {
  inputs.push(line);
});

reader.on('close', () => {
  const result = processPasswords(inputs);
  console.log(result);
  return;
});
