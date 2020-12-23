import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  // Limiting test cases are they are still very slow.
  // Takes 90 seconds on my machine, likely several minutes on CI
  describe('should repeat the game step until 30 millionth number', () => {
    it.each([
      ['0,3,6', 175594],
      // ['1,3,2', 2578],
      // ['2,1,3', 3544142],
      // ['1,2,3', 261214],
      // ['2,3,1', 6895259],
      // ['3,2,1', 18],
      // ['3,1,2', 362],
    ])('%s', (input, expected) => {
      expect(puzzleB([input])).toBe(expected);
    });
  });
});
