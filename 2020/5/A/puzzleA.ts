import {Seat} from '../src/seat';

/** Specialized PuzzleFunction to solve Puzzle 5.A */
export function puzzleA(inputs: string[]): number {
  const seats = inputs.map((code) => new Seat(code)).sort(Seat.compareTo);
  return seats.pop().getID();
}
