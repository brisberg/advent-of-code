import {Map} from '../src/map';

export class MapB extends Map {
  public countNeighbors(row: number, col: number): number {
    // Possible directions to search.
    const dirs =
        [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    let neighbors = 0;
    for (const dir of dirs) {
      let radius = 1;
      while (this.inBounds(dir[0] * radius + row, dir[1] * radius + col)) {
        const char = this.getCell(dir[0] * radius + row, dir[1] * radius + col);
        if (char === 'L') {
          break;
        }
        if (char === '#') {
          neighbors++;
          break;
        }
        radius++;
      }
    }

    return neighbors;
  }
}
