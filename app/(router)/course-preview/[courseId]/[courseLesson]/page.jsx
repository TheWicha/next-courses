"use client";

import React, { useMemo } from "react";
import useGetLessonById from "@/utils/useGetLessonById";
import Image from "next/image";
import Skeleton from "@/components/ui/Skeleton/Skeleton";

const CoursePreview = ({ params }) => {
  const chapter = useGetLessonById({
    slug: params.courseId,
    id: params.courseLesson,
  });


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 bg-white p-3 rounded-xl flex flex-col items-center justify-center ">
        {chapter ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="p-4 font-semibold">{chapter?.name}</h2>
            <Image
              src={chapter?.video?.url}
              width={500}
              height={330}
              className="m-3"
            />
            <p className="p-5">{chapter?.shortDesc}</p>
          </div>
        ) : (
          <Skeleton coursesNumber={1} variant="big" />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default CoursePreview;
