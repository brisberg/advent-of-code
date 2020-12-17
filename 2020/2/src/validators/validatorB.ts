/**
 * ValidatorB package contains logic for validating if a password meets a
 * PasswordPolicy criteria based on positional rules from PartB.
 */

import {Password, Policy} from '../password';
import {Validator} from './models';

export const validatePasswordB: Validator =
    (password: Password, policy: Policy): boolean => {
      if (password.charAt(policy.first - 1) !== policy.char) {
        return false;
      }

      if (password.charAt(policy.second - 1) !== policy.char) {
        return false;
      }

      return true;
    }
