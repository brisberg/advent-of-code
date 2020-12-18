import {parseInstructions} from './instruction';

describe('parseInstructions', () => {
  it('should return empty list for empty input', () => {
    expect(parseInstructions([])).toEqual([]);
  });

  it('should parse a series of istructions', () => {
    const inputs = ['nop +0', 'acc +1', 'jmp +4'];
    const insts = parseInstructions(inputs);

    expect(insts).toHaveLength(3);
  });

  it('should parse the command of an instruction', () => {
    const insts = parseInstructions(['acc +43']);

    expect(insts[0].cmd).toEqual('acc');
  });

  it('should parse the value of an instruction with a positive value', () => {
    const insts = parseInstructions(['acc +43']);

    expect(insts[0].val).toEqual(43);
  });

  it('should parse the value of an instruction with a negative value', () => {
    const insts = parseInstructions(['acc +43']);

    expect(insts[0].val).toEqual(43);
  });

  it('should parse the value a malformed instruction value as NaN', () => {
    const insts = parseInstructions(['acc +foo43']);

    expect(insts[0].val).toEqual(NaN);
  });

  it('should throw an error when parsing a malformed instruction', () => {
    const test = () => parseInstructions(['errfoobar']);

    expect(test).toThrow('Malformed Instruction: \'errfoobar\'')
  });
});
