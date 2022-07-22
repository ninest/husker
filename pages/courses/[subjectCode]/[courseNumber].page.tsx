import { ArticleHead } from "@/components/ArticleHead";
import { MenuDropdown } from "@/components/button/MenuButton";
import { Debug } from "@/components/util/Debug";
import { readFile } from "@/lib/file/read";
import { Course, Subject } from "@/types/courses";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import subjects from "../../../.raw/subjects.json";

interface Path {
  params: {
    subjectCode: string;
    courseNumber: string;
  };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: Path[] = [];

  for await (const subject of subjects) {
    try {
      const courses: Course[] = JSON.parse(
        readFile(`../.raw/courses/${subject.code}.json`)
      );

      courses.forEach((course) =>
        paths.push({
          params: {
            subjectCode: subject.code,
            courseNumber: course.number,
          },
        })
      );
    } catch {}
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { subjectCode, courseNumber } = params! as Path["params"];

  const subject = subjects.find((subject) => subject.code === subjectCode);
  const courses: Course[] = JSON.parse(
    readFile(`../.raw/courses/${subjectCode}.json`)
  );
  const course = courses.find((c) => c.number === courseNumber);

  return {
    props: { subject, course },
  };
};

interface CoursePageProps {
  subject: Subject;
  course: Course;
}

/* TODO: add links to reddit, searchneu, course catalog, rate my courses, rate my professor */

const CoursePage = ({ subject, course }: CoursePageProps) => {
  const shortName = `${subject.code} ${course.number}`;

  const creditsDisplay = `${course.credits} credit${
    course.credits > 1 ? "s" : ""
  }`;

  return (
    <>
      <NextSeo
        title={shortName}
        description={`Information on ${shortName}: ${course.title}`}
      />

      <ArticleHead
        backButtonHref={`/courses/${subject.code}`}
        backButtonText={subject.description}
        title={`${shortName}: ${course.title}`}
      />

      <div className="wrapper">
        <section className="flex flex-col space-y-md">
          <div className="flex items-center justify-between">
            <p className="text-gray font-bold">
              {course.scheduleType} - {creditsDisplay}
            </p>
            <div className="flex">
              <MenuDropdown
                title="Open with"
                options={[
                  {
                    icon: "reddit",
                    text: "Reddit",
                    href: `https://www.google.com/search?q=site%3Areddit.com%2Fr%2Fneu+${shortName}`,
                  },
                  {
                    text: "SearchNEU",
                    href: `https://searchneu.com/NEU/202310/search/${shortName}`,
                  },
                ]}
              />
            </div>
          </div>
          <p className="text-gray">{course.description}</p>
        </section>

        <Debug data={course} />
      </div>
    </>
  );
};

export default CoursePage;
