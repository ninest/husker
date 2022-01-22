export const copy = (text: string, title: string) => {
  /* Copy to clipboard, fallback to showing text in dialog */
  if (!navigator.clipboard) {
    prompt(title, text);
    return;
  }

  // Test update
  navigator.clipboard.writeText(text);
};
