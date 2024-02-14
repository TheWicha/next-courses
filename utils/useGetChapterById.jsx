import useGetLessons from "./useGetCourseById";

const useGetChapterById = ({ slug, id }) => {
  const { data } = useGetLessons({ slug });

  function findChapterById(lessons, id) {
    return lessons?.list?.chapter?.find((chapter) => chapter.id === id);
  }

  return findChapterById(data, id);
};

export default useGetChapterById;
