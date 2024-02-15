"use client";
import React, { useMemo } from "react";

import CourseList from "@/components/ui/CourseList/CourseList";
import useGetCourses from "@/utils/useGetCourses";
import useCourseFilter from "@/utils/useCourseFilter";
import useCourseCount from "@/utils/useCourseCount";

const CourseListFacade = () => {
  const { courses } = useGetCourses();
  const { list, filterList } = useCourseFilter(courses);
  const coursesNumber = useCourseCount(list);

  const memoizedCourseList = useMemo(
    () => (
      <CourseList
        courses={list}
        handleChange={filterList}
        coursesNumber={coursesNumber}
      />
    ),
    [list, filterList, coursesNumber]
  );

  return memoizedCourseList;
};
export default CourseListFacade;
