import {assert} from 'console';
import {ExecutionResult, Processor} from './processor';

describe('Processor', () => {
  describe('Accumulator', () => {
    it('should initialize accumulator to 0', () => {
      const proc = new Processor([]);
      expect(proc.getAcc()).toEqual(0);
    });
  });

  describe('Execution', () => {
    it('should return OK for normal instruction', () => {
      const proc = new Processor(['nop +0']);

      expect(proc.execute()).toEqual(ExecutionResult.OK);
    });

    it('should return with FINISHED when execution program is complete', () => {
      const proc = new Processor(['nop +0', 'nop +0']);
      proc.execute();
      proc.execute();

      expect(proc.execute()).toEqual(ExecutionResult.FINISHED);
    });

    it('should return with ERR_INVALID_INST when an unknown cmd', () => {
      const proc = new Processor(['foo +5']);

      expect(proc.execute()).toEqual(ExecutionResult.ERR_INVALID_INST);
    });

    it('should return with ERR_INVALID_INST when a malformed value', () => {
      const proc = new Processor(['acc +foo']);

      expect(proc.execute()).toEqual(ExecutionResult.ERR_INVALID_INST);
    });

    it('should return with ERR_INFINITE_LOOP when a loop is encountered',
       () => {
         const proc = new Processor(['acc +5', 'jmp -1']);
         proc.execute();  // acc +5
         proc.execute();  // jmp -1

         expect(proc.execute()).toEqual(ExecutionResult.ERR_INFINITE_LOOP);
       });
  });

  describe('Instruction Set', () => {
    describe('acc', () => {
      it('should increase the accumulator value', () => {
        const proc = new Processor(['acc +5']);
        proc.execute();

        expect(proc.getAcc()).toEqual(5);
      });

      it('should decrease the accumulator value', () => {
        const proc = new Processor(['acc -5']);
        proc.execute();

        expect(proc.getAcc()).toEqual(-5);
      });

      it('should proceed to the next instruction', () => {
        const proc = new Processor(['acc +5', 'acc +10']);
        proc.execute();  // acc +5
        assert(proc.getAcc() === 5);

        proc.execute();  // acc +10
        expect(proc.getAcc()).toEqual(15);
      });
    });

    describe('jmp', () => {
      it('should not affect the accumulator value', () => {
        const proc = new Processor(['jmp +5']);
        proc.execute();

        expect(proc.getAcc()).toEqual(0);
      });

      it('should offset the current instruction by positive value', () => {
        const proc = new Processor(['jmp +2', 'acc -5', 'acc +5']);
        proc.execute();  // 0: jmp +2
        assert(proc.getAcc() === 0);

        proc.execute();  // 2: acc +5
        expect(proc.getAcc()).toEqual(5);
      });

      it('should offset the current instruction by negative value', () => {
        const proc = new Processor(['jmp +2', 'acc +5', 'jmp -1']);
        proc.execute();  // 0: jmp +2
        assert(proc.getAcc() === 0);

        proc.execute();  // 2: jmp -1
        assert(proc.getAcc() === 0);

        proc.execute();  // 1: acc +5
        expect(proc.getAcc()).toEqual(5);
      });
    });

    describe('nop', () => {
      it('should not affect the accumulator value', () => {
        const proc = new Processor(['nop +5']);
        proc.execute();

        expect(proc.getAcc()).toEqual(0);
      });

      it('should proceed to the next instruction', () => {
        const proc = new Processor(['nop +5', 'acc +10']);
        proc.execute();  // nop +5
        assert(proc.getAcc() === 0);

        proc.execute();  // acc +10
        expect(proc.getAcc()).toEqual(10);
      });
    });
  });

  interface ProcessorTestCase {
    program: string[];
    lastResult: ExecutionResult;
    acc: number;
  }

  describe('Test Programs', () => {
    const testCases: Array<[string, ProcessorTestCase]> = [
      [
        'simple accumulation program', {
          program: ['acc +1', 'acc +2', 'acc +3'],
          lastResult: ExecutionResult.FINISHED,
          acc: 6,
        }
      ],
      [
        'simple acc / no-op program', {
          program: ['nop +1', 'acc +2', 'nop +3'],
          lastResult: ExecutionResult.FINISHED,
          acc: 2,
        }
      ],
      [
        'simple jump program', {
          program: ['jmp +1', 'jmp +2', 'acc +3', 'nop +0'],
          lastResult: ExecutionResult.FINISHED,
          acc: 0,
        }
      ],
      [
        'simple loop program', {
          program: ['acc +1', 'acc +2', 'jmp -2'],
          lastResult: ExecutionResult.ERR_INFINITE_LOOP,
          acc: 3,
        }
      ],
      [
        'malformed instruction', {
          program: ['acc +1', 'foo +2', 'jmp -2'],
          lastResult: ExecutionResult.ERR_INVALID_INST,
          acc: 1,
        }
      ],
      [
        'malformed value', {
          program: ['acc +1', 'acc +2', 'jmp -foo'],
          lastResult: ExecutionResult.ERR_INVALID_INST,
          acc: 3,
        }
      ]
    ]
    it.each(testCases)('should %s', (name, test) => {
      const processor = new Processor(test.program);

      let lastResult = ExecutionResult.OK;
      while (lastResult === ExecutionResult.OK) {
        lastResult = processor.execute();
      }

      expect(lastResult).toEqual(test.lastResult);
      expect(processor.getAcc()).toEqual(test.acc);
    });
  });
});
