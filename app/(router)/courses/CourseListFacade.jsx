"use client";
import React, { useMemo } from "react";

import CourseList from "@/components/ui/CourseList/CourseList";
import useGetCourses from "@/utils/useGetCourses";
import useCourseFilter from "@/utils/useCourseFilter";

const CourseListFacade = () => {
  const { courses } = useGetCourses();
  const { list, filterList } = useCourseFilter(courses);
  const memoizedCourseList = useMemo(
    () => <CourseList courses={list} handleChange={filterList} />,
    [list, filterList]
  );

  return memoizedCourseList;
};
export default CourseListFacade;
