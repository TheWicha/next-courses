"use client";
import React from "react";
import ChapterListFacade from "./_ChapterListFacade/ChapterListFacade";
import useGetLesson from "@/utils/useGetCourseById";
import CourseEnrollFacade from "./_CourseEnrollFacade/CourseEnrollFacade";

const CoursePreview = ({ params }) => {
  const { data } = useGetLesson({ slug: params.courseId });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3 mx-auto max-w-[1400px]">
      <div className="col-span-2 bg-white p-3 rounded-xl ">
        <h2 className="text-[20px] font-bold text-primary py-4">
          Course content:
        </h2>

        <ChapterListFacade chapters={data?.list} />
      </div>
      <div>
        <CourseEnrollFacade slug={params.courseId} />
      </div>
      <div className="col-span-2 bg-white p-3 rounded-xl ">
        <h2 className="text-[20px] font-bold text-primary py-4">Description</h2>
        <p className="text-slate-600  md:tracking-wide">
          {data?.list.description}
        </p>
      </div>
    </div>
  );
};

export default CoursePreview;
