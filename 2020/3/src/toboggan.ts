/**
 * Calculates the number of trees your toboggan would encounter if it travels
 * down the mountain at the specified slope.
 *
 * Assumes that every row in the given map is the same length.
 */
export function calculateStruckTrees(
    map: string[], deltaX: number, deltaY: number): number {
  if (map.length === 0) {
    throw new Error('Map data must have at least one row.');
  }

  if (deltaY <= 0) {
    throw new Error('DeltaY must be greater than 0.');
  }

  const mapHeight = map.length;
  const mapWidth = map[0].length;

  // Initial starting position
  let x = 0;
  let y = 0;
  let treesStruck = 0;
  while (y < mapHeight) {
    if (map[y].charAt(x % mapWidth) === '#') {
      treesStruck++;
    }

    x += deltaX;
    y += deltaY;
  }

  console.log(`Traveling with slope Right ${deltaX} / Down ${
      deltaY} results in striking ${treesStruck} trees.`)
  return treesStruck;
}
