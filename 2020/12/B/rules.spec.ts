import {Ferry} from '../src/ferry';
import {PartBRules} from './rules';

describe('Part B Rules', () => {
  let ferry: Ferry;

  beforeEach(() => {
    ferry = new Ferry([0, 0], [1, 5], PartBRules);
  });

  it(`should move the waypoint North given a 'N' instruction.`, () => {
    ferry.execute('N5');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([1, 10]);
  });

  it(`should move the waypoint East given a 'E' instruction.`, () => {
    ferry.execute('E3');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([4, 5]);
  });

  it(`should move the waypoint South given a 'S' instruction.`, () => {
    ferry.execute('S6');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([1, -1]);
  });

  it(`should move the waypoint West given a 'W' instruction.`, () => {
    ferry.execute('W2');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([-1, 5]);
  });

  it(`should rotate waypoint 90 degrees given a 'R90' instruction.`, () => {
    ferry.execute('R90');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([5, -1]);
  });

  it(`should rotate waypoint 180 degrees given a 'R180' instruction.`, () => {
    ferry.execute('R180');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([-1, -5]);
  });

  it(`should rotate waypoint 270 degrees given a 'R270' instruction.`, () => {
    ferry.execute('R270');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual([-5, 1]);
  });

  it(`should rotate waypoint 90 degrees counter-clockwise given a 'L90' instruction.`,
     () => {
       ferry.execute('L90');

       expect(ferry.getPosition()).toEqual([0, 0]);
       expect(ferry.getDirection()).toEqual([-5, 1]);
     });

  it(`should move ship towards waypoint given a 'F' instruction.`, () => {
    ferry.execute('F3');

    expect(ferry.getPosition()).toEqual([3, 15]);
    expect(ferry.getDirection()).toEqual([1, 5]);
  });
});
