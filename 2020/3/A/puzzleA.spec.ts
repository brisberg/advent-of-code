import {calculateStruckTrees} from './puzzleA';

describe('puzzleA', () => {
  it('should throw error if map is empty', () => {
    const testFn = () => calculateStruckTrees([], 3, 1);
    expect(testFn).toThrowError('Map data must have at least one row.')
  });

  it('should throw error if deltaY is 0', () => {
    const testFn = () => calculateStruckTrees(['..##'], 3, 0);
    expect(testFn).toThrowError('DeltaY must be greater than 0.')
  });

  it('should count trees struck diagonally', () => {
    const map = [
      '....',  // Miss at X=0
      '####',  // Strike at X=1
      '#.#.',  // Strike at X=2
      '#.#.',  // Miss at X=3
    ];
    const result = calculateStruckTrees(map, 1, 1);
    expect(result).toEqual(2);
  });

  it('should count trees struck diagonally with wrapping', () => {
    const map = [
      '.....',  // Miss at X=0
      '..#..',  // Strike at X=2
      '....#',  // Strike at X=4
      '.#...',  // Strike at X=6 (wrapped to slot 1);
    ];
    const result = calculateStruckTrees(map, 2, 1);
    expect(result).toEqual(3);
  });
});
