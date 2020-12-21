import {Ferry, Position, Rules} from '../src/ferry';

export const PartBRules: Rules = {
  'N': function(this: Ferry, dist: number): void {
    this.waypoint[1] += dist;
  },
  'E': function(this: Ferry, dist: number): void {
    this.waypoint[0] += dist;
  },
  'S': function(this: Ferry, dist: number): void {
    this.waypoint[1] -= dist;
  },
  'W': function(this: Ferry, dist: number): void {
    this.waypoint[0] -= dist;
  },
  'R': function(this: Ferry, degrees: number): void {
    const turns = Math.floor(degrees / 90);
    for (let i = 0; i < turns; i++) {
      this.waypoint = [this.waypoint[1], -this.waypoint[0]];
    }
    // const newDir: Position = [0, 0];
    // switch (turns % 4) {
    //   case 1:
    //     newDir[0] = this.waypoint[1];
    //     newDir[1] = this.waypoint[0] * -1;
    //     break;
    //   case 2:
    //     newDir[0] = this.waypoint[0] * -1;
    //     newDir[1] = this.waypoint[1] * -1;
    //     break;
    //   case 3:
    //     newDir[0] = this.waypoint[1] * -1;
    //     newDir[1] = this.waypoint[0];
    //     break;
    // }
    // this.waypoint = newDir;
    // if (turns % 2 === 0) {
    //   this.waypoint[0] *= -1;
    // }
    // if (Math.floor(turns / 2) === 0) {
    //   this.waypoint[1] *= -1;
    // }
  },
  'L': function(this: Ferry, degrees: number): void {
    const turns = Math.floor(degrees / 90);
    for (let i = 0; i < turns; i++) {
      this.waypoint = [-this.waypoint[1], this.waypoint[0]];
    }
    // const newDir: Position = [0, 0];
    // switch (turns % 4) {
    //   case 1:
    //     newDir[0] = this.waypoint[1];
    //     newDir[1] = this.waypoint[0] * -1;
    //     break;
    //   case 2:
    //     newDir[0] = this.waypoint[1] * -1;
    //     newDir[1] = this.waypoint[0] * -1;
    //     break;
    //   case 3:
    //     newDir[0] = this.waypoint[1] * -1;
    //     newDir[1] = this.waypoint[0];
    //     break;
    // }
    // this.waypoint = newDir;
    // if (Math.floor(turns / 2) === 0) {
    //   this.waypoint[0] *= -1;
    // }
    // if (turns % 2 === 0) {
    //   this.waypoint[1] *= -1;
    // }
  },
  'F': function(this: Ferry, dist: number): void {
    this.position[0] += dist * this.waypoint[0];
    this.position[1] += dist * this.waypoint[1];
  },
};
