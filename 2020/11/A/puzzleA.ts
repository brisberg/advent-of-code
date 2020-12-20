import {Simulation} from '../src/simulation';
import {MapA} from './mapA';

/**
 * Specialized PuzzleFunction for Puzzle 11.A.
 *
 * Sets up the simulation with MapA and default seat fill values.
 */
export function puzzleA(inputs: string[]): number {
  const sim = new Simulation(0, 4);
  sim.loadMap(new MapA(inputs));

  let lastChanged = Infinity;
  while (lastChanged !== 0) {
    if (sim.getSimTime() > 200) {
      throw new Error(`Timeout. Simulation did not settle after ${
          sim.getSimTime()} ticks.`);
    }

    lastChanged = sim.run();
  }

  const seats = sim.countFilledSeats();
  console.log(`After ${sim.getSimTime()} ticks, the map stabilized with ${
      seats} seats filled.`);
  return seats;
}
