"use client";
import React, { useEffect } from "react";
import useGetLessons from "../../../../../utils/useGetCourseById";
import Image from "next/image";
import Skeleton from "../../../../..//components/ui/Skeleton/Skeleton";

const CoursePreviev = ({ params }) => {
  const { lessons } = useGetLessons({ data: params.courseId });

  function findChapterById(lessons, id) {
    return lessons?.list?.chapter?.find((chapter) => chapter.id === id);
  }

  let chapter = findChapterById(lessons, params.courseLesson);

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

export default CoursePreviev;
