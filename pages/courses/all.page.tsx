import { ArticleHead } from "@/components/ArticleHead";
import { Block } from "@/components/Block";
import { Debug } from "@/components/util/Debug";
import { Grid } from "@/components/util/Grid";
import { Subject } from "@/types/courses";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import subjects from "../../data/subjects.json";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { subjects },
  };
};

interface AllCoursesPageProps {
  subjects: Subject[];
}

const AllCoursesPage = ({ subjects }: AllCoursesPageProps) => {
  return (
    <>
      <NextSeo
        title={"Subjects"}
        description={`List of subjects at Northeastern University`}
      />

      <ArticleHead
        backButtonHref={`/courses/`}
        backButtonText={"Courses"}
        title={"All Subjects"}
      />

      <div className="wrapper">
        <Grid className="md:grid-cols-2">
          {subjects.map((subject) => (
            <Block
              key={subject.code}
              id={subject.code}
              title={`${subject.description}`}
              href={`/courses/${subject.code}`}
            >{subject.code}</Block>
          ))}
        </Grid>
        <Debug data={subjects} />
      </div>
    </>
  );
};


export default AllCoursesPage