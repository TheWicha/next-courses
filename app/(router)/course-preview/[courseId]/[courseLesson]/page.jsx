"use client";
import React from "react";
import useGetLessonById from "@/utils/useGetLessonById";
import CourseLessonFacade from "./_CourseLessonFacade/CourseLessonFacade";
import useGetLessons from "@/utils/useGetCourseById";

const CourseChapterPreview = ({ params }) => {
  const { data } = useGetLessons({ slug: params.courseId });
  const chapter = useGetLessonById({
    slug: params.courseId,
    id: params.courseLesson,
  });
  return (
    <CourseLessonFacade chapter={chapter} chapters={data?.list?.chapter} />
  );
};

export default CourseChapterPreview;
