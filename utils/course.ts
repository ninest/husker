export function isCourse(query: string): boolean {
  let numbersStartAtIndex = -1;

  const characters = query.replaceAll(" ", "");
  const listOfChars = characters.split("");

  for (const [index, char] of listOfChars.entries()) {
    if (isNumeric(char)) {
      numbersStartAtIndex = index;
    }
  }

  // All chars before numbersStartAtIndex should be letters
  // All chars after should be numeric
  const before = characters.slice(0, numbersStartAtIndex);
  const after = characters.slice(numbersStartAtIndex);

  return isLetter(before) && isNumeric(after);
}

interface Course {
  code: String;
  number: Number;
}

function isLetter(maybeLetters: string): boolean {
  return !!maybeLetters.match(/[a-z]/i);
}

function isNumeric(maybeNumber: string): boolean {
  return !!maybeNumber.trim() && !isNaN(+maybeNumber);
}
