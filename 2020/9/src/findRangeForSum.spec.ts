import {findRangeForSum} from './findRangeForSum';

describe('findRangeForSum', () => {
  it('should return range which sums to target sum', () => {
    const keys = [1, 2, 3, 4, 5];
    const sum = 9;
    const expectedRange = [2, 3, 4];

    expect(findRangeForSum(keys, sum)).toStrictEqual(expectedRange);
  });

  it('should return "null" if no range is found', () => {
    const keys = [1, 2, 3, 4, 5];
    const sum = 1000;

    expect(findRangeForSum(keys, sum)).toStrictEqual(null);
  });
});
