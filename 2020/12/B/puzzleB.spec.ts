import {puzzleB} from './puzzleB';

describe('PuzzleA', () => {
  it('should return manhatten distance of Ferry after all instructions', () => {
    const inputs = [
      'F10',
      'N3',
      'F7',
      'R90',
      'F11',
    ];

    // After these operations, the ship's Manhattan distance from its starting
    // position is 214 + 72 = 286.

    const result = puzzleB(inputs);
    expect(result).toEqual(286)
  });
});
