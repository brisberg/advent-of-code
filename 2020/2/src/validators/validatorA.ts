/**
 * ValidatorA package contains logic for validating if a password meets a
 * PasswordPolicy criteria based on min-max rules from PartA.
 */

import {Password, Policy} from '../password';
import {Validator} from './models';

export const validatePasswordA: Validator =
    (password: Password, policy: Policy): boolean => {
      const count = password.split(policy.char).length - 1;

      if (count < policy.first || count > policy.second) {
        return false;
      }

      return true;
    }
