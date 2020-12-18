import {intersectionAnswers, unionAnswers} from './groupEntry';

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

describe('intersectionAnswers', () => {
  it('should return the empty string for an empty group', () => {
    const group = [];

    expect(intersectionAnswers(group)).toEqual('');
  });

  it('should return the only answer for a single person group', () => {
    const group = ['abc'];

    expect(intersectionAnswers(group)).toEqual('abc');
  });

  it('should return empty string for disperate answers', () => {
    const group = ['abc', 'xyz'];

    expect(intersectionAnswers(group)).toEqual('');
  });

  it('should intersection of overlapping answers', () => {
    const group = ['abc', 'cde'];

    expect(intersectionAnswers(group)).toEqual('c');
  });
});
