export interface Rule {
  label: string;
  // Mapping of number of bags of a given label contained in this bag
  contains: {[label: string]: number};
}

export function parse(input: string): Rule {
  return {label: 'red', contains: {}};
}
