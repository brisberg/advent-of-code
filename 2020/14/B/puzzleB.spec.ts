import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  it('should process all instructions and return sum of memory values', () => {
    const inputs = [
      'mask = 000000000000000000000000000000X1001X',
      'mem[42] = 100',
      'mask = 00000000000000000000000000000000X0XX',
      'mem[26] = 1',
    ];

    // 0b101010 (42) x X1001X =
    // 0b011010 (28)
    // 0b011011 (29)
    // 0b111010 (60)
    // 0b111011 (61)

    const result = puzzleB(inputs);
    expect(result).toEqual(208);
  });

  it('should process all instructions and return sum of memory values', () => {
    const inputs = [
      'mask = 000000000000000000000000000000000XXX',
      'mem[8] = 4',
      'mask = XX0000000000000000000000000000000000',
      'mem[0] = 5',
    ];

    // Example from
    // https://www.reddit.com/r/adventofcode/comments/kdh7zu/2020_day_14_part_2js_works_on_examples_not_on/gfwlrcs?utm_source=share&utm_medium=web2x&context=3

    const result = puzzleB(inputs);
    expect(result).toEqual(52);
  });
});
