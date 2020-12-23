import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  describe('should repeat the game step until 2020th number', () => {
    it.each([
      ['0,3,6', 175594],
      ['1,3,2', 2578],
      ['2,1,3', 3544142],
      ['1,2,3', 261214],
      ['2,3,1', 6895259],
      ['3,2,1', 18],
      ['3,1,2', 362],
    ])('%s', (input, expected) => {
      expect(puzzleB([input])).toBe(expected);
    });
  });
});
