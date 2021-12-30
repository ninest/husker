export function getFileNameExtension(filepath: string) {
  /* Split at last index of "." */
  const lastIndex = filepath.lastIndexOf(".");
  return {
    fileName: filepath.substr(0, lastIndex),
    extension: filepath.substr(lastIndex),
  };
}
