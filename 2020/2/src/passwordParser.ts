/**
 * Password Parser package contains functions to parse raw text from the
 * database inputs into Password Policies and Passwords
 */

import {Password, PasswordPolicy} from './models';

export function parsePasswordAndPolicy(input: string):
    [PasswordPolicy, Password] {
  const parts = input.split(': ');

  if (parts.length !== 2) {
    throw new Error('Input Malformed: ": " delimiter missing.');
  }

  const password = parts[1];

  const regex = /([0-9]*)-([0-9]*) ([a-z])/
  const matches = parts[0].match(regex);
  const policy: PasswordPolicy = {
    char: matches[3],
    min: parseInt(matches[1]),
    max: parseInt(matches[2]),
  };

  return [policy, password];
}
