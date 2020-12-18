/**
 * Iterates through a set of keys, searching for the first contiguous range of
 * numbers which sum to the specified target sum.
 *
 * Returns null if none is found.
 */
export function findRangeForSum(keys: number[], sum: number): number[]|null {
  for (let i = 0; i < keys.length; i++) {
    for (let j = i; j < keys.length - 1; j++) {
      const range = keys.slice(i, j + 1);
      // console.log(range);
      if (range.reduce((sum, v) => sum + v, 0) === sum) {
        return range;
      }
    }
  }

  return null;
}
