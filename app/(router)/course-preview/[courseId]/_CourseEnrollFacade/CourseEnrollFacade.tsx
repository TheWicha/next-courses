"use client";
import React from "react";
import CourseEnrollSection from "@/components/ui/CourseEnrollSection/";
import useGetCourses from "@/utils/useGetCourses";
import { useUser } from "@clerk/nextjs";
import { useGQLMutation } from "@/utils/useGQLMutation";
import { enrollToCourse } from "@/utils/graphqlMutation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useIsEnrolledToCourse from "@/utils/useIsEnrolledToCourse";
import useGetEnrollContent from "@/utils/useGetEnrollContent";
import { toastCopy } from "@/copy/toastsCopy";

const CourseEnrollFacade = ({ slug, membership }) => {
  const { user } = useUser();
  const { courses } = useGetCourses();
  const course = courses?.lists.find((course) => course.slug === slug);
  const isFree = course?.free;
  const isCourseAvailable = isFree || (user && membership);
  const router = useRouter();
  const createCourseMutation = useGQLMutation(enrollToCourse);

  const mutationVariables = {
    courseId: course?.id,
    slug: course?.slug,
    userEmail: user?.primaryEmailAddress.emailAddress,
  };

  const { isUserEnrolled } = useIsEnrolledToCourse(mutationVariables);

  const handleEnroll = async () => {
    if (!isCourseAvailable) {
      return;
    }
    const mutationData = await createCourseMutation.mutateAsync(
      mutationVariables
    );
    if (mutationData) {
      router.push(`/watch-course/${mutationData.createUserEnrollCourse.id}`);

      toast(toastCopy.enrolled);
    }
  };

  const handleContinue = () => {
    router.push(`/watch-course/${isUserEnrolled?.userEnrollCourses[0].id}`);
  };
  const isEnrolled = isUserEnrolled?.userEnrollCourses.length > 0;
  const { button, description } = useGetEnrollContent({
    handleContinue,
    handleEnroll,
    isEnrolled,
    user,
    isCourseAvailable,
  });

  return <CourseEnrollSection content={{ button, description }} />;
};

export default CourseEnrollFacade;
