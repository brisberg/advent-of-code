/**
 * Password Parser package contains functions to parse raw text from the
 * database inputs into Password Policies and Passwords
 */

import {Password, Policy} from './models';

export function parsePasswordAndPolicy(input: string): [Policy, Password] {
  const parts = input.split(': ');

  if (parts.length !== 2) {
    throw new Error('Input Malformed: ": " delimiter missing.');
  }

  const password = parts[1];

  const regex = /([0-9]*)-([0-9]*) ([a-z])/
  const matches = parts[0].match(regex);
  const policy: Policy = {
    char: matches[3],
    first: parseInt(matches[1]),
    second: parseInt(matches[2]),
  };

  return [policy, password];
}
