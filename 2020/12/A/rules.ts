import {DirectionCommands, Ferry, Rules} from '../src/ferry';

export const PartARules: Rules = {
  'N': function(this: Ferry, dist: number): void {
    this.position[1] += dist;
  },
  'E': function(this: Ferry, dist: number): void {
    this.position[0] += dist;
  },
  'S': function(this: Ferry, dist: number): void {
    this.position[1] -= dist;
  },
  'W': function(this: Ferry, dist: number): void {
    this.position[0] -= dist;
  },
  'R': function(this: Ferry, degrees: number): void {
    const turns = Math.floor(degrees / 90);
    this.orientation = (this.orientation + turns) % 4;
  },
  'L': function(this: Ferry, degrees: number): void {
    const turns = Math.floor(degrees / 90);
    this.orientation = (this.orientation - turns + 4) % 4;
  },
  'F': function(this: Ferry, dist: number): void {
    PartARules[DirectionCommands[this.orientation]].bind(this)(dist);
  },
};
