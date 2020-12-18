import {PuzzleFunction} from '../../common/launcher';
import {readPassportEntries} from '../src/dataReader';
import * as Passport from '../src/passport';
import {PassportValidator} from '../src/passport';

/**
 * PuzzleFunction factory which produces a PuzzleFunction which parses inputs
 * and counts valid Passport entries based on the given validator.
 */
export function puzzle(validate: PassportValidator): PuzzleFunction {
  return (inputs: string[]) => {
    // Split data lines into Passport entries.
    const passportEntrys = readPassportEntries(inputs);

    const valid = passportEntrys.map((entry) => Passport.parse(entry))
                      .filter((pass) => validate(pass))
                      .length;
    console.log(
        `${valid}/${passportEntrys.length} Passport entries are valid.`);
    return valid;
  };
}
