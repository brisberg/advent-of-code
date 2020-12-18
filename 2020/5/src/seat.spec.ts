import {Seat} from './seat';

describe('Seat Class', () => {
  it('should save the raw boarding code', () => {
    const seat = new Seat('FFBBFFBLRL');
    expect(seat.getRawBoardingCode()).toEqual('FFBBFFBLRL');
  });

  it('should calculate seat position', () => {
    const seat = new Seat('FFBBFFBLRL');

    // Row = 0011001 = 25
    // Col = 010 = 2

    expect(seat.getPosition()).toEqual([25, 2]);
  });

  it('should calculate ID', () => {
    const seat = new Seat('FFBBFFBLRL');

    // Row = 0011001 = 25
    // Col = 010 = 2

    expect(seat.getID()).toEqual(202);
  });
});
