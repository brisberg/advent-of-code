import {readPassportEntries} from './dataReader';

describe('DataReader', () => {
  it('should split passport entries by empty lines', () => {
    const inputs: string[] = [
      'foobar',
      '',
      'barbaz',
      '',
      'flip',
    ];

    const entries = readPassportEntries(inputs);
    expect(entries).toStrictEqual(['foobar', 'barbaz', 'flip']);
  });

  it('should concatinate multi-line entries using spaces', () => {
    const inputs: string[] = [
      'foo',
      'bar',
      '',
      'bap',
      'baz',
    ];

    const entries = readPassportEntries(inputs);
    expect(entries).toStrictEqual(['foo bar', 'bap baz']);
  });
});
