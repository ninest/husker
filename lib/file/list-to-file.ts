export function listToFilepath(slug: String[]) {
  // ['hello'] -> 'hello'
  // ['hello', 'bye'] -> 'hello/bye'
  return slug.join("/");
}
