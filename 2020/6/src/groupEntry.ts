/**
 * Typedef for a GroupEntry. It is an array of strings representing each
 * person's answers.
 */
export type GroupEntry = string[];

export function unionAnswers(group: GroupEntry): string {
  const answerSet = new Set<string>();

  group.forEach((answer) => {
    answer.split('').forEach((char) => answerSet.add(char));
  })

  return Array.from(answerSet.values()).join('');
}

export function intersectionAnswers(group: GroupEntry): string {
  if (group.length === 0) {
    return '';
  }

  let chars = [...group[0].split('')];
  group.slice(1).forEach((answer) => {
    chars = chars.filter((char) => {
      if (answer.indexOf(char) === -1) {
        // This answer did not answer 'yes' to this particular question.
        // Disqualify it.
        return false;
      }
      return true;
    });
  });

  return chars.join('');
}
