import React from "react";
import Skeleton from "@/components/ui/Skeleton/Skeleton";
import CourseLessonWrapper from "@/components/ui/CourseLessonWrapper/CourseLessonWrapper";
import CourseLesson from "@/components/ui/CourseLesson/CourseLesson";

const CourseLessonFacade = ({ chapter, chapters, slug }) => {
  if (!chapter) {
    return (
      <CourseLessonWrapper>
        <Skeleton numberOfSkeletons={1} variant="big" />
      </CourseLessonWrapper>
    );
  }

  return (
    <CourseLessonWrapper chapters={chapters} chapter={chapter} slug={slug}>
      <CourseLesson chapter={chapter} />
    </CourseLessonWrapper>
  );
};

export default CourseLessonFacade;
