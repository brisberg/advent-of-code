import {processPasswords} from './processPasswords';
import {validatePasswordA} from './validators/validatorA';

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
        '1-2 g: gg',            // invalid
        '1-6 t: ttttttf',       // invalid
        '1-3 h: khmchszhhmzm',  // valid
        '4-6 q: qqbjqqqj',      // invalid
        '6-8 j: gtkwwjjj',      // invalid

        `6-14 j: jjjjjzjjjjjjjtjjjj`,   // invalid
        `7-10 x: rxxnxrzgxxd`,          // valid
        `6-12 g: dmgggpgggwczggghggm`,  // invalid
        `3-6 h: hdhjhhhhchh`,           // invalid
        `11-12 r: zrrkcrrrrrlh`,        // invalid
      ];

      const count = processPasswords(inputs, validatePasswordA);
      expect(count).toEqual(2);
    });
  });
});
