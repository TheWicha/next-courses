import { useMemo } from "react";
import { getUserEnrolledCourseDetails } from "./graphqlQueries";
import { useGQLQuery } from "./useGQLQuery";

const useGetUserEnrolledCourseDetails = ({ id, userEmail }) => {
  const { data, error } = useGQLQuery(
    "userEnrolledCourseDetails",
    getUserEnrolledCourseDetails,
    {
      id,
      userEmail,
    }
  );

  return useMemo(() => ({ data, error }), [data, error]);
};

export default useGetUserEnrolledCourseDetails;
