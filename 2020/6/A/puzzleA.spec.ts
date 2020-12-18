import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should compute the sum of the unions answers of each group', () => {
    const inputs = [
      'abc', '', 'a', 'b', 'c', '', 'ab', 'ac', '', 'a', 'a', 'a', 'a', '', 'b'
    ];

    // 3 + 3 + 3 + 1 + 1 = 11.
    const result = puzzleA(inputs);
    expect(result).toEqual(11)
  });
});
