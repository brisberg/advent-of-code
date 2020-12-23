import {Processor} from '../src/processor';

/**
 * MemoryWriter for Puzzle 14.B where the bitmask is applied to the address of
 * memory to be written.
 */
export function memWriterB(this: Processor, addr: number, value: number): void {
  const memAddrs = expandAddresses(addr, this.bitmask);

  memAddrs.forEach((memAddr) => {
    this.memory[memAddr] = value;
  });
}

/** Applies a bitmask to the address, and expands any floating bits */
function expandAddresses(addr: number, mask: string|null): number[] {
  if (!mask) {
    return [addr];
  }

  return auxExpandAddresses('', addr.toString(2).padStart(36, '0'), mask)
      .map((s) => parseInt(s, 2));
}

function auxExpandAddresses(
    prev: string, addr: string, mask: string): string[] {
  const index = mask.indexOf('X');

  if (index === -1) {
    return [prev + applyBitMask(addr, mask)];
  }

  const segment = applyBitMask(addr.substr(0, index), mask.substr(0, index));
  return [
    ...auxExpandAddresses(
        prev + segment + '0',
        addr.substring(index + 1),
        mask.substring(index + 1),
        ),
    ...auxExpandAddresses(
        prev + segment + '1',
        addr.substring(index + 1),
        mask.substring(index + 1),
        )
  ];
}

function applyBitMask(partial: string, mask: string): string {
  // console.log(`applyBitMask(${partial}, ${mask})`);
  let result = partial;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '1') {
      // console.log(
      //     `result = ${result.slice(0, i)} + '1' + ${result.slice(i + 1)}`);
      result = result.slice(0, i) + '1' + result.slice(i + 1);
    }
  }
  return result;
}
