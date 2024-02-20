import { useMemo } from "react";
import { coursesById } from "./graphqlQueries";
import { useGQLQuery } from "./useGQLQuery";

const useGetLesson = ({ slug }) => {
  const { data, error } = useGQLQuery("coursesById", coursesById, {
    slug,
  });

  return useMemo(() => ({ data, error }), [data, error]);
};

export default useGetLesson;
