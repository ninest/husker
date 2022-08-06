import { ArticleHead } from "@/components/ArticleHead";
import { MenuDropdown } from "@/components/button/MenuButton";
import { Expandable } from "@/components/Expandable";
import { NUPathDisplay } from "@/components/courses/NUPathDisplay";
import { Debug } from "@/components/util/Debug";
import { Spacer } from "@/components/util/Spacer";
import { showToast } from "@/components/util/Toast";
import { descriptionToList } from "@/lib/courses";
import { fileExists } from "@/lib/file/exists";
import { readFile } from "@/lib/file/read";
import { getMarkdocPage } from "@/lib/markdoc";
import { markdocComponents } from "@/lib/markdoc/components";
import { Course, Subject } from "@/types/courses";
import { Frontmatter } from "@/types/page";
import Markdoc from "@markdoc/markdoc";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { useState } from "react";
import subjects from "../../../.raw/subjects.json";
import { RequisitesDisplay } from "@/components/courses/RequisitesDisplay";
import { PreRequisiteDisplay } from "@/components/courses/PreRequisitesDisplay";

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
      const courses: Course[] = JSON.parse(readFile(`../.raw/courses/${subject.code}.json`));

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
  const courses: Course[] = JSON.parse(readFile(`../.raw/courses/${subjectCode}.json`));
  const course = courses.find((c) => c.number === courseNumber);

  /* Markdoc page */
  if (fileExists(`courses/list/${subject?.code}/${courseNumber}.md`)) {
    const { frontmatter, content, errors } = getMarkdocPage(
      `courses/list/${subject?.code}/${courseNumber}`
    );

    return {
      props: {
        subject,
        course,
        frontmatter: JSON.parse(JSON.stringify(frontmatter)), //TODO: fix date serialization
        content: JSON.stringify(content),
        errors: JSON.stringify(errors),
      },
    };
  }

  return {
    props: { subject, course },
  };
};

interface CoursePageProps {
  subject: Subject;
  course: Course;
  frontmatter?: Frontmatter;
  content?: string;
  errors?: string;
}

/* TODO: add links to reddit, searchneu, course catalog, rate my courses, rate my professor */

const CoursePage = ({ subject, course, frontmatter, content, errors }: CoursePageProps) => {
  const shortName = `${subject.code} ${course.number}`;

  const creditsDisplay = `${course.credits} credit${course.credits == 1 ? "" : "s"}`;

  const addOptions = [
    {
      icon: "checkcircle",
      text: "I've done this course",
      action: () => showToast({ text: "This feature isn't ready yet", type: "error" }),
    },
    {
      icon: "clock",
      text: "I'm going to do this course",
      action: () => showToast({ text: "This feature isn't ready yet", type: "error" }),
    },
  ];

  const openWithOptions = [
    {
      icon: "reddit",
      text: "Reddit",
      href: `https://www.google.com/search?q=site%3Areddit.com%2Fr%2Fneu+${shortName}`,
    },
    {
      icon: "starhalf",
      text: "RateMyCourses",
      href: `https://www.ratemycourses.io/neu/course/${shortName.replace(" ", "")}`,
    },
    {
      text: "SearchNEU",
      href: `https://searchneu.com/NEU/202310/search/${shortName}`,
    },
  ];

  const [showFullDescription, setShowFullDescription] = useState(false);

  const descriptionList = descriptionToList(course.description ?? "");
  const showDescription = descriptionList.length > 0;

  const containsProse = !!content;
  const renderedContent = content
    ? Markdoc.renderers.react(JSON.parse(content), React, {
        components: markdocComponents,
      })
    : null;
  const parsedErrors = errors ? JSON.parse(errors) : null;

  return (
    <>
      <NextSeo title={shortName} description={`Information on ${shortName}: ${course.title}`} />

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

            <div className="flex items-center space-x-base">
              <div className="hidden md:block">
                <MenuDropdown
                  title="Add"
                  variant="primary"
                  iconLeft="plus"
                  menuClassName="w-64 md:w-60"
                  options={addOptions}
                />
              </div>
              <div className="md:hidden">
                <MenuDropdown
                  buttonClassName="w-10"
                  variant="primary"
                  iconLeft="plus"
                  iconRight={null}
                  menuClassName="w-64 md:w-60"
                  options={addOptions}
                />
              </div>

              <MenuDropdown title="Open with" options={openWithOptions} />
            </div>
          </div>

          <NUPathDisplay path={course.nuPath} />

          {showDescription && (
            <div
              className="text-gray text-sm"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? (
                <ul className="list-outside list-disc ml-lg">
                  {descriptionList.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                  ))}
                </ul>
              ) : (
                <>
                  {descriptionList.slice(0, 1).map((sentence, index) => (
                    <span key={index}>{sentence}</span>
                  ))}
                  {/* Only show "show all" if the description has more than 1 line */}
                  {descriptionList.length > 1 && (
                    <span>
                      {" "}
                      <i>Show more.</i>
                    </span>
                  )}
                </>
              )}
            </div>
          )}

          {course.coreqs && course.coreqs.length > 0 && (
            <RequisitesDisplay title="Co-requisites" reqs={course.coreqs ?? []} />
          )}

          {course.prereqs && course.prereqs.length > 0 && (
            <PreRequisiteDisplay title="Pre-Requisites" reqItems={course.prereqs ?? []} />
          )}
        </section>

        {containsProse && (
          <>
            <Spacer size="xl" />

            {/* TODO: make this a component */}
            {parsedErrors.length > 0 && (
              <>
                <Expandable variant="error" title="Markdoc errors" open containsProse>
                  <p>
                    You should <b>not</b> be able to see this! Please review the errors:
                  </p>
                  <Debug data={parsedErrors} noSpaceAbove />
                </Expandable>
                <Spacer size="xl" />
              </>
            )}

            <div className="prose">{renderedContent}</div>
            <Spacer size="xl"></Spacer>
          </>
        )}

        <Debug data={course} />
      </div>
    </>
  );
};

export default CoursePage;
