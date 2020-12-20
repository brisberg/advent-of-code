import {Dir, Ferry} from '../src/ferry';
import {PartARules} from './rules';

describe('Part A Rules', () => {
  let ferry: Ferry;

  beforeEach(() => {
    ferry = new Ferry([0, 0], Dir.North, PartARules);
  });

  it(`should move North given a 'N' instruction.`, () => {
    ferry.execute('N5');

    expect(ferry.getPosition()).toEqual([0, 5]);
    expect(ferry.getDirection()).toEqual(Dir.North);
  });

  it(`should move East given a 'E' instruction.`, () => {
    ferry.execute('E4');

    expect(ferry.getPosition()).toEqual([4, 0]);
    expect(ferry.getDirection()).toEqual(Dir.North);
  });

  it(`should move South given a 'S' instruction.`, () => {
    ferry.execute('S6');

    expect(ferry.getPosition()).toEqual([0, -6]);
    expect(ferry.getDirection()).toEqual(Dir.North);
  });

  it(`should move West given a 'W' instruction.`, () => {
    ferry.execute('W2');

    expect(ferry.getPosition()).toEqual([-2, 0]);
    expect(ferry.getDirection()).toEqual(Dir.North);
  });

  it(`should rotate right by 90 degrees given a 'R90' instruction.`, () => {
    ferry.execute('R90');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual(Dir.East);
  });

  it(`should rotate right by 180 degrees given a 'R180' instruction.`, () => {
    ferry.execute('R180');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual(Dir.South);
  });

  it(`should rotate right by 270 degrees given a 'R270' instruction.`, () => {
    ferry.execute('R270');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual(Dir.West);
  });

  it(`should rotate left by 90 degrees given a 'L90' instruction.`, () => {
    ferry.execute('L90');

    expect(ferry.getPosition()).toEqual([0, 0]);
    expect(ferry.getDirection()).toEqual(Dir.West);
  });

  it(`should move in the current ship direction given a 'F' instruction.`,
     () => {
       ferry.execute('F3');

       expect(ferry.getPosition()).toEqual([0, 3]);
       expect(ferry.getDirection()).toEqual(Dir.North);
     });

  it(`should move in the current ship direction given a 'F' instruction.`,
     () => {
       ferry.execute('R90');
       ferry.execute('F7');

       expect(ferry.getPosition()).toEqual([7, 0]);
       expect(ferry.getDirection()).toEqual(Dir.East);
     });
});
