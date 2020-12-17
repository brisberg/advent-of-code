import * as path from 'path';
import {executePuzzle} from '../../common/launcher';
import {PasswordProcessor} from '../src/passwordProcessor';
import {validatePasswordB} from '../src/validators';

executePuzzle(
    path.resolve(__dirname, '../input.txt'),
    PasswordProcessor(validatePasswordB),
);
