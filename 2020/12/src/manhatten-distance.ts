import {Position} from './ferry';

/**
 * Calculates the manhatten distance between the origin and the given position.
 */
export function manhattenDistance(position: Position): number {
  return Math.abs(position[0]) + Math.abs(position[1])
}
