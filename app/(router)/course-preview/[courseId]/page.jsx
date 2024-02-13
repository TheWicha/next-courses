"use client";
import React from "react";
import ChapterListFacade from "./_ChapterListFacade/ChapterListFacade";
import useGetLessons from "@/utils/useGetCourseById";
import CourseEnrollFacade from "./_CourseEnrollFacade/CourseEnrollFacade";

const CoursePreview = ({ params }) => {
  const { data } = useGetLessons({ slug: params.courseId });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 bg-white p-3 rounded-xl ">
        <ChapterListFacade chapters={data?.list} data={params.courseId} />
      </div>
      <div>
        <CourseEnrollFacade slug={params.courseId} />
      </div>
    </div>
  );
};

export default CoursePreview;
