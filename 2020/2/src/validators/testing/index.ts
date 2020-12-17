import {Password, Policy} from '../../password';

/** TestCase of the form [name, TestOptions] */
export type TestCase = [string, ValidatorTestCase];

/** Specific Test options for Validator Test Cases */
export interface ValidatorTestCase {
  password: Password;
  policy: Policy;
  result: boolean;
}
