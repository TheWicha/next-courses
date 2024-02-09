import { useState, useEffect, useCallback } from "react";
import { getCourseById } from "./hygraphApi";

const useGetLessons = ({ data }) => {
  const [state, setState] = useState({
    lessons: null,
    error: null,
  });

  const getAllLessons = useCallback(async () => {
    try {
      const res = await getCourseById({ id: data });
      setState((prevState) => ({ ...prevState, lessons: res }));
    } catch (err) {
      setState((prevState) => ({ ...prevState, error: err }));
    }
  }, [data]);

  useEffect(() => {
    getAllLessons();
  }, [getAllLessons]);

  return state;
};

export default useGetLessons;
