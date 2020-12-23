/** Typedef for Memory bank of a Processor */
export type Memory = {
  [addr: number]: number,
};

/** Maximum value representable with 32-bits */
const MAX_32BIT = 2 ** 32;

/**
 * Processor maintains a Bit Mask and a memory bank. Can process simple
 * instructions to modify memory.
 *
 * @deprecated This was my original processor implementation. It doesn't work
 * for some reason I can't identify, resulting in lower then expected results.
 */
export class Processor {
  private bitmask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  private upperOneMask = 0;
  private upperZeroMask = 15;
  private lowerOneMask = 0;
  private lowerZeroMask = MAX_32BIT - 1;
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
      const masks = this.generateBitMasks(value);
      this.upperOneMask = masks[0];
      this.upperZeroMask = masks[1];
      this.lowerOneMask = masks[2];
      this.lowerZeroMask = masks[3];
    } else {
      const addr = parseInt(cmd.substring(4, cmd.length - 1));
      const memVal = this.applyBitMask(parseInt(value));
      this.memory[addr] = memVal;
    }
  }

  /**
   * Takes a string based bit mask, extracts a positive and negative bitmask
   * from it. Has to extract a 4-bit and a 32-bit mask because Javascript can
   * only operate on 32-bit values.
   */
  private generateBitMasks(mask: string): [number, number, number, number] {
    let upperOneMask = 0;
    let upperZeroMask = 0;
    let lowerOneMask = 0;
    let lowerZeroMask = 0;

    const upperMask = mask.substr(0, 4);
    const lowerMask = mask.substr(4);

    [...upperMask].forEach((char) => {
      upperOneMask = upperOneMask << 1;
      upperZeroMask = upperZeroMask << 1;

      if (char === 'X') {
        upperZeroMask = upperZeroMask + 1;
      } else if (char === '1') {
        upperOneMask = upperOneMask + 1;
        upperZeroMask = upperZeroMask + 1;
      }
    });

    [...lowerMask].forEach((char) => {
      lowerOneMask = lowerOneMask << 1;
      lowerZeroMask = lowerZeroMask << 1;

      if (char === 'X') {
        lowerZeroMask = lowerZeroMask + 1;
      } else if (char === '1') {
        lowerOneMask = lowerOneMask + 1;
        lowerZeroMask = lowerZeroMask + 1;
      }
    });

    return [upperOneMask, upperZeroMask, lowerOneMask, lowerZeroMask];
  }

  /** Augments given value with the current Bit Mask */
  private applyBitMask(value: number): number {
    const upperVal = Math.floor(value / MAX_32BIT);
    const lowerVal = value % MAX_32BIT;

    return (upperVal & this.upperZeroMask | this.upperOneMask) * MAX_32BIT +
        (lowerVal & this.lowerZeroMask | this.lowerOneMask);
  }
}
