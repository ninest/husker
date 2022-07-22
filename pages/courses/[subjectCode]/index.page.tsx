import { ArticleHead } from "@/components/ArticleHead";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

interface Path {
  params: {
    subjectCode: string;
  };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: Path[] = [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let { subjectCode } = params! as { subjectCode: string };

  return {
    props: {},
    revalidate: 100,
  };
};

const SubjectPage = ({
  subject,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

      {/* <div className="wrapper">
        <Grid className="md:grid-cols-2">
          {courses.map((course: Course) => (
            <Block
              key={course.courseNumber}
              id={course.courseNumber}
              title={`${subject.code} ${course.courseNumber}`}
            >
              {course.courseTitle}
            </Block>
          ))}
        </Grid>
        <Debug data={courses} />
      </div> */}
    </>
  );
};

export default SubjectPage;
