import {Seat} from './seat';

export function puzzleA(inputs: string[]): number {
  const seats = inputs.map((code) => new Seat(code)).sort(Seat.compareTo);
  return seats.pop().getID();
}
