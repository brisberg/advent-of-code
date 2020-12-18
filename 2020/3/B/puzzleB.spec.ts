import {calculateStruckTrees} from '../src/toboggan';
import {puzzleB} from './puzzleB';

describe('puzzleB', () => {
  it('should calculate the product of trees struck given each slope', () => {
    const map = [
      '........',
      '###.###.',
      '##..####',
    ];

    // Slopes: [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    const slope1Trees = calculateStruckTrees(map, 1, 1);
    const slope2Trees = calculateStruckTrees(map, 3, 1);
    const slope3Trees = calculateStruckTrees(map, 5, 1);
    const slope4Trees = calculateStruckTrees(map, 7, 1);
    const slope5Trees = calculateStruckTrees(map, 1, 2);
    const wantProduct =
        slope1Trees * slope2Trees * slope3Trees * slope4Trees * slope5Trees;

    const result = puzzleB(map);
    expect(result).toEqual(wantProduct);
  });
});
