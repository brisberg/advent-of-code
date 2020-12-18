import {Passport} from './model';
import {parse} from './parser';

type ParserTestCase = [string, string, Passport];

describe('Passport Parser', () => {
  const testCases: ParserTestCase[] = [
    ['return an empty passport for empty input', '', {}],
    [
      'fill passport with parsed fields',
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm',
      {
        byr: 1937,
        iyr: 2017,
        eyr: 2020,
        hgt: '183cm',
        hcl: '#fffffd',
        ecl: 'gry',
        pid: '860033327',
        cid: 147,
      },
    ],
    [
      'partially fill passport when missing fields',
      'ecl:gry pid:860033327 cid:147 hgt:183cm',
      {
        hgt: '183cm',
        ecl: 'gry',
        pid: '860033327',
        cid: 147,
      },
    ],
    [
      'fill passport with NaN for unparsable integer fields',
      'eyr:bar byr:baz iyr:tab cid:bin',
      {
        byr: NaN,
        iyr: NaN,
        eyr: NaN,
        cid: NaN,
      },
    ],
  ];
  it.each(testCases)('should %s', (name, test, expected) => {
    expect(parse(test)).toStrictEqual(expected);
  });
});
