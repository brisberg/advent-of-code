import {parse} from './rule';

describe('Rule', () => {
  describe('Parse', () => {
    it('should parse the label of the containing bag', () => {
      const input =
          'light red bags contain 1 bright white bag, 2 muted yellow bags.';

      const rule = parse(input);
      expect(rule.label).toEqual('light red');
    });

    it('should parse a rule which contains no bags', () => {
      const input = 'faded blue bags contain no other bags.'

      const rule = parse(input);
      expect(rule.contains).toEqual({});
    });

    it('should parse a rule with a single sub bag type', () => {
      const input = 'bright white bags contain 1 shiny gold bag.'

      const rule = parse(input);
      expect(rule.contains).toEqual({'shiny gold': 1})
    });

    it('should parse a rule with multiple sub bag types', () => {
      const input =
          'light red bags contain 1 bright white bag, 2 muted yellow bags.';

      const rule = parse(input);
      expect(rule.contains).toEqual({'bright white': 1, 'muted yellow': 2});
    });
  });
});
