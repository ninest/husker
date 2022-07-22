import { ArticleHead } from "@/components/ArticleHead";
import { Block } from "@/components/Block";
import { Debug } from "@/components/util/Debug";
import { Grid } from "@/components/util/Grid";
import { readFile } from "@/lib/file/read";
import { Course, Subject } from "@/types/courses";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import subjects from "../../../.raw/subjects.json";

interface Path {
  params: {
    subjectCode: string;
  };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: Path[] = subjects.map((subject) => ({
    params: { subjectCode: subject.code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { subjectCode } = params! as { subjectCode: string };

  const subject = subjects.find((subject) => subject.code === subjectCode);
  // const courses: Course[] = await import(`.raw/courses/${subjectCode}.json`);
  const courses: Course[] = JSON.parse(
    readFile(`../.raw/courses/${subjectCode}.json`)
  );

  return {
    props: { subject, courses },
    revalidate: 100,
  };
};

interface SubjectPageProps {
  subject: Subject;
  courses: Course[];
}

const SubjectPage = ({ subject, courses }: SubjectPageProps) => {
  return (
    <>
      <NextSeo
        title={subject.description}
        description={`Courses list of ${subject.description}`}
      />

      <ArticleHead
        backButtonHref={`/courses/`}
        backButtonText={"Courses"}
        title={subject.description}
      />

      <div className="wrapper">
        <Grid className="md:grid-cols-2">
          {courses.map((course: Course) => (
            <Block
              key={course.number}
              id={course.number}
              title={`${subject.code} ${course.number}`}
            >
              {course.title}
            </Block>
          ))}
        </Grid>
        <Debug data={courses} />
      </div>
    </>
  );
};

export default SubjectPage;
