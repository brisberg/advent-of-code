import {Simulation} from '../src/simulation';

/**
 * Specialized PuzzleFunction for Puzzle 10.A.
 *
 * Sorta all adapters by joltage, and counts the gaps between each.
 */
export function puzzleA(inputs: string[]): number {
  const sim = new Simulation();
  sim.loadMap(inputs);

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
