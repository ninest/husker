interface Subject {
  code: string;
  description: string;
}

export const getSubjects = async (term: string): Promise<Subject[]> => {
  // TODO: use URLSearchParams
  const response = await fetch(
    `https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classSearch/get_subject?searchTerm=&term=${term}&offset=1&max=400` // 400 to get all
  );
  const terms = await response.json();
  return terms;
};

export const getSubject = async (
  term: string,
  code: string
): Promise<Subject | undefined> => {
  const response = await fetch(
    `https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classSearch/get_subject?searchTerm=${code}&term=${term}&offset=1&max=400` // 400 to get all
  );
  const subjects: Subject[] = await response.json();

  return subjects.find(
    (subject) => subject.code.toLowerCase() == code.toLowerCase()
  );
};
