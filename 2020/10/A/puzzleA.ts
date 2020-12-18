/**
 * Specialized PuzzleFunction for Puzzle 10.A.
 *
 * Sorta all adapters by joltage, and counts the gaps between each.
 */
export function puzzleA(inputs: string[]): number {
  const joltages = inputs.map((s) => parseInt(s)).sort((a, b) => {
    return a < b ? -1 : 1;
  });

  if (joltages.length === 0) {
    throw new Error('No adapter joltages supplies.');
  }

  const hops = {};
  let currJoltage = 0;

  joltages.forEach((joltage) => {
    const delta = Math.abs(currJoltage - joltage);
    hops[delta] = (hops[delta] || 0) + 1;

    currJoltage = joltage;
  });

  // Account for the final built-in adapter of our device
  hops[3] = (hops[3] || 0) + 1

  console.log(
      `Using all ${inputs.length} adapters, the joltage can be bridged with ${
          hops[1] ||
          0} one-hops, ${hops[2] || 0} two-hops, ${hops[3] || 0} three-hops.`);
  return (hops[1] || 0) * (hops[3] || 0);
}
