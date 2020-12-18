import {Passport} from './model';

/** parse takes string a parses it into a Passport object */
export function parse(input: string): Passport {
  const passport: Passport = {};
  const parts = input.split(' ');

  parts.forEach((part) => {
    const segments = part.split(':');

    if (segments.length !== 2) {
      // Error?
      return;
    }

    const [key, value] = segments;

    switch (key) {
      case 'byr':
        passport.byr = parseInt(value);
        break;
      case 'iyr':
        passport.iyr = parseInt(value);
        break;
      case 'eyr':
        passport.eyr = parseInt(value);
        break;
      case 'hgt':
        passport.hgt = value;
        break;
      case 'hcl':
        passport.hcl = value;
        break;
      case 'ecl':
        passport.ecl = value;
        break;
      case 'pid':
        passport.pid = value;
        break;
      case 'cid':
        passport.cid = parseInt(value);
        break;

      default:
        // Error about unknown field?
        break;
    }
  })

  return passport;
}
