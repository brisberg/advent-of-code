import {TestCase, ValidatorTestCase} from './testing';
import {validatePasswordA} from './validatorA';

describe('validatePasswordA', () => {
  const testCases: TestCase[] = [
    [
      'return true for a valid password', {
        password: 'aaa',
        policy: {
          char: 'a',
          first: 1,
          second: 3,
        },
        result: true,
      }
    ],
    [
      'return false for password with less than min instances of character', {
        password: 'abcdef',  // One 'a'
        policy: {
          char: 'a',
          first: 2,
          second: 3,
        },
        result: false,
      }
    ],
    [
      'return false for password with more than max instances of character', {
        password: 'abacada',  // Four 'a's
        policy: {
          char: 'a',
          first: 1,
          second: 3,
        },
        result: false,
      }
    ],
  ];

  it.each(testCases)('should %s', (name: string, test: ValidatorTestCase) => {
    const result = validatePasswordA(test.password, test.policy);
    expect(result).toBe(test.result);
  });
});
