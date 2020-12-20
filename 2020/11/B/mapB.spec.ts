import {MapB} from './mapB';

describe('MapB', () => {
  it('should count the first neighbor in all 8 directions', () => {
    const map = new MapB([
      '.......#.',
      '...#.....',
      '.#.......',
      '.........',
      '..#L....#',
      '....#....',
      '.........',
      '#........',
      '...#.....',
    ]);

    expect(map.countNeighbors(4, 3)).toBe(8);
  });

  it('should only count the first seat in each direction', () => {
    const map = new MapB([
      '.............',
      '.L.L.#.#.#.#.',
      '.............',
    ]);

    expect(map.countNeighbors(1, 1)).toEqual(0);
  });

  it('should not count seats out of direct lines-of-sight', () => {
    const map = new MapB([
      '.##.##.',
      '#.#.#.#',
      '##...##',
      '...L...',
      '##...##',
      '#.#.#.#',
      '.##.##.',
    ]);

    expect(map.countNeighbors(3, 3)).toEqual(0);
  });
});
