import {PasswordPolicy} from './models';
import {validatePassword} from './validatePassword';

describe('validatePassword', () => {
  it('should return true for a valid password', () => {
    const password = 'aaa';
    const policy: PasswordPolicy = {
      char: 'a',
      min: 1,
      max: 3,
    };

    const result = validatePassword(password, policy);
    expect(result).toBeTruthy();
  });

  it('should return false for password with less than min instances of character',
     () => {
       const password = 'abcdef';  // One 'a'
       const policy: PasswordPolicy = {
         char: 'a',
         min: 2,
         max: 3,
       };

       const result = validatePassword(password, policy);
       expect(result).toBeFalsy();
     });

  it('should return false for password with more than max instances of character',
     () => {
       const password = 'abacada';  // Four 'a's
       const policy: PasswordPolicy = {
         char: 'a',
         min: 1,
         max: 3,
       };

       const result = validatePassword(password, policy);
       expect(result).toBeFalsy();
     });
});
