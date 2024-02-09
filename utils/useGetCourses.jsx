import { useState, useEffect, useCallback, useMemo } from "react";
import { getAllCourseLists } from "./hygraphApi";

const useGetCourses = () => {
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);

  const getAllCourses = useCallback(async () => {
    try {
      const res = await getAllCourseLists();
      setCourses(res);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  return useMemo(() => ({ courses, error }), [courses, error]);
};

export default useGetCourses;
