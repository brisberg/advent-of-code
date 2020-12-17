import {Password, Policy} from '../password';

/**
 * Validator functions define the interface for functions which can validate a
 * password against a policy.
 */
export type Validator = (password: Password, policy: Policy) => boolean;
