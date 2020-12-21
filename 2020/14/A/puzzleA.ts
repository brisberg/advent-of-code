import {Processor} from '../src/processor';

/**
 * Specialized PuzzleFunction for Puzzle 14.A.
 *
 * Initialize a memory processor. Execute all instructions. Return the sum of
 * all the values in memory.
 */
export function puzzleA(inputs: string[]): number {
  const processor = new Processor();

  for (const instruction of inputs) {
    processor.execute(instruction);
  }

  const memory = processor.getMemory();
  console.log(memory);
  const result = Object.values(memory).reduce((sum, value) => sum + value, 0)

  console.log(`After executing all instructions, there are ${
      Object.keys(memory)
          .length} values in Memory. The sum of these values is ${result}.`)
  return result;
}
