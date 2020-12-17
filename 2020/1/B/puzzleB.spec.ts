import {computeResult} from './puzzleB';

describe('puzzleA', () => {
  it('should compute product of 3 numbers which sum to 2020', () => {
    const inputs = [500, 520, 1000, 2000];
    const result = computeResult(inputs);

    expect(result).toEqual(500 * 520 * 1000);
  });

  it('should return -1 if no triple is found', () => {
    const inputs = [1, 5, 10];  // No triple of 2020
    const result = computeResult(inputs);

    expect(result).toEqual(-1);
  })
});
