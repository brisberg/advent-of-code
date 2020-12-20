import {Map} from './map';

/** Fake Map implementation for testing */
export class MapImpl extends Map {
  public countNeighbors(row: number, col: number): number {
    return 0;
  }
}

describe('Map Class', () => {
  const defaultMap: string[] = [
    '#.##.',
    '#####',
    '#.#.#',
  ];

  it('should load a map and calculate map sizes', () => {
    const map = new MapImpl(defaultMap);

    expect(map.getTextMap()).toEqual(defaultMap);
    expect(map.getMapHeight()).toEqual(3);
    expect(map.getMapWidth()).toEqual(5);
  });

  it('should fetch the current value of a cell', () => {
    const map = new MapImpl(['.L', 'L#']);

    expect(map.getCell(0, 0)).toEqual('.');
    expect(map.getCell(0, 1)).toEqual('L');
    expect(map.getCell(1, 0)).toEqual('L');
    expect(map.getCell(1, 1)).toEqual('#');
  });

  it('should set the value of a given cell', () => {
    const map = new MapImpl(['..', '..']);

    map.setCell(1, 1, 'L');

    expect(map.getCell(1, 1)).toEqual('L');
  });

  it('should return false when setting a non-length 1 cell value', () => {
    const map = new MapImpl(defaultMap);

    expect(map.setCell(0, 0, 'foo')).toEqual(false);
  });

  it(`should count number of filled ('#') seats`, () => {
    const map = new MapImpl(['L#.L#', '##L..']);

    expect(map.countFilledSeats()).toEqual(4);
  });
});
