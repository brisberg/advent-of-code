import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  describe('should repeat the game step until 2020th number', () => {
    it.each([
      ['0,3,6', 436],
      ['1,3,2', 1],
      ['2,1,3', 10],
      ['1,2,3', 27],
      ['2,3,1', 78],
      ['3,2,1', 438],
      ['3,1,2', 1836],
    ])('%s', (input, expected) => {
      expect(puzzleA([input])).toBe(expected);
    });
  });
});
