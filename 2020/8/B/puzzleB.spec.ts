import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  it('should find valid program mutation and return final accumulator', () => {
    const inputs = [
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ];

    // Swap the final `jmp -4` to a `nop -4`
    const result = puzzleB(inputs);
    expect(result).toEqual(8)
  });

  it('should throw error if no valid mutations are found', () => {
    const inputs = [
      'jmp +0',
      'jmp -1',
    ];

    // Neither substitution will avoid the loop.
    const test = () => puzzleB(inputs);
    expect(test).toThrow('No program mutations are valid.')
  });
});
