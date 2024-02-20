import { useMemo } from "react";
import { checkIfUserEnrolled } from "./graphqlQueries";
import { useGQLQuery } from "./useGQLQuery";

const useIsEnrolledToCourse = ({ courseId, userEmail }) => {
  const { data, error } = useGQLQuery(
    "checkIfUserEnrolled",
    checkIfUserEnrolled,
    {
      courseId,
      userEmail,
    }
  );
  const isUserEnrolled = data;

  return useMemo(() => ({ isUserEnrolled, error }), [data, error]);
};

export default useIsEnrolledToCourse;
