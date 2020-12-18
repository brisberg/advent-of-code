import {CodeReader, DecodeResult} from './code-reader';

describe('CodeReader', () => {
  it('should return error status if value is not a number', () => {
    const reader = new CodeReader(1);

    expect(reader.decode(parseInt('foobar')))
        .toEqual(DecodeResult.ERR_INVALID_ARG);
  })

  it('should initially store preamble values', () => {
    const reader = new CodeReader(1);

    expect(reader.decode(5)).toEqual(DecodeResult.PREAMBLE);
    expect(reader.getKeys()).toStrictEqual([5]);
  });

  it('should begin decoding values after N preamble values', () => {
    const reader = new CodeReader(2);

    expect(reader.decode(1)).toEqual(DecodeResult.PREAMBLE);
    expect(reader.decode(2)).toEqual(DecodeResult.PREAMBLE);
    expect(reader.getKeys()).toStrictEqual([1, 2]);
    expect(reader.decode(3)).not.toEqual(DecodeResult.PREAMBLE);
  });

  describe('with [1, 2, 3, 4, 5] as preamble', () => {
    let reader: CodeReader;

    beforeEach(() => {
      reader = new CodeReader(5);
      // Load the preamble
      [1, 2, 3, 4, 5].forEach(reader.decode.bind(reader));
      expect(reader.getKeys()).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it('should return valid if value is a sum of two key values', () => {
      // 1 + 3 = 4
      expect(reader.decode(4)).toEqual(DecodeResult.VALID);
    });

    it('should return invalid if no sum of keys is found', () => {
      // No pair sums to 10
      expect(reader.decode(10)).toEqual(DecodeResult.INVALID);
    });

    it('should rotate key set with the new valid value', () => {
      // 2 + 5 = 7
      expect(reader.decode(7)).toEqual(DecodeResult.VALID);
      expect(reader.getKeys()).toStrictEqual([2, 3, 4, 5, 7]);
    });

    it('should NOT rotate key set for invalid value', () => {
      // No pair sums to 11
      expect(reader.decode(11)).toEqual(DecodeResult.INVALID);
      expect(reader.getKeys()).toStrictEqual([1, 2, 3, 4, 5]);
    });
  })
});
