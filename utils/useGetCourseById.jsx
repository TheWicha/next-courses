import { useMemo } from "react";
import { coursesById } from "./graphqlQueries";
import { useGQLQuery } from "./useGQLQuery";

const useGetLessons = ({ slug }) => {
  const { data, error } = useGQLQuery("coursesById", coursesById, {
    slug,
  });

  return useMemo(() => ({ data, error }), [data, error]);
};

export default useGetLessons;
