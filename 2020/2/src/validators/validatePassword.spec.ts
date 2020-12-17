import {Policy} from '../password';
import {validatePasswordA} from './validatePassword';

describe('validatePasswordA', () => {
  it('should return true for a valid password', () => {
    const password = 'aaa';
    const policy: Policy = {
      char: 'a',
      first: 1,
      second: 3,
    };

    const result = validatePasswordA(password, policy);
    expect(result).toBeTruthy();
  });

  it('should return false for password with less than min instances of character',
     () => {
       const password = 'abcdef';  // One 'a'
       const policy: Policy = {
         char: 'a',
         first: 2,
         second: 3,
       };

       const result = validatePasswordA(password, policy);
       expect(result).toBeFalsy();
     });

  it('should return false for password with more than max instances of character',
     () => {
       const password = 'abacada';  // Four 'a's
       const policy: Policy = {
         char: 'a',
         first: 1,
         second: 3,
       };

       const result = validatePasswordA(password, policy);
       expect(result).toBeFalsy();
     });
});
