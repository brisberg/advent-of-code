import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should return manhatten distance of Ferry after all instructions', () => {
    const inputs = [
      'F10',
      'N3',
      'F7',
      'R90',
      'F11',
    ];

    // At the end of these instructions, the ship's Manhattan distance (sum
    // of the absolute values of its east/west position and its north/south
    // position) from its starting position is 17 + 8 = 25.

    const result = puzzleA(inputs);
    expect(result).toEqual(25)
  });
});
