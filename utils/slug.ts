export function slugify(text: string | number): string {
  // https://github.com/dorumrr/npmjs-slugster/blob/master/index.js
  return text.toString().toLowerCase().trim().replace(/\s+/g, "-");
}
