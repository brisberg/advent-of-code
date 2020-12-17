/**
 * ValidatePolicy package contains logic for validating if a password meets a
 * PasswordPolicy criteria.
 */

import {Password, PasswordPolicy} from './models';

export function validatePassword(
    password: Password, policy: PasswordPolicy): boolean {
  const count = password.split(policy.char).length - 1;

  if (count < policy.min || count > policy.max) {
    return false;
  }

  return true;
}
