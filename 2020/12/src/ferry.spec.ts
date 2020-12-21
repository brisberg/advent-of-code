import {Directions, Ferry, Rules} from './ferry';

const emptyRules: Rules = {
  'N': () => {},
  'E': () => {},
  'S': () => {},
  'W': () => {},
  'R': () => {},
  'L': () => {},
  'F': () => {},
};

describe('Ferry class', () => {
  it('should initialize with given Position and Direction', () => {
    const ferry = new Ferry([1, 4], Directions.East, emptyRules);

    expect(ferry.getPosition()).toEqual([1, 4]);
    expect(ferry.getDirection()).toEqual(Directions.East);
    // Expect waypoint initialized?
  });

  describe('Execute Instructions', () => {
    it('should call the appropriate command function in ruleset', () => {
      const mockRules: Rules = {...emptyRules, 'R': jest.fn()};
      const ferry = new Ferry([0, 0], [1, 0], mockRules);
      ferry.execute('R15');

      expect(mockRules['R']).toHaveBeenCalledWith(15);
      expect((mockRules['R'] as jest.Mock).mock.instances[0]).toBe(ferry);
    });
  });
});
