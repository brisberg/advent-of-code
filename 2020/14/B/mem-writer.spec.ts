import {Processor} from '../src/processor';
import {memWriterB} from './mem-writer';

describe('Memory Writer 14.B', () => {
  let processor: Processor;

  beforeEach(() => {
    processor = new Processor(memWriterB);
  });

  it('should process not modify address with a 0x0 bitmask', () => {
    processor.execute('mask = 000000000000000000000000000000000000');
    processor.execute('mem[9042] = 12448');

    expect(processor.getMemory()).toStrictEqual({9042: 12448});
  });

  it(`should overwrite '1's in the bitmask when writing`, () => {
    processor.execute('mask = 000000000000000000000000000000001100');
    processor.execute('mem[100] = 16');  // 100 = `0b1100100`

    // 0b1100100 (100) x 0b0001100 = 1101100 (108)
    expect(processor.getMemory()).toStrictEqual({108: 16});
  });

  it(`should evaluate 'floating' bits to multiple addresses`, () => {
    processor.execute('mask = 00000000000000000000000000000000000X');
    processor.execute('mem[100] = 16');  // 100 = `0b11001000

    // `0b1100100X =
    // `0b11001000 (100)
    // `0b11001001 (101)

    expect(processor.getMemory()).toStrictEqual({100: 16, 101: 16});
  });


  it(`should apply multiple 'floating' bit when writing to memory`, () => {
    processor.execute('mask = 00000000000000000000000000000000XX00');
    processor.execute('mem[100] = 16');  // 100 = `0b1100100`

    // 0b1100100 (100) x 0b000XX00 =
    // 0b1100000 (96)
    // 0b1100100 (100)
    // 0b1101000 (104)
    // 0b1101100 (108)
    expect(processor.getMemory()).toStrictEqual({
      96: 16,
      100: 16,
      104: 16,
      108: 16,
    });
  });
});
