import {Instruction, parseInstructions} from './instruction';

export enum ExecutionResult {
  // Instruction executed successfully
  OK = 0,
  // Program finished, last instruction executed
  FINISHED,
  // Current Instruction malformed and could not be executed
  ERR_INVALID_INST,
  // Infinite Loop detected, instruction executed more than once
  ERR_INFINITE_LOOP,
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
  private executed: boolean[];

  public constructor(instructions: string[]) {
    this.program = parseInstructions(instructions);
    this.executed = Array<boolean>(this.program.length).fill(false);
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
    const instruction = this.program[this.programCounter];

    if (this.programCounter < 0 || this.programCounter >= this.program.length) {
      return ExecutionResult.FINISHED;
    }

    if (this.executed[this.programCounter]) {
      return ExecutionResult.ERR_INFINITE_LOOP;
    }

    if (isNaN(instruction.val)) {
      return ExecutionResult.ERR_INVALID_INST;
    }

    // Execute the instruction
    this.executed[this.programCounter] = true;
    switch (instruction.cmd) {
      case 'acc':
        this.accumulator += instruction.val;
        this.programCounter++;
        return ExecutionResult.OK;

      case 'nop':
        this.programCounter++;
        return ExecutionResult.OK;

      case 'jmp':
        this.programCounter += instruction.val;
        return ExecutionResult.OK;

      default:
        return ExecutionResult.ERR_INVALID_INST;
    }
  }
}
