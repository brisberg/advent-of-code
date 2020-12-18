import {unionAnswers} from './groupEntry';

describe('unionAnswers', () => {
  it('should return the only answer for a single person group', () => {
    const group = ['abc'];

    expect(unionAnswers(group)).toEqual('abc');
  });

  it('should combine disperate answers', () => {
    const group = ['abc', 'xyz'];

    expect(unionAnswers(group)).toEqual('abcxyz');
  });

  it('should union overlapping answers', () => {
    const group = ['abc', 'cde'];

    expect(unionAnswers(group)).toEqual('abcde');
  });
});
