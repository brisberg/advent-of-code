export interface Rule {
  label: string;
  // Mapping of number of bags of a given label contained in this bag
  contains: {[label: string]: number};
}

export function parse(input: string): Rule {
  const [label, rest] = input.split(' bags contain ');
  const rule: Rule = {label, contains: {}};

  const subbags = rest.substr(0, rest.length - 1).split(', ');

  if (subbags.length >= 1 && subbags[0] !== 'no other bags') {
    subbags.forEach((subbag) => {
      const parts = subbag.split(' ');
      const count = parseInt(parts[0]);
      const sublabel = parts.slice(1, -1).join(' ');

      rule.contains[sublabel] = count;
    });
  }

  return rule;
}
