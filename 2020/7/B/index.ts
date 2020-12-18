import * as path from 'path';

import {executePuzzle} from '../../common/launcher';

import {puzzleB} from './puzzleB';

executePuzzle(path.resolve(__dirname, '../input.txt'), puzzleB);
