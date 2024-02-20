"use client";
import React from "react";
import CourseLessonFacade from "../_CourseLessonFacade/CourseLessonFacade";

const WatchCourse = ({ params }) => {
  return <CourseLessonFacade id={params?.enrollId} />;
};

export default WatchCourse;
