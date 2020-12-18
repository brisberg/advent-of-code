import * as path from 'path';
import {executePuzzle} from '../../common/launcher';
import {puzzleB} from './puzzleB';

// PuzzleB is exactly the same, except using a slightly different input
executePuzzle(path.resolve(__dirname, '../input.txt'), puzzleB);
