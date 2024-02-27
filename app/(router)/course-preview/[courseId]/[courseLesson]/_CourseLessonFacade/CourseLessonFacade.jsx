import React, { memo } from "react";
import CourseLessonWrapper from "@/components/ui/CourseLessonWrapper/CourseLessonWrapper";
import CourseLesson from "@/components/ui/CourseLesson/CourseLesson";

const CourseLessonFacade = ({ chapter, chapters, slug }) => {
  return (
    <CourseLessonWrapper chapters={chapters} chapter={chapter} slug={slug}>
      <CourseLesson chapter={chapter} />
    </CourseLessonWrapper>
  );
};

export default memo(CourseLessonFacade);
