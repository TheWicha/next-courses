"use client";
import React, { memo } from "react";
import useGetUserEnrolledCourseDetails from "@/utils/useGetUserEnrolledCourse";
import { useUser } from "@clerk/nextjs";

const CourseLessonFacade = ({ id }) => {
  const { user } = useUser();

  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const { data, error } = useGetUserEnrolledCourseDetails({
    id,
    userEmail,
  });

  return <div>watch course</div>;
};

export default memo(CourseLessonFacade);
