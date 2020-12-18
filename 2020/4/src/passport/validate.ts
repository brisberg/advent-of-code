import {Passport} from './model';

/**
 * validate return true if a given passport is valid (has all required fields).
 *
 * 'cid' is optional. As per the question prompt.
 */
export function validate(passport: Passport): boolean {
  if (passport.byr === undefined || passport.iyr === undefined ||
      passport.eyr === undefined || passport.hgt === undefined ||
      passport.hcl === undefined || passport.ecl === undefined ||
      passport.pid === undefined) {
    return false;
  }

  return true;
}
