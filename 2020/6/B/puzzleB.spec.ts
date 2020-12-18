import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  it('should compute the sum of the unions answers of each group', () => {
    const inputs = [
      'abc', '', 'a', 'b', 'c', '', 'ab', 'ac', '', 'a', 'a', 'a', 'a', '', 'b'
    ];

    // 3 + 0 + 1 + 1 + 1 = 6
    const result = puzzleB(inputs);
    expect(result).toEqual(6)
  });
});
