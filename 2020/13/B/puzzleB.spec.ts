import {puzzleB} from './puzzleB';

type PuzzleBTestCase = [string[], number];

describe('PuzzleB', () => {
  it('should throw an error if inputs has more or less than two lines', () => {
    const oneLine = ['foobar'];
    const test1 = () => puzzleB(oneLine);
    expect(test1).toThrow(
        `Inputs malformed. Expecting two lines denoting 'start time' and active bus lines.`);

    const threeLines = ['foobar', 'barbaz', 'quizar'];
    const test2 = () => puzzleB(threeLines);
    expect(test2).toThrow(
        `Inputs malformed. Expecting two lines denoting 'start time' and active bus lines.`);
  });

  const testCases: PuzzleBTestCase[] = [
    [['939', '7,13,x,x,59,x,31,19'], 1068781],
    [['939', '17,x,13,19'], 3417],
    [['939', '67,7,59,61'], 754018],
    [['939', '67,x,7,59,61'], 779210],
    [['939', '67,7,x,59,61'], 1261476],
    [['939', '1789,37,47,1889'], 1202161486],
  ];

  it.skip.each(testCases)('Test %#', (input, expected) => {
    expect(puzzleB(input)).toBe(expected);
  });
});
