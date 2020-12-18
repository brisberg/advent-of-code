import {readGroups} from './groupReader';

describe('GroupReader', () => {
  it('should split group entries by empty lines', () => {
    const inputs: string[] = [
      'foobar',
      '',
      'barbaz',
      '',
      'flip',
    ];

    const entries = readGroups(inputs);
    expect(entries).toStrictEqual([['foobar'], ['barbaz'], ['flip']]);
  });

  it('should return multi-line entries', () => {
    const inputs: string[] = [
      'foo',
      'bar',
      '',
      'bap',
      'baz',
    ];

    const entries = readGroups(inputs);
    expect(entries).toStrictEqual([['foo', 'bar'], ['bap', 'baz']]);
  });
});
