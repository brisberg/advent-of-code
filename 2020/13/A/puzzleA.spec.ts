import {puzzleA} from './puzzleA';

describe('PuzzleA', () => {
  it('should return manhatten distance of Ferry after all instructions', () => {
    const inputs = [
      '939',
      '7,13,x,x,59,x,31,19',
    ];

    // The earliest bus you could take is bus ID 59. It doesn't depart until
    // timestamp 944, so you would need to wait 944 - 939 = 5 minutes before
    // it departs. Multiplying the bus ID by the number of minutes you'd
    // need to wait gives 295.

    const result = puzzleA(inputs);
    expect(result).toEqual(295)
  });

  it('should throw an error if inputs has more or less than two lines', () => {
    const oneLine = ['foobar'];
    const test1 = () => puzzleA(oneLine);
    expect(test1).toThrow(
        `Inputs malformed. Expecting two lines denoting 'start time' and active bus lines.`);

    const threeLines = ['foobar', 'barbaz', 'quizar'];
    const test2 = () => puzzleA(threeLines);
    expect(test2).toThrow(
        `Inputs malformed. Expecting two lines denoting 'start time' and active bus lines.`);
  });
});
