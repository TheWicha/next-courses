"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import CourseList from "@/components/ui/CourseList";
import useGetCourses from "../../../utils/useGetCourses";
import useCourseFilter from "../../../utils/useCourseFilter";
import useCourseCount from "../../../utils/useCourseCount";

const CourseListFacade = () => {
  const { courses } = useGetCourses();
  const { list, filterList } = useCourseFilter(courses);

  const number = useCourseCount(list);

  const memoizedCourseList = useMemo(
    () => (
      <CourseList
        courses={list}
        handleChange={filterList}
        coursesNumber={number}
      />
    ),
    [list, filterList]
  );

  return memoizedCourseList;
};

export default CourseListFacade;
