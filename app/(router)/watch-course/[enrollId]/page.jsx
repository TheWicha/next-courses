import React from "react";
import CourseLessonFacade from "../_CourseLessonFacade/CourseLessonFacade";
import { currentUser } from "@clerk/nextjs";

const WatchCourse = async ({ params }) => {
  const user = await currentUser();

  return (
    <CourseLessonFacade
      id={params?.enrollId}
      userEmail={user.externalAccounts[0].emailAddress}
    />
  );
};

export default WatchCourse;
