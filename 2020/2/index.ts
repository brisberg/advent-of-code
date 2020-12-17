import * as fs from 'fs';
import * as readline from 'readline';

import {processPasswords} from './src/processPasswords';
import {validatePasswordA, validatePasswordB} from './src/validators';

// Read all lines from input file as numbers into the `inputs` array
const inputs: string[] = [];
const reader = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

reader.on('line', (line) => {
  inputs.push(line);
});

reader.on('close', () => {
  const resultA = processPasswords(inputs, validatePasswordA);
  console.log(`Part A: Using min-max policies: ${resultA} / ${
      inputs.length} passwords are valid.`);

  const resultB = processPasswords(inputs, validatePasswordB);
  console.log(`Part B: Using positional policies: ${resultB} / ${
      inputs.length} passwords are valid.`);
  return;
});
