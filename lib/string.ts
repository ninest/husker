export const pluralize = (count: number, word: string) => {
  if (count != 1) return `${word}s`;
  else return word;
};
