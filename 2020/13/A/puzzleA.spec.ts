import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should return manhatten distance of Ferry after all instructions', () => {
    const inputs = [
      '939',
      '7,13,x,x,59,x,31,19',
    ];

    // The earliest bus you could take is bus ID 59. It doesn't depart until
    // timestamp 944, so you would need to wait 944 - 939 = 5 minutes before it
    // departs. Multiplying the bus ID by the number of minutes you'd need to
    // wait gives 295.

    const result = puzzleA(inputs);
    expect(result).toEqual(295)
  });
});
