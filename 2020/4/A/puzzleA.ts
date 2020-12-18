import {readPassportEntries} from '../src/dataReader';
import * as Passport from '../src/passport';

/**
 * Specialized PuzzleFunction which parses inputs and counts valid Passport
 * entries
 */
export function puzzleA(inputs: string[]): number {
  // Split data lines into Passport entries.
  const passportEntrys = readPassportEntries(inputs);

  const valid = passportEntrys.map((entry) => Passport.parse(entry))
                    .filter((pass) => Passport.validate(pass))
                    .length;
  console.log(`${valid}/${passportEntrys.length} Passport entries are valid.`);
  return valid;
}
