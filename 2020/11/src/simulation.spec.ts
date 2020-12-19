import {Simulation} from './simulation';

describe('Simulation', () => {
  let sim: Simulation;
  const defaultMap: string[] = [
    '#.##.',
    '#####',
    '#.#.#',
  ];

  beforeEach(() => {
    sim = new Simulation();
  });

  it('should load a map and calculate map sizes', () => {
    sim.loadMap(defaultMap);

    expect(sim.getMap()).toEqual(defaultMap);
  });

  it('should initialize sim time to 0', () => {
    expect(sim.getSimTime()).toEqual(0);
  });

  it('should reset sim time when loading map', () => {
    sim.loadMap(defaultMap);
    sim.run();

    sim.loadMap([]);
    expect(sim.getSimTime()).toEqual(0);
  });

  it(`should count number of filled ('#') seats`, () => {
    sim.loadMap(['L#.L#', '##L..']);

    expect(sim.countFilledSeats()).toEqual(4);
  });

  describe('Run', () => {
    it('should increment game time', () => {
      sim.loadMap([]);
      sim.run();

      expect(sim.getSimTime()).toEqual(1);
    });

    it('should fill empty seats no neighbors', () => {
      sim.loadMap(['#L.L']);
      sim.run();

      expect(sim.getMap()).toEqual(['#L.#']);
    });

    it('should vacate filled seats with 4 or more neighbors', () => {
      sim.loadMap([
        '.#.',
        '###',
        '.#.',
      ]);
      sim.run();

      expect(sim.getMap()).toEqual([
        '.#.',
        '#L#',
        '.#.',
      ]);
    });

    it.only('should return the number of seats changed this tick', () => {
      sim.loadMap([
        '###.',
        '.#..',
        '#..L',
      ]);

      // [1, 1] is vacated, [2, 3] is filled
      expect(sim.run()).toEqual(2);
    });
  });
});
