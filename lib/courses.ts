export const descriptionToList = (description: string) => {
  return description
    .trim()
    .split(".")
    .map((sentence) => sentence.trim())
    .filter(Boolean);
};
