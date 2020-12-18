import {puzzleB} from './puzzleB';

describe('PuzzleB', () => {
  it('should count number of bags which contain "shiny gold" bags', () => {
    const inputs = [
      'shiny gold bags contain 2 dark red bags.',
      'dark red bags contain 2 dark orange bags.',
      'dark orange bags contain 2 dark yellow bags.',
      'dark yellow bags contain 2 dark green bags.',
      'dark green bags contain 2 dark blue bags.',
      'dark blue bags contain 2 dark violet bags.',
      'dark violet bags contain no other bags.',
    ];

    // In this example, a single shiny gold bag must contain 126 other bags.
    const result = puzzleB(inputs);
    expect(result).toEqual(126)
  });
});
