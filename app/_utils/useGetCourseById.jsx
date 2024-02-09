import { useState, useEffect, useCallback, useMemo } from "react";
import { getCourseById } from "./hygraphApi";

const useGetLessons = ({ data }) => {
  console.log(data);
  const [lessons, setLessons] = useState(null);
  const [error, setError] = useState(null);

  const getAllLessons = useCallback(async () => {
    try {
      const res = await getCourseById({ id: data });
      setLessons(res);
    } catch (err) {
      console.log(err, "asdasd");
      setError(err);
    }
  }, []);

  useEffect(() => {
    getAllLessons();
  }, [getAllLessons]);

  return useMemo(() => ({ lessons, error }), [lessons, error]);
};

export default useGetLessons;
