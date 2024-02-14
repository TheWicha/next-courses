import React from "react";
import CourseEnrollSection from "@/components/ui/CourseEnrollSection/CourseEnrollSection";
import useGetCourses from "@/utils/useGetCourses";
import { useUser } from "@clerk/nextjs";
import { useGQLMutation } from "@/utils/useGQLMutation";
import { enrollToCourse } from "@/utils/graphqlMutation";

const CourseEnrollFacade = ({ slug, membership }) => {
  const { user } = useUser();
  const { courses } = useGetCourses();
  const course = courses?.lists.find((course) => course.slug === slug);
  const isFree = course?.free;
  const isCourseAvailable = isFree || (user && membership);

  const createCourseMutation = useGQLMutation(enrollToCourse);

  const mutationVariables = {
    courseId: course?.id,
    slug: course?.slug,
    userEmail: user?.primaryEmailAddress.emailAddress,
  };

  const handleEnroll = async () => {
    if (!isCourseAvailable) {
      return;
    }
    const mutationData = await createCourseMutation.mutateAsync(
      mutationVariables
    );
  };

  return (
    <CourseEnrollSection
      isCourseAvailable={isCourseAvailable}
      user={user}
      handleClick={handleEnroll}
    />
  );
};

export default CourseEnrollFacade;
