import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
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

    // Final State after 4 Iterations
    // #.#L.L#.##
    // #LLL#LL.L#
    // L.#.L..#..
    // #L##.##.L#
    // #.#L.LL.LL
    // #.#L#L#.##
    // ..L.L.....
    // #L#L##L#L#
    // #.LLLLLL.L
    // #.#L#L#.##

    // 37 Seats occupied

    const result = puzzleA(inputs);
    expect(result).toEqual(37)
  });
});
