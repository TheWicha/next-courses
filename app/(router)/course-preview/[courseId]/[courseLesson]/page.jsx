"use client";
import React, { memo } from "react";
import useGetChapterById from "@/utils/useGetChapterById";
import CourseLessonFacade from "./_CourseLessonFacade/CourseLessonFacade";
import useGetLesson from "@/utils/useGetCourseById";

const CourseChapterPreview = ({ params }) => {
  const { data } = useGetLesson({ slug: params.courseId });
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

export default memo(CourseChapterPreview);
