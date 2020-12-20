import {MapA} from './mapA';

describe('MapA', () => {
  it('should calculate the number of neighbors of a cell (\'#\' cells)', () => {
    const map = new MapA([
      '#.#',
      '##.',
      '#..',
    ]);

    expect(map.countNeighbors(0, 0)).toEqual(3);
    expect(map.countNeighbors(0, 2)).toEqual(2);
    expect(map.countNeighbors(2, 0)).toEqual(3);
    expect(map.countNeighbors(2, 2)).toEqual(1);
    expect(map.countNeighbors(1, 1)).toEqual(5);
  });
});
