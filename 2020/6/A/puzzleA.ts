import {unionAnswers} from '../src/groupEntry';
import {readGroups} from '../src/groupReader';

/**
 * Specialized PuzzleFunction for Puzzle 6.A.
 *
 * Reads all group entries from the inputs. Computes their union answers and
 * sums the lengths of those answers.
 */
export function puzzleA(inputs: string[]): number {
  const answers = readGroups(inputs).map(unionAnswers);
  return answers.reduce((sum, answer) => sum + answer.length, 0);
}
