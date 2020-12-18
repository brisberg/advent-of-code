/**
 * Group Reader package contains util function to split a series of data strings
 * into answer groups.
 */

import {GroupEntry} from './groupEntry';

/**
 * readGroups splits data lines into Group Answer entries.
 * Each passport is separated by an empty line.
 */
export function readGroups(inputs: string[]): GroupEntry[] {
  const groupEntries: GroupEntry[] = [];
  let entryLines: string[] = [];

  for (let i = 0; i < inputs.length; i++) {
    const line = inputs[i];

    if (line === '') {
      groupEntries.push(entryLines);
      entryLines = [];
    } else {
      entryLines.push(line);
    }
  }
  // Pick up last entry if file does not end in a blank line
  groupEntries.push(entryLines);

  return groupEntries;
}
