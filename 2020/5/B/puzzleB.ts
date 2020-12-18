import {Seat} from '../src/seat';

/** Specialized PuzzleFunction to solve Puzzle 5.B */
export function puzzleB(inputs: string[]): number {
  const seats = inputs.map((code) => new Seat(code)).sort(Seat.compareTo);

  let lastID = 0;
  for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];

    if (seat.getID() === lastID + 2) {
      // We have found the gap
      return seat.getID() - 1;
    }
    lastID = seat.getID();
  }

  throw new Error('Seat Gap not found.');
}
