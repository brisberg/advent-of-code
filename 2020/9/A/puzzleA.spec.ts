import {findInvalidValue} from './puzzleA';

describe('findInvalidValue', () => {
  it('should execute program and return final value of accumulator', () => {
    const inputs = [
      '35',  '20',  '15',  '25',  '47',  '40',  '62',  '55',  '65',  '95',
      '102', '117', '150', '182', '127', '219', '299', '277', '309', '576',
    ];

    // In this example, after the 5-number preamble, almost every number is the
    // sum of two of the previous 5 numbers; the only number that does not
    // follow this rule is 127.
    const result = findInvalidValue(inputs, 5);
    expect(result).toEqual(127)
  });
});
