import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should execute program and return final value of accumulator', () => {
    const inputs =
        ['16', '10', '15', '5', '1', '11', '7', '19', '6', '12', '4'];

    // In this example, when using every adapter, there are 7 differences of 1
    // jolt and 5 differences of 3 jolts.

    const result = puzzleA(inputs);
    expect(result).toEqual(35)
  });

  it('should return 0 if no adapters are supplied', () => {
    const test = () => puzzleA([]);
    expect(test).toThrowError('No adapter joltages supplies.')
  })
});
