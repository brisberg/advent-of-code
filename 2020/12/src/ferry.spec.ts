import {PartARules} from '../A/rules';
import {Dir, Ferry, Rules} from './ferry';

const emptyRules: Rules = {};

describe('Ferry class', () => {
  it('should initialize with given Position and Direction', () => {
    const ferry = new Ferry([1, 4], Dir.East, emptyRules);

    expect(ferry.getPosition()).toEqual([1, 4]);
    expect(ferry.getDirection()).toEqual(Dir.East);
  });

  describe('Execute Instructions', () => {
    it('should call the appropriate command function in ruleset', () => {
      const mockRules: Rules = {'Z': jest.fn()};
      const ferry = new Ferry([0, 0], Dir.North, mockRules);
      ferry.execute('Z15');

      expect(mockRules['Z']).toHaveBeenCalledWith(15);
      expect((mockRules['Z'] as jest.Mock).mock.instances[0]).toBe(ferry);
    });
  });
});
