import {computeResult} from './puzzleA';

describe('puzzleA', () => {
  it('should compute product of numbers which sum to 2020', () => {
    const inputs = [1, 2, 3, 1000, 1020, 1100, 1200, 1300];
    const result = computeResult(inputs);

    expect(result).toEqual(1000 * 1020);
  });
});
