import {Processor} from '../src/processor';

/**
 * MemoryWriter for Puzzle 14.A where the bitmask is applied to the value
 * written to memory.
 */
export function memWriterA(this: Processor, addr: number, value: number): void {
  const memVal = applyBitMask(value, this.bitmask);
  this.memory[addr] = memVal;
}

/**
 * Augments given value with the current Bit Mask
 *
 * Inspiration:
 * https://github.com/DenverCoder1/Advent-of-Code-2020---Javascript/blob/main/Day%2014/part1.js#L551
 */
function applyBitMask(value: number, mask: string|null): number {
  if (!mask) {
    return value;
  }

  const binV = value.toString(2).padStart(36, '0');
  const chars = binV.split('');

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] != 'X') {
      chars[i] = mask[i];
    }
  }

  return Number('0b' + chars.join(''));
}
