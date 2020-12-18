import {calculateStruckTrees} from '../src/toboggan';

/**
 * Specialized PuzzleFunction for PartB. Calculate for trees struck for
 * multiple slopes, return the product of the results.
 */
export function puzzleB(inputs: string[]): number {
  const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  // Calculate treesStruck for each slope, and reduce the results into a product
  const result =
      slopes.map(([x, y]) => calculateStruckTrees(inputs, x, y))
          .reduce((product, treesStruck) => product * treesStruck, 1);
  return result;
}
