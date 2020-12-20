import {Map} from '../src/map';

export class MapA extends Map {
  public countNeighbors(row: number, col: number): number {
    // Possible directions to search.
    const dirs =
        [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    let neighbors = 0;
    for (const dir of dirs) {
      const rowT = row + dir[0];
      const colT = col + dir[1];

      if (this.inBounds(rowT, colT)) {
        const char = this.getCell(rowT, colT);
        if (char === '#') {
          neighbors++;
        }
      }
    }

    return neighbors;
  }
}
