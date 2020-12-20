import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  it('should execute program and return final value of accumulator', () => {
    const inputs = [
      'L.LL.LL.LL',
      'LLLLLLL.LL',
      'L.L.L..L..',
      'LLLL.LL.LL',
      'L.LL.LL.LL',
      'L.LLLLL.LL',
      '..L.L.....',
      'LLLLLLLLLL',
      'L.LLLLLL.L',
      'L.LLLLL.LL',
    ];

    // Final State after 6 Iterations
    // #.L#.L#.L#
    // #LLLLLL.LL
    // L.L.L..#..
    // ##L#.#L.L#
    // L.L#.LL.L#
    // #.LLLL#.LL
    // ..#.L.....
    // LLL###LLL#
    // #.LLLLL#.L
    // #.L#LL#.L#

    // 37 Seats occupied

    const result = puzzleB(inputs);
    expect(result).toEqual(26)
  });
});
