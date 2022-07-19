interface Subject {
  code: string;
  description: string;
}

export const getSubjects = async (term: number): Promise<Subject[]> => {
  const response = await fetch(
    `https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classSearch/get_subject?searchTerm=&term=${term}&offset=1&max=400` // 400 to get all
  );
  const terms = await response.json();
  return terms;
};
