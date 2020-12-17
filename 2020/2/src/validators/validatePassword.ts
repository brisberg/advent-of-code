/**
 * ValidatePolicy package contains logic for validating if a password meets a
 * PasswordPolicy criteria.
 */

import {Password, Policy, Validator} from '../password';

export const validatePasswordA: Validator =
    (password: Password, policy: Policy): boolean => {
      const count = password.split(policy.char).length - 1;

      if (count < policy.first || count > policy.second) {
        return false;
      }

      return true;
    }
