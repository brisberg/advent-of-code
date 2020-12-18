import {CodeReader, DecodeResult} from './code-reader';

/** Generalized solver which takes a variable premable size */
export function findInvalidValue(
    inputs: string[], preambleSize: number): [number|null, CodeReader] {
  const reader = new CodeReader(preambleSize);

  for (let i = 0; i < inputs.length; i++) {
    const value = parseInt(inputs[i]);
    const result = reader.decode(value);

    if (result === DecodeResult.INVALID) {
      console.log(`First invalid value: ${value}`);
      return [value, reader];
    }
  }

  return [null, reader];
}
