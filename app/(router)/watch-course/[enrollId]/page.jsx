"use client";
import React from "react";
import useGetUserEnrolledCourseDetails from "@/utils/useGetUserEnrolledCourse";
import { useUser } from "@clerk/nextjs";
import CourseLessonFacade from "../_CourseLessonFacade/CourseLessonFacade";

const WatchCourse = ({ params }) => {
  return (
    <div>
      <CourseLessonFacade id={params?.enrollId} />
    </div>
  );
};

export default WatchCourse;
