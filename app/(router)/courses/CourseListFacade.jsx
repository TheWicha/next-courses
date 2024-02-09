"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import CourseList from "../../../components/ui/CourseList";
import useGetCourses from "../../_utils/useGetCourses";
import useCourseFilter from "../../_utils/useCourseFilter";

const CourseListFacade = () => {
  const { courses } = useGetCourses();

  const { list, filterList } = useCourseFilter(courses);

  useEffect(() => {
    function saveArrayLength(array, key) {
      Array.isArray(array) && localStorage.setItem(key, array.length);
    }
    saveArrayLength(list, "numberOfCourses");
  }, [list]);

  const getNumberOfCourses = () => {
    const numberOfCourses = localStorage.getItem("numberOfCourses");

    if (numberOfCourses !== null) {
      return numberOfCourses;
    } else {
      console.log("The key 'numberOfCourses' does not exist in local storage.");
      return;
    }
  };
  const numberOfCourses = getNumberOfCourses();

  const memoizedCourseList = useMemo(
    () => (
      <CourseList
        courses={list}
        handleChange={filterList}
        coursesNumber={numberOfCourses}
      />
    ),
    [list, filterList]
  );

  return memoizedCourseList;
};

export default CourseListFacade;
