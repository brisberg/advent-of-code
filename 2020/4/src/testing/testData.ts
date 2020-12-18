import {Passport} from '../passport';

/** Typedef for a ValidatorTestCase */
export type ValidatorTestCase = [string, Passport, boolean];

/** Valid Passport for use in unit tests. */
export const validPassport: Passport = {
  byr: 1937,
  iyr: 2017,
  eyr: 2020,
  hgt: '183cm',
  hcl: '#fffffd',
  ecl: 'gry',
  pid: 860033327,
  cid: 147,
};
