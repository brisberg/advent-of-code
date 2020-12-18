import {Instruction, parseInstructions} from './instruction';

export enum ExecutionResult {
  // Instruction executed successfully
  OK = 0,
  // Program finished, last instruction executed
  FINISHED,
  // Current Instruction malformed and could not be executed
  ERR_INVALID_INST,
  // Infinite Loop detected, instruction executed more than once
  ERR_LOOP_DETECTED,
}

/**
 * Processor simulates a simple instruction processor.
 *
 * When fed a set of instructions (`acc`, `jmp`, `nop`) as a set of strings, it
 * will begin to execute them in sequence based on their rules.
 *
 * Processor holds a single global Accumulator variable affected by the rules.
 * If the processor attempts to execute an instruction a second time, execution
 * is immediately halted.
 */
export class Processor {
  private accumulator = 0;
  private programCounter = 0;
  private program: Instruction[];

  public constructor(instructions: string[]) {
    this.program = parseInstructions(instructions);
  }

  public getAcc(): number {
    return this.accumulator;
  }

  private get acc() {
    return this.accumulator;
  }

  /**
   * Executes the current instruction.
   *
   * Throws an error if the instruction cannot be executed or an instruction is
   * executed twice.
   */
  public execute(): ExecutionResult {
    return ExecutionResult.OK;
  }
}
