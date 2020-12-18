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
