import {Map} from './map';

describe('Map Class', () => {
  const defaultMap: string[] = [
    '#.##.',
    '#####',
    '#.#.#',
  ];

  it('should load a map and calculate map sizes', () => {
    const map = new Map(defaultMap);

    expect(map.getTextMap()).toEqual(defaultMap);
    expect(map.getMapHeight()).toEqual(3);
    expect(map.getMapWidth()).toEqual(5);
  });

  it('should fetch the current value of a cell', () => {
    const map = new Map(['.L', 'L#']);

    expect(map.getCell(0, 0)).toEqual('.');
    expect(map.getCell(0, 1)).toEqual('L');
    expect(map.getCell(1, 0)).toEqual('L');
    expect(map.getCell(1, 1)).toEqual('#');
  });

  it('should set the value of a given cell', () => {
    const map = new Map(['..', '..']);

    map.setCell(1, 1, 'L');

    expect(map.getCell(1, 1)).toEqual('L');
  });

  it('should return false when setting a non-length 1 cell value', () => {
    const map = new Map(defaultMap);

    expect(map.setCell(0, 0, 'foo')).toEqual(false);
  })

  it(`should count number of filled ('#') seats`, () => {
    const map = new Map(['L#.L#', '##L..']);

    expect(map.countFilledSeats()).toEqual(4);
  });

  it('should calculate the number of neighbors of a cell (\'#\' cells)', () => {
    const map = new Map([
      '#.#',
      '##.',
      '#..',
    ]);

    expect(map.countNeighbors(0, 0)).toEqual(3);
    expect(map.countNeighbors(0, 2)).toEqual(2);
    expect(map.countNeighbors(2, 0)).toEqual(3);
    expect(map.countNeighbors(2, 2)).toEqual(1);
    expect(map.countNeighbors(1, 1)).toEqual(5);
  })
});
