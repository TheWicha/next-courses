import React from "react";
import Image from "next/image";
import { CourseLessonType } from "./CourseLessonTypes";

const CourseLesson: React.FC<CourseLessonType> = ({ chapter }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="p-4 font-semibold">{chapter?.name}</h2>
      <Image
        src={chapter?.video?.url}
        width={500}
        height={330}
        className="m-3"
        alt="video player placeholder"
      />
      <p className="p-5">{chapter?.shortDesc}</p>
    </div>
  );
};

export default CourseLesson;
