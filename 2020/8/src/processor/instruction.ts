/**
 * Struct representing a single parsed instruction for the Processor to
 * execute.
 */
export interface Instruction {
  cmd: string;
  val: number;
}

/**
 * parseInstructions takes a set of textual instructions and converts them to
 * parsed Instruction objects.
 */
export function parseInstructions(inputs: string[]): Instruction[] {
  return inputs.map(parseInstruction);
}

/**
 * parseInstructions takes a line of textual instructions and converts it to
 * a parsed Instruction object.
 */
export function parseInstruction(input: string): Instruction {
  const parts = input.split(' ');

  if (parts.length !== 2) {
    throw new Error(`Malformed Instruction: '${input}'`);
  }

  return {
    cmd: parts[0], val: parseInt(parts[1]),
  }
}
