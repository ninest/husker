export function isCourse(query: string): boolean {
  let nums = 0;

  query.split("").forEach((char) => {
    if (isNumeric(char)) nums++;
  });

  // Last 2 chars should also be numbers
  const lastTwo = query.slice(query.length - 2, query.length);

  return nums >= 2 && isNumeric(lastTwo);
}

interface Course {
  code: String;
  number: Number;
}
export function cleanCourse(query: string): Course {
  // Find the course code followed by the number;
  let splitIndex = 0;
  for (let [index, char] of query.split("").entries()) {
    if (isNumeric(char)) {
      splitIndex = index;
      break;
    }
  }

  const code = query.substring(0, splitIndex).trim().toUpperCase();
  const number = +query.substring(splitIndex, query.length).trim();
  return { code, number };
}

function isNumeric(maybeNumber: string): boolean {
  return !!maybeNumber.trim() && !isNaN(+maybeNumber);
}
