import {Position} from '../A/ferry';
import {manhattenDistance} from './manhatten-distance';

type TestCase = [string, ManhattenDistTestCase];

interface ManhattenDistTestCase {
  input: Position;
  expected: number;
}

describe('manhattenDistance', () => {
  const testCases: TestCase[] = [
    ['north east quadrant', {input: [3, 5], expected: 8}],
    ['south east quadrant', {input: [-4, 5], expected: 9}],
    ['north west quadrant', {input: [3, -1], expected: 4}],
    ['south west quadrant', {input: [-8, 4], expected: 12}],
  ];
  it.each(testCases)('$s', (name, test) => {
    expect(manhattenDistance(test.input)).toBe(test.expected);
  });
});
