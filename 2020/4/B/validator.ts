import {Passport, PassportValidator} from '../src/passport/model';

/**
 * validate returns true if a given passport is valid (has all required fields).
 *
 * 'cid' is optional. As per the question prompt.
 * This is specifically the implementation for PartA.
 */
export const validate: PassportValidator = (passport: Passport): boolean => {
  if (passport.byr === undefined || passport.iyr === undefined ||
      passport.eyr === undefined || passport.hgt === undefined ||
      passport.hcl === undefined || passport.ecl === undefined ||
      passport.pid === undefined) {
    return false;
  }

  return true;
}
