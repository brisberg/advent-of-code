import {ExecutionResult, Processor} from '../src/processor';

/**
 * Specialized PuzzleFunction for Puzzle 8.A.
 *
 * Read all instructions and pass them to a new processor instance. Execute
 * instructions until an error or end condition is reached. Return the current
 * value of the accumulator.
 */
export function puzzleA(inputs: string[]): number {
  const processor = new Processor(inputs);

  let lastResult: ExecutionResult = ExecutionResult.OK;
  while (lastResult === ExecutionResult.OK) {
    lastResult = processor.execute();
  }

  return processor.getAcc();
}
