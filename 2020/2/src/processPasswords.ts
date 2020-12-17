/**
 * ProcessPasswords package includes the algorithm for the main solution to
 * problem 2A. Take a set of strings, parses Password and Policy tuples, and
 * count the valid passwords.
 */

import {parsePasswordAndPolicy, Validator} from './password';

export function processPasswords(
    inputs: string[], validator: Validator): number {
  let count = 0;

  for (const input of inputs) {
    const [policy, password] = parsePasswordAndPolicy(input);
    if (validator(password, policy)) {
      count++;
    }
  }

  return count;
}
