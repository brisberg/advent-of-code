/**
 * Specialized PuzzleFunction for Puzzle 13.A.
 *
 * Step forward in time, searching for a number which is an even factor of one
 * of the input buses.
 */
export function puzzleA(inputs: string[]): number {
  if (inputs.length !== 2) {
    throw new Error(
        `Inputs malformed. Expecting two lines denoting 'start time' and active bus lines.`)
  }

  const startTime = parseInt(inputs[0]);
  const buses = inputs[1]
                    .split(',')
                    .map((bus) => parseInt(bus))
                    .filter((num) => !isNaN(num));

  let currTime = startTime;
  while (true) {
    for (const bus of buses) {
      if (currTime % bus === 0) {
        console.log(`Starting at ${
            startTime}, the first bus to leave for the airport is #${
            bus} at time ${currTime}.`);
        return calcResult(startTime, currTime, bus);
      }
    }
    currTime++;
  }
}

function calcResult(startTime: number, currTime: number, bus: number): number {
  return (currTime - startTime) * bus;
}
