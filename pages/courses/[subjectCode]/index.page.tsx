import { ArticleHead } from "@/components/ArticleHead";
import { Block } from "@/components/Block";
import { Debug } from "@/components/util/Debug";
import { Grid } from "@/components/util/Grid";
import { readFile } from "@/lib/file/read";
import { Course, Subject } from "@/types/courses";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import subjects from "../../../data/subjects.json";

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
  const { subjectCode } = params! as Path["params"];

  const subject = subjects.find((subject) => subject.code === subjectCode);

  try {
    const courses: Course[] = JSON.parse(
      readFile(`../data/courses/${subjectCode}.json`)
    );
    return {
      props: { subject, courses },
    };
  } catch {
    // No courses found
    return { props: { subject, courses: [] } };
  }
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
        description={`List of ${subject.description} from Northeastern University`}
      />

      <ArticleHead
        backButtonHref={`/courses/all`}
        backButtonText={"Subjects"}
        title={subject.description}
      />

      <div className="wrapper">
        <Grid className="md:grid-cols-2">
          {courses.map((course: Course) => (
            <Block
              key={course.number}
              id={course.number}
              title={`${subject.code} ${course.number}`}
              href={`/courses/${subject.code}/${course.number}`}
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
