import {TestCase, ValidatorTestCase} from './testing';
import {validatePasswordB} from './validatorB';

describe('validatePasswordA', () => {
  const testCases: TestCase[] = [
    [
      'return false for password with the character at neither position', {
        password: 'baab',
        policy: {
          char: 'a',
          first: 1,
          second: 4,
        },
        result: false,
      }
    ],
    [
      'return false for password with the character at both position', {
        password: 'abba',
        policy: {
          char: 'a',
          first: 1,
          second: 4,
        },
        result: false,
      }
    ],
    [
      'return true for password with only the character at first position',
      {
        password: 'abbb',  // No 'a' at second position
        policy: {
          char: 'a',
          first: 1,
          second: 4,
        },
        result: true,
      }
    ],
    [
      'return true for password with only the character at second position',
      {
        password: 'bbba',  // No 'a' at first position
        policy: {
          char: 'a',
          first: 1,
          second: 4,
        },
        result: true,
      }
    ],
    [
      'return true for valid password with with other instances of the character',
      {
        password: 'abbbaaaa',
        policy: {
          char: 'a',
          first: 1,
          second: 4,
        },
        result: true,
      }
    ]
  ];

  it.each(testCases)('should %s', (name: string, test: ValidatorTestCase) => {
    const result = validatePasswordB(test.password, test.policy);
    expect(result).toBe(test.result);
  });
});
