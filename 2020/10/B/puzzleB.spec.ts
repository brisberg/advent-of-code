import {countOptions, DELTA_J, puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  it('iterate through combinations and return the total permutations', () => {
    const inputs =
        ['16', '10', '15', '5', '1', '11', '7', '19', '6', '12', '4'];

    // 8 distinct arrangements
    // (0), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
    // (0), 1, 4, 5, 6, 7, 10, 12, 15, 16, 19, (22)
    // (0), 1, 4, 5, 7, 10, 11, 12, 15, 16, 19, (22)
    // (0), 1, 4, 5, 7, 10, 12, 15, 16, 19, (22)
    // (0), 1, 4, 6, 7, 10, 11, 12, 15, 16, 19, (22)
    // (0), 1, 4, 6, 7, 10, 12, 15, 16, 19, (22)
    // (0), 1, 4, 7, 10, 11, 12, 15, 16, 19, (22)
    // (0), 1, 4, 7, 10, 12, 15, 16, 19, (22)

    const result = puzzleB(inputs);
    expect(result).toEqual(8)
  });

  it('should compute total permutations from a more complex set', () => {
    const inputs = [
      '28', '33', '18', '42', '31', '14', '46', '20', '48', '47', '24',
      '23', '49', '45', '19', '38', '39', '11', '1',  '32', '25', '35',
      '8',  '17', '7',  '9',  '4',  '2',  '34', '10', '3',
    ];

    const result = puzzleB(inputs);
    expect(result).toEqual(19208)
  });

  it('should return 0 if no adapters are supplied', () => {
    const test = () => puzzleB([]);
    expect(test).toThrowError('No adapter joltages supplies.')
  })
});

describe('countOptions', () => {
  it.each([
    [[1, 2, 3], 0, 3],
    [[1, 5, 6], 0, 1],
    [[4, 5, 6], 0, 0],
    [[1, 3, 10], 0, 2],
  ])('countOptions(%s)',
     (adapters: number[], initial: number, expected: number) => {
       expect(countOptions(initial, adapters, DELTA_J)).toBe(expected);
     });
});
