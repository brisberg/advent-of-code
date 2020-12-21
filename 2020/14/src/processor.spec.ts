import {Processor} from './processor';

describe('Processor', () => {
  it('should initialize with an empty Bit Mask', () => {
    const processor = new Processor();

    expect(processor.getBitMask())
        .toEqual('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  });

  it('should initialize with a bank memory bank', () => {
    const processor = new Processor();

    expect(processor.getMemory()).toEqual({});
  });

  it('should process `mask` instruction to store a new Bit Mask', () => {
    const processor = new Processor();
    processor.execute('mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');

    expect(processor.getBitMask())
        .toEqual('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');
  });

  it('should process `mem` instruction to write to memory', () => {
    const processor = new Processor();
    processor.execute('mem[9042] = 12448');

    expect(processor.getMemory()).toStrictEqual({9042: 12448});
  });

  it.skip('should apply Bit Mask when writting to memory', () => {
    const processor = new Processor();
    processor.execute('mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');
    processor.execute('mem[100] = 16');  // 16 = `10000`

    // 10000 (16) x X1100 = 11100 (28)
    expect(processor.getMemory()).toStrictEqual({100: 28})
  });
});
