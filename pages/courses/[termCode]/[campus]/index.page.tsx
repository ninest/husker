import { ArticleHead } from "@/components/ArticleHead";
import { Block } from "@/components/Block";
import { Debug } from "@/components/util/Debug";
import { getSubjects, Subject } from "@/lib/courses/subjects";
import { getLatestTerm, getTerm, getTerms } from "@/lib/courses/terms";
import { Campus, campuses } from "@/lib/courses/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: string[] = [];

  // Only NU campus for now (no law or cps)
  for await (const campus of campuses.slice(0, 1)) {
    // const latestTerm = await getLatestTerm(campus);
    const { terms } = await getTerms({ noTerms: 6, campus });

    for (const term of terms) {
      paths.push(`/courses/${term?.code}/${campus}`);
      // Latest is a shortcut for the latest term (ex. Fall 2021) for NU campus
      if (campus == "nu") paths.push(`/courses/latest/${campus}`);
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let { termCode, campus } = params! as {
    termCode: string;
    campus: Campus;
  };

  const term =
    termCode === "latest" ? await getLatestTerm("nu") : await getTerm(termCode);

  const subjects = await getSubjects(term?.code!);

  return { props: { term, campus, subjects }, revalidate: 100 };
};

const CampusPage = ({
  term,
  campus,
  subjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title={term.description} />

      <ArticleHead
        backButtonHref={"/courses"}
        backButtonText={"Courses"}
        title={term.description}
      />

      <div className="wrapper">
        <section className="grid grid-cols-2 md:grid-cols-3 gap-base">
          {subjects.map((subject: Subject) => (
            <Block
              href={`/courses/${
                term.code
              }/${campus}/${subject.code.toLowerCase()}`}
              title={subject.code}
            >
              {subject.description}
            </Block>
          ))}
        </section>
        <Debug data={subjects} />
      </div>
    </>
  );
};

export default CampusPage;
