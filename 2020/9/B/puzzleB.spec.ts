import {puzzleBSolver} from './puzzleB';

describe('PuzzleBSolver', () => {
  it.only(
      'should execute program and return final value of accumulator', () => {
        const inputs = [
          '35',  '20',  '15',  '25',  '47',  '40',  '62',  '55',  '65',  '95',
          '102', '117', '150', '182', '127', '219', '299', '277', '309', '576',
        ];

        // In this list, adding up all of the numbers from 15 through 40
        // produces the invalid number from step 1, 127.

        // To find the encryption weakness, add together the smallest and
        // largest number in this contiguous range; in this example, these are
        // 15 and 47, producing 62.

        const result = puzzleBSolver(inputs, 5);
        expect(result).toEqual(62)
      });

  it('should throw an error if no range can be found', () => {
    const inputs = ['1', '2', '3', '4', '5', '1000'];

    // In this list, there are no pairs which add up to 1000.
    // These are also no contiguous sets which add up to 1000

    const test = () => puzzleBSolver(inputs, 5);
    expect(test).toThrowError(
        'No continuious range could be found with a sum of 1000')
  })
});
