import React from "react";
import { CourseLessonWrapperType } from "./CourseLessonWrapperType";
import CourseEnrollSection from "@/components/ui/CourseEnrollSection/CourseEnrollSection";

const CourseLessonWrapper: React.FC<CourseLessonWrapperType> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 bg-white p-3 rounded-xl flex flex-col items-center justify-center ">
        {children}
      </div>
      <div>
        <CourseEnrollSection membership={true} />
      </div>
    </div>
  );
};

export default CourseLessonWrapper;
