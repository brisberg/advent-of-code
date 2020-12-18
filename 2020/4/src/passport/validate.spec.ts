import {Passport} from './model';
import {validate} from './validate';

type ValidatorTestCase = [string, Passport, boolean];

const validPassport: Passport = {
  byr: 1937,
  iyr: 2017,
  eyr: 2020,
  hgt: '183cm',
  hcl: '#fffffd',
  ecl: 'gry',
  pid: 860033327,
  cid: 147,
};

describe('Passport Validator', () => {
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
      'return false if missing cid field',
      {...validPassport, cid: undefined},
      false,
    ],
    [
      'return true if missing optional pid field',
      {...validPassport, pid: undefined},
      true,
    ],
  ];
  it.each(testCases)('should %s', (name, test, expected) => {
    expect(validate(test)).toStrictEqual(expected);
  });
});
