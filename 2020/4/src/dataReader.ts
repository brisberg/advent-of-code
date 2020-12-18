/**
 * Data Reader package contains util function to split a series of data strings
 * into Passport entries.
 */

/**
 * readPassportEntries splits data lines into Passport entries.
 * Each passport is separated by an empty line.
 */
export function readPassportEntries(inputs: string[]): string[] {
  const passportEntrys: string[] = [];
  let entryLines: string[] = [];

  for (let i = 0; i < inputs.length; i++) {
    const line = inputs[i];

    if (line === '') {
      passportEntrys.push(entryLines.join(' '));
      entryLines = [];
    } else {
      entryLines.push(line);
    }
  }
  // Pick up last entry if file does not end in a blank line
  passportEntrys.push(entryLines.join(' '));

  return passportEntrys;
}
