
// Typedef for a Row, Column tuple
export type Position = [number, number];

export class Seat {
  private rawBoardingCode: string;
  private position: Position;
  private ID: number;

  public constructor(boardingCode: string) {
    this.rawBoardingCode = boardingCode;
    this.position = Seat.calculatePosition(boardingCode);
    this.ID = Seat.calculateID(this.position);
  }

  public getRawBoardingCode(): string {
    return this.rawBoardingCode;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getID(): number {
    return this.ID;
  }

  public static compareTo(a: Seat, b: Seat) {
    if (a.getID() === b.getID()) {
      return 0;
    }
    return a.getID() < b.getID() ? -1 : 1;
  }

  private static calculatePosition(boardingCode: string): Position {
    let row = 0;
    for (let i = 0; i < 7; i++) {
      row = row << 1;
      if (boardingCode.charAt(i) === 'B') {
        row++;
      }
    }

    let col = 0;
    for (let i = 7; i < 10; i++) {
      col = col << 1;
      if (boardingCode.charAt(i) === 'R') {
        col++;
      }
    }

    return [row, col];
  }

  private static calculateID(position: Position): number {
    return position[0] * 8 + position[1];
  }
}
