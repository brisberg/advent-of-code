import {ValidatorTestCase, validPassport} from '../src/testing/testData';
import {validate} from './validator';

describe('Passport Validator A', () => {
  const testCases: ValidatorTestCase[] = [
    ['return true for full passports', validPassport, true],
    [
      'return false if missing byr field',
      {...validPassport, byr: undefined},
      false,
    ],
    [
      'return false if missing iyr field',
      {...validPassport, iyr: undefined},
      false,
    ],
    [
      'return false if missing eyr field',
      {...validPassport, eyr: undefined},
      false,
    ],
    [
      'return false if missing hgt field',
      {...validPassport, hgt: undefined},
      false,
    ],
    [
      'return false if missing hcl field',
      {...validPassport, hcl: undefined},
      false,
    ],
    [
      'return false if missing ecl field',
      {...validPassport, ecl: undefined},
      false,
    ],
    [
      'return false if missing optional pid field',
      {...validPassport, pid: undefined},
      false,
    ],
    [
      'return true if missing cid field',
      {...validPassport, cid: undefined},
      true,
    ],
  ];
  it.each(testCases)('should %s', (name, input, expected) => {
    expect(validate(input)).toStrictEqual(expected);
  });
});
