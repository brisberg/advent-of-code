/**
 * Code Reader package contains classes and utils for reading and validating
 * data encoded with the XMAS cypher. https://adventofcode.com/2020/day/9
 */

export enum DecodeResult {
  //  Decoded value was valid
  VALID = 0,
  // Decoded value was invalid
  INVALID,
  // Value was used to fill the preamble cache
  PREAMBLE,
  // Value was not a number
  ERR_INVALID_ARG,
}

export class CodeReader {
  private keys: number[] = [];

  public constructor(private preambleSize: number) {}

  public getKeys(): number[] {
    return this.keys;
  }

  public decode(value: number): DecodeResult {
    if (isNaN(value)) {
      return DecodeResult.ERR_INVALID_ARG;
    }

    if (this.keys.length < this.preambleSize) {
      this.keys.push(value);
      return DecodeResult.PREAMBLE;
    }

    for (let i = 0; i < this.preambleSize; i++) {
      for (let j = 0; j < this.preambleSize; j++) {
        if (i === j) {
          continue;
        }

        if (this.keys[i] + this.keys[j] === value) {
          this.keys.shift();
          this.keys.push(value);
          return DecodeResult.VALID;
        }
      }
    }

    return DecodeResult.INVALID;
  }
}
