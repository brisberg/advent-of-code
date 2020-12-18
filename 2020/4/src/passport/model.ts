/** Passport interface is the type structure of Passport Information */
export interface Passport {
  byr?: number;  // (Birth Year)
  iyr?: number;  // (Issue Year)
  eyr?: number;  // (Expiration Year)
  hgt?: string;  // (Height)
  hcl?: string;  // (Hair Color)
  ecl?: string;  // (Eye Color)
  pid?: number;  // (Passport ID) Optional to be valid
  cid?: number;  // (Country ID)
}
