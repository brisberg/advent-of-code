import {Map} from './map';

/** Simulation class accepts a map and repeatedly applies seat update rules. */

export class Simulation {
  // Array of strings representing the current state of the map.
  private map: Map;
  // Step count of simulation
  private time: number = 0;

  // Simulation Rules
  private readonly SeatFillLimit: number;
  private readonly SeatVacateLimit: number;

  public constructor(seatFillLimit = 0, seatVacateLimit = 4) {
    this.SeatFillLimit = seatFillLimit;
    this.SeatVacateLimit = seatVacateLimit;
  }

  /** Loads a copy of the given map into the simulator */
  public loadMap(map: Map): void {
    this.map = map;
    this.time = 0;
  }

  /** Get the current simulation step time */
  public getSimTime(): number {
    return this.time;
  }

  /** Get the number of filled seats in the current map */
  public countFilledSeats(): number {
    return this.map.countFilledSeats();
  }

  /** Returns a copy of the current map. */
  public getMap(): string[] {
    return this.map.getTextMap();
  }

  /**
   * Execute one update tick of the simulation.
   * Returns the number of seats changed this tick.
   */
  public run(): number {
    this.time++;
    // Count the number of seats changed
    let changes = 0;

    const nextMap = [];

    for (let row = 0; row < this.map.getMapHeight(); row++) {
      for (let col = 0; col < this.map.getMapWidth(); col++) {
        const char = this.map.getCell(row, col);

        if (char === '.') {
          nextMap.push('.')
        } else {
          const neighbors = this.map.countNeighbors(row, col);
          if (char === 'L') {
            if (neighbors === this.SeatFillLimit) {
              nextMap.push('#');
              changes++;
            } else {
              nextMap.push('L')
            }
          } else if (char === '#') {
            if (neighbors >= this.SeatVacateLimit) {
              nextMap.push('L');
              changes++;
            } else {
              nextMap.push('#')
            }
          }
        }
      }
    }

    nextMap.forEach((cell, index) => {
      this.map.setCell(
          Math.floor(index / this.map.getMapWidth()),
          index % this.map.getMapWidth(),
          cell,
      );
    });
    return changes;
  }
}
