/** Puzzle A package represents the algorithm solution to AoC-2020-1a */

/**
 * computeResult takes an input array of numbers. The function searches through
 * the inputs for the pair which sum to 2020, then returns their product.
 */
export function computeResult(inputs: number[]): number {
  const lower: number[] = [];
  const upper: number[] = [];

  for (const input of inputs) {
    if (input < 1010) {
      lower.push(input);
    } else {
      upper.push(input);
    }
  }

  for (let i = 0; i < lower.length; i++) {
    for (let j = 0; j < upper.length; j++) {
      if (lower[i] + upper[j] === 2020) {
        const product = lower[i] * upper[j]
        console.log(`${lower[i]} * ${upper[j]} = ${product}`)
        return product;
      }
    }
  }

  return -1;
}
