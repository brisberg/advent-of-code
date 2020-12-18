export const DELTA_J = 3;  // Joltage tolerance of adapters

/**
 * Specialized PuzzleFunction for Puzzle 10.B.
 *
 * Sorta all adapters by joltage in decreasing order, and counts the number of
 * possible connection options each one has. Returns the product of all options.
 */
export function puzzleB(inputs: string[]): number {
  const joltages = inputs.map((s) => parseInt(s)).sort((a, b) => {
    return a > b ? -1 : 1;
  });

  if (joltages.length === 0) {
    throw new Error('No adapter joltages supplies.');
  }

  const options = Array<number>(joltages.length);

  for (const [index, adapter] of joltages.entries()) {
    if (index === 0 || index === 1) {
      // Hard code first two (highest) adapter
      options[index] = 1;
      continue;
    }

    let permutations = 0;
    if (index > 2 && (joltages[index - 3] - adapter) <= DELTA_J) {
      permutations += options[index - 3];
    }
    if ((joltages[index - 2] - adapter) <= DELTA_J) {
      permutations += options[index - 2];
    }
    if ((joltages[index - 1] - adapter) <= DELTA_J) {
      permutations += options[index - 1];
    }

    options[index] = permutations;
  }

  // Slice off the last 3, and filter for adapters which could connect to the 0
  // ground.
  const final3 = options.slice(-3).filter((_, index) => {
    return joltages[joltages.length - 3 + index] <= 3;
  });
  const permutations = final3.reduce((sum, v) => sum + v, 0);

  console.log(`There are ${permutations} possible permutations of the ${
      inputs.length} adapters to bridge the joltage gap.`);
  return permutations;
}

export function countOptions(
    initial: number, adapters: number[], deltaJ = DELTA_J): number {
  let options = 0;

  adapters.forEach((adapter) => {
    if (Math.abs(adapter - initial) <= deltaJ) {
      options++;
    }
  });

  return options;
}
