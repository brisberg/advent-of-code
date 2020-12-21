/** Typedef for Memory bank of a Processor */
export type Memory = {
  [addr: number]: number,
};

/**
 * Processor maintains a Bit Mask and a memory bank. Can process simple
 * instructions to modify memory.
 */
export class Processor {
  private bitmask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  private memory: Memory = {};

  public constructor() {}

  /** Return the currently active Bit Mask */
  public getBitMask(): string {
    return this.bitmask;
  }

  /** Returns a copy of the current Memory bank */
  public getMemory(): Memory {
    return {...this.memory};
  }

  /** Executes a single `mask` or `mem[###]` instruction */
  public execute(instruction: string): void {
    const parts = instruction.split(' ');
    const cmd = parts[0];
    const value = parts[2];

    if (cmd === 'mask') {
      this.bitmask = value;
    } else {
      const addr = parseInt(cmd.substring(4, cmd.length - 1));
      this.memory[addr] = parseInt(value);
    }
  }
}
