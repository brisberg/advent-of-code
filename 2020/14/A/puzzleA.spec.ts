import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should process all instructions and return the sum of values in memory',
     () => {
       const inputs = [
         'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
         'mem[8] = 11',
         'mem[7] = 101',
         'mem[8] = 0',
       ];

       // In the above example, only two values in memory are not zero - 101 (at
       // address 7) and 64 (at address 8) - producing a sum of 165.

       const result = puzzleA(inputs);
       expect(result).toEqual(165)
     });

  it('should process all instructions even with large bit masks', () => {
    const inputs = [
      'mask = 000000000000000000000000000000000XXX',
      'mem[8] = 4',
      'mask = XX0000000000000000000000000000000000',
      'mem[0] = 5',
    ];

    // Example from
    // https://www.reddit.com/r/adventofcode/comments/kdh7zu/2020_day_14_part_2js_works_on_examples_not_on/gfwlrcs?utm_source=share&utm_medium=web2x&context=3

    const result = puzzleA(inputs);
    expect(result).toEqual(52)
  });

  it('should process all instructions and return sum of memory', () => {
    const inputs = [
      'mask = 000000000000000000000000000000X1001X',
      'mem[42] = 100',
      'mask = 00000000000000000000000000000000X0XX',
      'mem[26] = 1',
    ];

    // Example from
    // https://www.reddit.com/r/adventofcode/comments/kdh7zu/2020_day_14_part_2js_works_on_examples_not_on/?utm_source=share&utm_medium=web2x&context=3

    const result = puzzleA(inputs);
    expect(result).toEqual(208)
  });
});
