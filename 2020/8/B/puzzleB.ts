import {ExecutionResult, Processor} from '../src/processor';
import {parseInstruction} from '../src/processor/instruction';

/**
 * Specialized PuzzleFunction for Puzzle 8.B.
 *
 * Read all instructions. Iterate through them, switching `nop` and `jmp`
 * instructions. For each variant program, pass it to a new processor instance.
 * Execute instructions until an error or end condition is reached. If the
 * program returned FINISHED, return the current value of the accumulator.
 */
export function puzzleB(inputs: string[]): number {
  for (let i = 0; i < inputs.length; i++) {
    const line = inputs[i];
    if (line.startsWith('acc')) {
      continue;
    }

    const newInst = parseInstruction(line);
    if (newInst.cmd === 'nop') {
      newInst.cmd = 'jmp';
    } else if (newInst.cmd === 'jmp') {
      newInst.cmd = 'nop';
    }

    const newProgram = [
      ...inputs.slice(0, i - 1),
      `${newInst.cmd} ${newInst.val}`,
      ...inputs.slice(i + 1),
    ];

    // Execute the new program
    const processor = new Processor(inputs);

    let lastResult: ExecutionResult = ExecutionResult.OK;
    while (lastResult === ExecutionResult.OK) {
      lastResult = processor.execute();
    }

    if (lastResult === ExecutionResult.FINISHED) {
      console.log(`Swapped instruction ${i} to '${newInst.cmd} ${
          newInst.val}' to create valid Program'. Final accumulator value was ${
          processor.getAcc()}`)
      return processor.getAcc();
    }
  };

  throw new Error('No program mutations are valid.')
}
