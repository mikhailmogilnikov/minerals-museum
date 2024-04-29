export const findByKeyword = (keyword: string, word: string) =>
  word.toLowerCase().includes(keyword.toLowerCase());
