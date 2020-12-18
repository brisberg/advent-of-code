import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should count number of bags which contain "shiny gold" bags', () => {
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

    // First, the nop +0 does nothing. Then, the accumulator is increased from 0
    // to 1 (acc +1) and jmp +4 sets the next instruction to the other acc +1
    // near the bottom. After it increases the accumulator from 1 to 2, jmp -4
    // executes, setting the next instruction to the only acc +3. It sets the
    // accumulator to 5, and jmp -3 causes the program to continue back at the
    // first acc +1.
    const result = puzzleA(inputs);
    expect(result).toEqual(5)
  });
});
