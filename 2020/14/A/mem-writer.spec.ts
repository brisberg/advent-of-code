import {Processor} from '../src/processor';
import {memWriter} from './mem-writer';

describe('Memory Writer 14.A', () => {
  let processor: Processor;

  beforeEach(() => {
    processor = new Processor(memWriter);
  });

  it('should process `mem` instruction to write to memory', () => {
    processor.execute('mem[9042] = 12448');

    expect(processor.getMemory()).toStrictEqual({9042: 12448});
  });

  it('should apply Bit Mask when writing to memory', () => {
    processor.execute('mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');
    processor.execute('mem[100] = 16');  // 16 = `10000`

    // 10000 (16) x X1100 = 11100 (28)
    expect(processor.getMemory()).toStrictEqual({100: 28})
  });

  it('should apply a larger than 32-bit Mask when writing to memory', () => {
    processor.execute('mask = X1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');
    processor.execute('mem[100] = 16');  // 16 = `10000`

    // 10000 (16) x X1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100 =
    // 010000000000000000000000000000011100 (17179869212)
    expect(processor.getMemory()).toStrictEqual({100: 17179869212})
  });
});
