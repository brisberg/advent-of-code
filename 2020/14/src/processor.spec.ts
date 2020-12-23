import {Processor} from './processor';

describe('Processor', () => {
  let processor: Processor;
  let memWriterSpy: jest.Mock;

  beforeEach(() => {
    memWriterSpy = jest.fn();
    processor = new Processor(memWriterSpy);
  });

  it('should initialize with an empty Bit Mask', () => {
    expect(processor.getBitMask()).toBeNull();
  });

  it('should initialize with a bank memory bank', () => {
    expect(processor.getMemory()).toEqual({});
  });

  it('should process `mask` instruction to store a new Bit Mask', () => {
    processor.execute('mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');

    expect(processor.getBitMask())
        .toEqual('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100');
  });

  it('should process `mem` instruction to write to memory', () => {
    processor.execute('mem[9042] = 12448');

    expect(memWriterSpy).toHaveBeenCalledWith(9042, 12448);
  });
});
