export function capitalizeFirstLetter(str: string): string {
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1);
  return firstLetter + rest;
}
