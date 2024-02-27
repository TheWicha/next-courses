"use client";
import React, { useState } from "react";
import useGetUserEnrolledCourseDetails from "@/utils/useGetUserEnrolledCourse";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { CourseLessonFacadeType } from "./CourseLessonFacadeTypes";
import { Play } from "lucide-react";

const CourseLessonFacade: React.FC<CourseLessonFacadeType> = ({
  id,
  userEmail,
}) => {
  const { data } = useGetUserEnrolledCourseDetails({
    id,
    userEmail,
  });

  const [lessonIndex, setLessonIndex] = useState(0);

  const handleClick = (index) => {
    setLessonIndex(index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3 mx-auto max-w-[1400px]">
      <div className="col-span-2 bg-white p-3 rounded-xl md:order-1">
        <div>
          <VideoPlayer
            videoUrl={
              data?.userEnrollCourses[0].list.chapter[lessonIndex].video.url
            }
            poster=""
          />
        </div>

        <div className="p-2 font-semibold">
          <p className="text-[20px] font-bold text-primary py-4">Description</p>
          <p>
            {data?.userEnrollCourses[0].list.chapter[lessonIndex].shortDesc}
          </p>
        </div>
      </div>
      <div className="col-span-1 md:order-2 bg-white">
        <p className="text-[20px] font-bold text-primary p-4">chapters:</p>
        {data?.userEnrollCourses[0].list.chapter.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-xl p-2 m-2 cursor-pointer hover:bg-violet-100"
              onClick={() => handleClick(index)}
            >
              <h2 className="text-violet-800 font-semibold flex justify-between">
                <span>{item.name}</span> <Play className="w-[16px]" />
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseLessonFacade;
