import React from "react";
import { CourseLessonWrapperType } from "./CourseLessonWrapperTypes";
import CourseEnrollFacade from "../../../app/(router)/course-preview/[courseId]/_CourseEnrollFacade/CourseEnrollFacade";

const CourseLessonWrapper: React.FC<CourseLessonWrapperType> = ({
  children,
  chapters,
  chapter,
  slug,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3 max-w-[1400px] ">
      <div className="col-span-2 bg-white p-3 rounded-xl flex flex-col items-center justify-center ">
        {children}
      </div>
      <div className="flex flex-col gap-3">
        <CourseEnrollFacade slug={slug} membership={false} />
      </div>
    </div>
  );
};

export default CourseLessonWrapper;
