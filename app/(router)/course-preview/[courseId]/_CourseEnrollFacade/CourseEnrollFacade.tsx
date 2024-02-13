import React from "react";
import CourseEnrollSection from "@/components/ui/CourseEnrollSection/CourseEnrollSection";
import useGetCourses from "@/utils/useGetCourses";
import { useUser } from "@clerk/nextjs";
import { useGQLMutation } from "@/utils/useGQLMutation";
import { enrollToCourse } from "@/utils/graphqlQueries";

const CourseEnrollFacade = ({ slug, membership }) => {
  const { user } = useUser();
  const { courses } = useGetCourses();

  const course = courses?.lists.find((course) => course.slug === slug);
  const isFree = course?.free;
  const isAvailable = isFree || (user && membership);

  return <CourseEnrollSection isAvailable={isAvailable} user={user} />;
};

export default CourseEnrollFacade;
