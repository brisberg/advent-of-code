/** Puzzle B package represents the algorithm solution to AoC-2020-1a */
export function puzzleB(inputs: string[]) {
  const expenses = inputs.map((s) => parseInt(s));
  return computeResult(expenses);
}

/**
 * computeResult takes an input array of numbers. The function searches through
 * the inputs for the pair which sum to 2020, then returns their product.
 */
export function computeResult(inputs: number[]): number {
  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs.length; j++) {
      for (let k = 0; k < inputs.length; k++) {
        if (inputs[i] + inputs[j] + inputs[k] === 2020) {
          const product = inputs[i] * inputs[j] * inputs[k];
          console.log(`${inputs[i]} * ${inputs[j]} * ${inputs[k]} = ${product}`)
          return product;
        }
      }
    }
  }

  return -1;
}
