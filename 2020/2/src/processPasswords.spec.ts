import {Password, PasswordPolicy} from './models';
import {processPasswords} from './processPasswords';

describe('processPasswords', () => {
  it('should count valid passwords', () => {
    const inputs = [
      '1-2 g: gg',            // valid
      '1-6 t: ttttttf',       // valid
      '1-3 h: khmchszhhmzm',  // invalid
      '4-6 q: qqbjqqqj',      // valid
      '6-8 j: gtkwwjjj',      // invalid
    ];

    const count = processPasswords(inputs);
    expect(count).toEqual(3);
  });
});
