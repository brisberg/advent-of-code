import {Directions, Ferry, Position, Rules} from '../src/ferry';

export const OrderedDirections: Position[] = [
  Directions.North,
  Directions.East,
  Directions.South,
  Directions.West,
];

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
    const currDir = OrderedDirections.findIndex((pos) => {
      return pos[0] === this.waypoint[0] && pos[1] === this.waypoint[1];
    });
    const numDirs = OrderedDirections.length;
    const newDir = OrderedDirections[(currDir + turns) % numDirs];
    this.waypoint = [...newDir];
  },
  'L': function(this: Ferry, degrees: number): void {
    const turns = Math.floor(degrees / 90);
    const currDir = OrderedDirections.findIndex((pos) => {
      return pos[0] === this.waypoint[0] && pos[1] === this.waypoint[1];
    });
    const numDirs = OrderedDirections.length;
    const newDir = OrderedDirections[(currDir - turns + numDirs) % numDirs];
    this.waypoint = [...newDir];
  },
  'F': function(this: Ferry, dist: number): void {
    this.position[0] += dist * this.waypoint[0];
    this.position[1] += dist * this.waypoint[1];
  },
};
