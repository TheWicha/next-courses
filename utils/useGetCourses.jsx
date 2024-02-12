import { useMemo } from "react";
import { allCourses} from "./hygraphApi";
 import { useGQLQuery } from "./useGQLQuery";

const useGetCourses = () => {
  const { data, error } = useGQLQuery("allCourses", allCourses);

  return useMemo(() => ({ courses: data, error }), [data, error]);
};

export default useGetCourses;
