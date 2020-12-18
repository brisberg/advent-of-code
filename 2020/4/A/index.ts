import * as path from 'path';
import {executePuzzle} from '../../common/launcher';
import {puzzleA} from './puzzleA';

executePuzzle(path.resolve(__dirname, '../input.txt'), puzzleA);
