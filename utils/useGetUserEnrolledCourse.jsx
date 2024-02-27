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

  return { data, error };
};

export default useGetUserEnrolledCourseDetails;
