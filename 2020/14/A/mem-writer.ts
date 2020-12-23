import {Processor} from '../src/processor';

/**
 * MemoryWriter for Puzzle 14.A where the bitmask is applied to the value
 * written to memory.
 */
export function memWriter(this: Processor, addr: number, value: number): void {
  const memVal = this.applyBitMask(value);
  this.memory[addr] = memVal;
}
