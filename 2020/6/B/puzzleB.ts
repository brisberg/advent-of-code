import {intersectionAnswers} from '../src/groupEntry';
import {readGroups} from '../src/groupReader';

/**
 * Specialized PuzzleFunction for Puzzle 6.B.
 *
 * Reads all group entries from the inputs. Computes their intersection answers
 * and sums the lengths of those answers.
 */
export function puzzleB(inputs: string[]): number {
  const answers = readGroups(inputs).map(intersectionAnswers);
  return answers.reduce((sum, answer) => sum + answer.length, 0);
}
