import { ArticleHead } from "@/components/ArticleHead";
import { getSubject, getSubjects } from "@/lib/courses/subjects";
import { getLatestTerm, getTerm } from "@/lib/courses/terms";
import { Campus, campuses } from "@/lib/courses/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: string[] = [];

  // Only NU campus for now (no law or cps)
  for await (const campus of campuses.slice(0, 1)) {
    const latestTerm = await getLatestTerm(campus);
    const subjects = await getSubjects(latestTerm?.code!);
    subjects.forEach((subject) => {
      paths.push(
        `/courses/${latestTerm?.code}/${campus}/${subject.code.toLowerCase()}`
      );
      if (campus == "nu")
        // Latest is a shortcut for the latest term (ex. Fall 2021) for NU campus
        paths.push(`/courses/latest/${campus}/${subject.code.toLowerCase()}`);
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let { termCode, campus, subjectCode } = params! as {
    termCode: string;
    campus: Campus;
    subjectCode: string;
  };

  const term =
    termCode === "latest" ? await getLatestTerm("nu") : await getTerm(termCode);

  const subject = await getSubject(term?.code!, subjectCode);

  return {
    props: { term, campus, subject },
    revalidate: 100,
  };
};

const SubjectPage = ({
  term,
  campus,
  subject,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title={subject.description}
        description={`Courses list of ${subject.description}`}
      />

      <ArticleHead
        backButtonHref={`/courses/${term.code}/${campus}`}
        backButtonText={term.description}
        title={subject.description}
      />
    </>
  );
};

export default SubjectPage;
