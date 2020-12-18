import {parse, Rule} from '../src/rule';

/**
 * Specialized PuzzleFunction for Puzzle 7.B.
 *
 * Read all rule inputs, builds a bag dependency tree (with bag counts), reads
 * the containers of 'shiny gold' bags. Returns the count of these containing
 * bags.
 */
export function puzzleB(inputs: string[]): number {
  const rules = inputs.map(parse);

  // Generate a hash map of rules
  const rulesMap: {[label: string]: Rule} = {};
  rules.forEach((rule) => rulesMap[rule.label] = rule);

  // Cache of partially materialized counts. As we compute how many bags are
  // contained within a bag of a particular label, annotate it here
  const partialCounts: {[label: string]: number} = {};

  // Recursively search container map to exhaust all top level bags
  const result = auxCountBags('shiny gold', rulesMap, partialCounts);

  console.log(`'shiny gold' bags must contain a total of ${result} other bags`);
  return result;
}

function auxCountBags(
    label: string, rulesMap: {[label: string]: Rule},
    partialCounts: {[label: string]: number}): number {
  if (partialCounts[label] !== undefined) {
    return partialCounts[label];
  }

  const rule = rulesMap[label];
  if (!rule || rule.contains == {}) {
    partialCounts[label] = 0;
    return 0;
  }

  // Recurse into contained bags
  const subCounts = Object.keys(rule.contains).map((sublabel) => {
    return rule.contains[sublabel] *
        (auxCountBags(sublabel, rulesMap, partialCounts) + 1);
  });
  const sum = subCounts.reduce((sum, val) => sum + val, 0);
  partialCounts[label] = sum;
  return sum;
}
