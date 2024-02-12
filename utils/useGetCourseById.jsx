import { coursesById } from "./hygraphApi";
import { useGQLQuery } from "./useGQLQuery";

const useGetLessons = ({ slug }) => {
  const { data, error } = useGQLQuery("coursesById", coursesById, {
    slug,
  });

  return { data, error };
};

export default useGetLessons;
