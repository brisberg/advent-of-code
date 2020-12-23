/** Typedef for Memory bank of a Processor */
export type Memory = {
  [addr: number]: number,
};

/**
 * Type signature for a MemoryWriter function which writes the specified value
 * to the specified memory address.
 */
export type MemoryWriter = (addr: number, value: number) => void;

/**
 * Processor maintains a Bit Mask and a memory bank. Can process simple
 * instructions to modify memory.
 */
export class Processor {
  protected bitmask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  protected memory: Memory = {};

  /**
   * Handler for writing a value to memory. Pass in a specific implementation
   * for each puzzle.
   */
  protected memWriteHandler: MemoryWriter = () => {};

  public constructor(memWriteHandler: MemoryWriter) {
    this.memWriteHandler = memWriteHandler;
  }

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
      const val = parseInt(value);
      this.memWriteHandler(addr, val);
    }
  }


  /**
   * Augments given value with the current Bit Mask
   *
   * Inspiration:
   * https://github.com/DenverCoder1/Advent-of-Code-2020---Javascript/blob/main/Day%2014/part1.js#L551
   */
  protected applyBitMask(value: number): number {
    const binV = value.toString(2).padStart(36, '0');
    const chars = binV.split('');
    const mask = this.bitmask;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] != 'X') {
        chars[i] = mask[i];
      }
    }

    return Number('0b' + chars.join(''));
  }
}
