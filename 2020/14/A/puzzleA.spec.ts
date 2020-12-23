import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should process all instructions and return sum of memory values', () => {
    const inputs = [
      'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
      'mem[8] = 11',
      'mem[7] = 101',
      'mem[8] = 0',
    ];

    // In the above example, only two values in memory are not zero - 101 (at
    // address 7) and 64 (at address 8) - producing a sum of 165.

    const result = puzzleA(inputs);
    expect(result).toEqual(165);
  });
});
