import {Map} from '../src/map';

export class MapA extends Map {
  public countNeighbors(row: number, col: number): number {
    const topRow = Math.max(row - 1, 0);
    const bottomRow = Math.min(row + 1, this.getMapHeight() - 1);
    const leftCol = Math.max(col - 1, 0);
    const rightCol = Math.min(col + 1, this.getMapWidth() - 1);

    return [
      ...this.map.slice(topRow, bottomRow + 1)
          .map((row) => row.slice(leftCol, rightCol + 1))
          .join('')
    ].reduce((count, char) => {
      return char === '#' ? count + 1 : count;
    }, 0);
  }
}
