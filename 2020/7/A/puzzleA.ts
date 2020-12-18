import {parse} from '../src/rule';

/**
 * Specialized PuzzleFunction for Puzzle 7.A.
 *
 * Read all rule inputs, builds a bag dependency tree, reads the containers of
 * 'shiny gold' bags. Returns the count of these containing bags.
 */
export function puzzleA(inputs: string[]): number {
  const rules = inputs.map(parse);

  // Inverse mapping. Mapping a bag label to the bag labels which can directly
  // contain it.
  const canBeContainedIn: {[label: string]: string[]} = {};

  // Build inverse mapping
  rules.forEach((rule) => {
    Object.keys(rule.contains).forEach((sublabel) => {
      if (!canBeContainedIn[sublabel]) {
        canBeContainedIn[sublabel] = [];
      }
      canBeContainedIn[sublabel].push(rule.label);
    });
  });

  // Recursively search container map to exhaust all top level bags
  const labelsToCheck = new Set(['shiny gold']);
  const resultSet = new Set<string>();
  while (labelsToCheck.size > 0) {
    const label: string = labelsToCheck.values().next().value;
    labelsToCheck.delete(label);

    const containers = canBeContainedIn[label];

    if (containers) {
      containers.forEach((container) => {
        labelsToCheck.add(container);
        resultSet.add(container);
      });
    }
  }

  const results = Array.from(resultSet);
  console.log(`Top-level bags which can contain 'shiny gold' bags are:\n${
      results.join(', ')}`);
  return results.length;
}
