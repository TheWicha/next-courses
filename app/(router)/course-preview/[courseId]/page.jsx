"use client";
import React from "react";
import CourseVideoDescription from "@/components/ui/CourseVideoDescription";
import useGetLessons from "utils/useGetCourseById";

const CoursePreviev = ({ params }) => {
  const chapters = useGetLessons({ data: params.courseId });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 bg-white p-3 rounded-xl ">
        <CourseVideoDescription chapters={chapters} data={params.courseId} />
      </div>
      <div></div>
    </div>
  );
};

export default CoursePreviev;
