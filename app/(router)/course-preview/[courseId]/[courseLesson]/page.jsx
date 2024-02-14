"use client";
import React from "react";
import useGetChapterById from "@/utils/useGetChapterById";
import CourseLessonFacade from "./_CourseLessonFacade/CourseLessonFacade";
import useGetLessons from "@/utils/useGetCourseById";

const CourseChapterPreview = ({ params }) => {
  const { data } = useGetLessons({ slug: params.courseId });
  const chapter = useGetChapterById({
    slug: params.courseId,
    id: params.courseLesson,
  });

  return (
    <CourseLessonFacade
      chapter={chapter}
      chapters={data?.list?.chapter}
      slug={params.courseId}
    />
  );
};

export default CourseChapterPreview;
