import * as path from 'path';
import {executePuzzle} from '../../common/launcher';
import {puzzle} from '../src/puzzle';
import {validate} from './validator';

executePuzzle(path.resolve(__dirname, '../input.txt'), puzzle(validate));
