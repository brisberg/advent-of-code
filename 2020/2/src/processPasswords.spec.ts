import {processPasswords} from './processPasswords';
import {validatePasswordA, validatePasswordB} from './validators';

describe('processPasswords', () => {
  describe('validatePasswordsA', () => {
    it('should count valid passwords', () => {
      const inputs = [
        '1-2 g: gg',            // valid
        '1-6 t: ttttttf',       // valid
        '1-3 h: khmchszhhmzm',  // invalid
        '4-6 q: qqbjqqqj',      // valid
        '6-8 j: gtkwwjjj',      // invalid
      ];

      const count = processPasswords(inputs, validatePasswordA);
      expect(count).toEqual(3);
    });
  });

  describe('validatePasswordsB', () => {
    it('should count valid passwords', () => {
      const inputs = [
        '1-2 g: gg',  // invalid
        '1-2 g: gx',  // valid
        '1-2 g: xg',  // valid
        '1-2 g: xx',  // invalid
      ];

      const count = processPasswords(inputs, validatePasswordB);
      expect(count).toEqual(2);
    });
  });
});
