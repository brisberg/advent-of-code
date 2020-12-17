/**
 * ProcessPasswords package includes the algorithm for the main solution to
 * problem 2A. Take a set of strings, parses Password and Policy tuples, and
 * count the valid passwords.
 */

import {Password, PasswordPolicy} from './models';
import {parsePasswordAndPolicy} from './passwordParser';
import {validatePassword} from './validatePassword';

export function processPasswords(inputs: string[]): number {
  let count = 0;

  for (const input of inputs) {
    const [policy, password] = parsePasswordAndPolicy(input);
    if (validatePassword(password, policy)) {
      count++;
    }
  }

  return count;
}
