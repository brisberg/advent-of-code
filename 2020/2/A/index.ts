import * as path from 'path';
import {executePuzzle} from '../../common/launcher';
import {PasswordProcessor} from '../src/passwordProcessor';
import {validatePasswordA} from '../src/validators';

executePuzzle(
    path.resolve(__dirname, '../input.txt'),
    PasswordProcessor(validatePasswordA),
);
