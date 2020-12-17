import * as fs from 'fs';
import * as readline from 'readline';

import {Password, PasswordPolicy} from './src/models';
import {parsePasswordAndPolicy} from './src/passwordParser';

// Read all lines from input file as numbers into the `inputs` array
const inputs: Array<[PasswordPolicy, Password]> = [];
const reader = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

reader.on('line', (line) => {
  inputs.push(parsePasswordAndPolicy(line));
});

reader.on('close', () => {
  // const result = computeResult(inputs);
  // console.log(result);
  return;
});
