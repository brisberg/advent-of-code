import {Passport, PassportValidator} from '../src/passport/model';

/** Valid Eye color codes */
export const EYE_COLORS = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

/**
 * validate returns true if a given passport is valid (has all required fields).
 *
 * 'cid' is optional. As per the question prompt.
 * This is specifically the implementation for PartA.
 */
export const validate: PassportValidator = (passport: Passport): boolean => {
  // Birth Year
  const byr = passport.byr;
  if (!byr || byr === NaN || byr < 1920 || byr > 2002) {
    return false;
  }

  // Issue Year
  const iyr = passport.iyr;
  if (!iyr || iyr === NaN || iyr < 2010 || iyr > 2020) {
    return false;
  }

  // Expiration Year
  const eyr = passport.eyr;
  if (!eyr || eyr === NaN || eyr < 2020 || eyr > 2030) {
    return false;
  }

  // Height
  const hgt = passport.hgt;
  if (!hgt) {
    return false;
  }
  const suffix = hgt.substr(-2);
  if (suffix !== 'in' && suffix !== 'cm') {
    return false;
  }
  const height = parseInt(hgt.substring(0, hgt.length - 2));
  if (height === NaN) {
    return false;
  }
  if (suffix === 'in' && (height < 59 || height > 76)) {
    return false;
  }
  if (suffix === 'cm' && (height < 150 || height > 193)) {
    return false;
  }

  // Hair Color
  const hcl = passport.hcl;
  if (!hcl || !hcl.match(/#[0-9a-f]{6}$/)) {
    return false;
  }

  // Eye Color
  const ecl = passport.ecl;
  if (!ecl) {
    return false;
  }
  if (EYE_COLORS.findIndex((color) => ecl === color) === -1) {
    return false;
  }

  // Passport ID
  const pid = passport.pid;
  if (!pid) {
    return false;
  }
  if (pid.length !== 9 || parseInt(pid) === NaN) {
    return false;
  }

  return true;
}
