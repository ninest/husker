export const descriptionToList = (description: string) => {
  // https://stackoverflow.com/a/18914855/8677167
  return description.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
};
