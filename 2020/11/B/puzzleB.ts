import {Simulation} from '../src/simulation';
import {MapB} from './mapB';

/**
 * Specialized PuzzleFunction for Puzzle 11.B.
 *
 * Sets up the simulation with MapB and different seat fill values.
 */
export function puzzleB(inputs: string[]): number {
  const sim = new Simulation(0, 5);
  sim.loadMap(new MapB(inputs));

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
