"use client";

import React, { useMemo } from "react";
import useGetLessonById from "@/utils/useGetLessonById";

import Skeleton from "@/components/ui/Skeleton/Skeleton";
import CourseEnrollSection from "../../../../../components/ui/CourseEnrollSection/CourseEnrollSection";
import CourseLessonWrapper from "@/components/ui/CourseLessonWrapper/CourseLessonWrapper";
import CourseLesson from "@/components/ui/CourseLesson/CourseLesson";

const CoursePreview = ({ params }) => {
  const chapter = useGetLessonById({
    slug: params.courseId,
    id: params.courseLesson,
  });

  if (!chapter) {
    return (
      <CourseLessonWrapper>
        <Skeleton coursesNumber={1} variant="big" />
      </CourseLessonWrapper>
    );
  }

  return (
    <CourseLessonWrapper>
      <CourseLesson chapter={chapter} />
    </CourseLessonWrapper>
  );
};

export default CoursePreview;
