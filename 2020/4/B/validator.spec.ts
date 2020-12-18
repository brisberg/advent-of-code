import {ValidatorTestCase, validPassport} from '../src/testing/testData';

import {EYE_COLORS, validate} from './validator';

describe('Passport Validator', () => {
  it('should return true for full passports', () => {
    expect(validate(validPassport)).toBeTruthy();
  });

  it('should return true for valid passports missing "cid"', () => {
    const input = {...validPassport, cid: undefined};
    expect(validate(validPassport)).toBeTruthy();
  })

  describe('Birth year field', () => {
    const testCases: ValidatorTestCase[] = [
      [
        'return true birth years between 1920 and 2002',
        {...validPassport, byr: 2000},
        true,
      ],
      [
        'return false birth years before 1920',
        {...validPassport, byr: 1919},
        false,
      ],
      [
        'return false birth years after 2002',
        {...validPassport, byr: 2003},
        false,
      ],
    ];
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });

  describe('Issue year field', () => {
    const testCases: ValidatorTestCase[] = [
      [
        'return true issue years between 2010 and 2020',
        {...validPassport, iyr: 2021},
        true,
      ],
      [
        'return false issue years before 2010',
        {...validPassport, iyr: 2009},
        false,
      ],
      [
        'return false issue years after 2020',
        {...validPassport, iyr: 2015},
        false,
      ],
    ];
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });

  describe('Expiration year field', () => {
    const testCases: ValidatorTestCase[] = [
      [
        'return true expiration years between 2020 and 2030',
        {...validPassport, eyr: 2025},
        true,
      ],
      [
        'return false expiration years before 2020',
        {...validPassport, eyr: 2019},
        false,
      ],
      [
        'return false expiration years after 2030',
        {...validPassport, eyr: 2031},
        false,
      ],
    ];
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });

  describe('Height field', () => {
    const testCases: ValidatorTestCase[] = [
      [
        'return true heights in centimeters between 150 and 193',
        {...validPassport, hgt: '170cm'},
        true,
      ],
      [
        'return false heights in centimeters below 150',
        {...validPassport, hgt: '149cm'},
        false,
      ],
      [
        'return false heights in centimeters above 193',
        {...validPassport, hgt: '194cm'},
        false,
      ],
      [
        'return true heights in inches between 59 and 76',
        {...validPassport, hgt: '65in'},
        true,
      ],
      [
        'return false heights in inches below 59',
        {...validPassport, hgt: '58in'},
        false,
      ],
      [
        'return false heights in inches above 76',
        {...validPassport, hgt: '77in'},
        false,
      ],
    ];
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });

  describe('Hair Color field', () => {
    const testCases: ValidatorTestCase[] = [
      [
        'return true for valid hair colors',
        {...validPassport, hcl: '#ffffff'},
        true,
      ],
      [
        'return false for hair colors that do not start with #',
        {...validPassport, hcl: 'fffaaa'},
        false,
      ],
      [
        'return false for hair colors with more than 6 digits',
        {...validPassport, hcl: '#fffaaab'},
        false,
      ],
      [
        'return false for hair colors with less than 6 digits',
        {...validPassport, hcl: '#fffa'},
        false,
      ],
      [
        'return false for hair colors non-alphanumeric digits',
        {...validPassport, hcl: '#fffa!a'},
        false,
      ],
    ];
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });

  describe('Eye Color field', () => {
    let testCases: ValidatorTestCase[] = EYE_COLORS.map((color) => {
      return [
        `return true for valid eye color ${color}`,
        {...validPassport, ecl: color},
        true,
      ];
    });
    testCases = testCases.concat([
      'return false for non-valid eye colors',
      {...validPassport, ecl: 'foo'},
      false,
    ]);
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });

  describe('Passport ID field', () => {
    const testCases: ValidatorTestCase[] = [
      [
        'return true for Passport IDs 9-digit long numbers',
        {...validPassport, pid: '012345678'},
        true,
      ],
      [
        'return false for Passport IDs larger than 9 digits',
        {...validPassport, pid: '0123456789'},
        false,
      ],
      [
        'return false for Passport IDs smaller than 9 digits',
        {...validPassport, pid: '01234'},
        false,
      ],
      [
        'return false for Passport IDs which are not numbers',
        {...validPassport, pid: 'foobar'},
        false,
      ],
    ];
    it.each(testCases)('should %s', (name, input, expected) => {
      expect(validate(input)).toStrictEqual(expected);
    });
  });
});
