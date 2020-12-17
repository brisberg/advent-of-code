/**
 * PasswordProcessor package includes the algorithm for the main solution to
 * problem 2A. Take a set of strings, parses Password and Policy tuples, and
 * count the valid passwords.
 */

import {PuzzleFunction} from '../../common/launcher';
import {parsePasswordAndPolicy} from './password';
import {Validator} from './validators';

/**
 * PasswordProcessor is a higher order function which returns a PuzzleFunction
 * with the appropriate validator in use.
 */
export function PasswordProcessor(validator: Validator): PuzzleFunction {
  return (inputs: string[]) => {
    let count = 0;

    for (const input of inputs) {
      const [policy, password] = parsePasswordAndPolicy(input);
      if (validator(password, policy)) {
        count++;
      }
    }

    console.log(`${count} / ${inputs.length} passwords are valid.`);
    return count;
  };
}
