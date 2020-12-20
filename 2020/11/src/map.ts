/** Enum representing the possible values of each cell. */
// export enum CellValue {
//   Floor = '.',
//   Seat = 'L',
//   Occupant = '#',
// }

/**
 * Map class contains an encoding of the current map. As well as utilities for
 * querying and modifying that map.
 *
 */
export abstract class Map {
  // Local representation of the map.
  // Each string is a horizontal row of the map.
  // Each character is a cell in each column.
  protected map: string[] = [];

  public constructor(map: string[]) {
    this.map = [...map];
  }

  /** Returns a copy of the current map in text format. (i.e '#L.') */
  public getTextMap(): string[] {
    return [...this.map];
  }

  /** Row height of the loaded map */
  public getMapHeight(): number {
    return this.map.length;
  }

  /** Column width of the loaded map */
  public getMapWidth(): number {
    if (this.map.length === 0) {
      return 0;
    }

    return this.map[0].length;
  }

  public getCell(row: number, col: number): string {
    return this.map[row].charAt(col);
  }

  public setCell(row: number, col: number, value: string): boolean {
    if (value.length !== 1) {
      return false;
    }

    const mapRow = this.map[row];

    this.map[row] = [
      mapRow.substr(0, col),
      value,
      mapRow.substr(col + 1),
    ].join('');

    return true;
  }

  /** Counts filled neighbots (includes the requested cell in the count) */
  public abstract countNeighbors(row: number, col: number): number;

  /** Get the number of filled seats in the current map */
  public countFilledSeats(): number {
    return this.map.reduce((sum, row) => {
      return sum + [...row].reduce((sum, char) => {
        return char === '#' ? sum + 1 : sum;
      }, 0);
    }, 0);
  }
}
