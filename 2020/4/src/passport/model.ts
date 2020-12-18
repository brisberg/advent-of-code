/** Passport interface is the type structure of Passport Information */
export interface Passport {
  byr?: number;  // (Birth Year)
  iyr?: number;  // (Issue Year)
  eyr?: number;  // (Expiration Year)
  hgt?: string;  // (Height)
  hcl?: string;  // (Hair Color)
  ecl?: string;  // (Eye Color)
  pid?: string;  // (Passport ID)
  cid?: number;  // (Country ID) Optional to be valid
}

/**
 * PassportValidator is the typedef for a validator function. Returns true if
 * the given passport passes all validation rules.
 */
export type PassportValidator = (passport: Passport) => boolean;
