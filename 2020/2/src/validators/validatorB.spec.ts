import {Policy} from '../password';
import {validatePasswordB} from './validatorB';

describe('validatePasswordA', () => {
  it('should return true for a valid password', () => {
    const password = 'aba';
    const policy: Policy = {
      char: 'a',
      first: 1,
      second: 3,
    };

    const result = validatePasswordB(password, policy);
    expect(result).toBeTruthy();
  });

  it('should return false for password without character at first position',
     () => {
       const password = 'bbba';  // No 'a' at first position
       const policy: Policy = {
         char: 'a',
         first: 1,
         second: 4,
       };

       const result = validatePasswordB(password, policy);
       expect(result).toBeFalsy();
     });

  it('should return false for password without character at second position',
     () => {
       const password = 'abbb';  // No 'a' at second position
       const policy: Policy = {
         char: 'a',
         first: 1,
         second: 4,
       };

       const result = validatePasswordB(password, policy);
       expect(result).toBeFalsy();
     });

  it('should return true for valid passwords with other instances of the character',
     () => {
       const password = 'abaabbbba';  // Has 'a' at position 1 and 4
       const policy: Policy = {
         char: 'a',
         first: 1,
         second: 4,
       };

       const result = validatePasswordB(password, policy);
       expect(result).toBeTruthy();
     });
});
