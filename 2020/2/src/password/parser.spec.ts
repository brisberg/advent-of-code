import {Policy} from './models';
import {parsePasswordAndPolicy} from './parser';

describe('parsePasswordAndPolicy', () => {
  it('should parse the password string from input', () => {
    const input = '4-9 w: wwprdwwwx';
    const result = parsePasswordAndPolicy(input);

    expect(result[1]).toEqual('wwprdwwwx');
  });

  it('should parse the policy object from input', () => {
    const input = '4-9 w: wwprdwwwx';
    const wantPolicy: Policy = {
      char: 'w',
      first: 4,
      second: 9,
    };
    const result = parsePasswordAndPolicy(input);

    expect(result[0]).toEqual(wantPolicy);
  });

  it('should throw error when input malformed', () => {
    const badInput = '4-3-4 wd abscrs343 ';

    expect(() => parsePasswordAndPolicy(badInput)).toThrow();
  })
});
