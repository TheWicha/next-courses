import React from "react";
import Image from "next/image";
import { CourseLessonType } from "./CourseLessonTypes";

const CourseLesson: React.FC<CourseLessonType> = ({ chapter }) => {
  return (
    <div className="flex flex-col ">
      <h2 className="p-4 font-bold">{chapter?.name}</h2>
      <Image
        src={chapter?.video?.url}
        width={700}
        height={330}
        className="p-3"
        alt="video player placeholder"
      />
      <div className="p-5">
        <p className="pb-2 font-semibold">About This Course</p>
        <p>{chapter?.shortDesc}</p>
      </div>
    </div>
  );
};

export default CourseLesson;
