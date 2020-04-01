export const firstLetterToUpperCase = (string: string): string => {
  const stringInLowerCase = string.toLowerCase();

  // eslint-disable-next-line no-magic-numbers
  return stringInLowerCase.charAt(0).toUpperCase() + stringInLowerCase.slice(1);
};
