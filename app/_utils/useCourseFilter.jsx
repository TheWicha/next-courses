import { useState, useCallback, useMemo, useEffect } from "react";

const useCourseFilter = (courses) => {
  const [list, setList] = useState(null);

  const courseList = useMemo(() => courses?.lists, [courses]);

  useEffect(() => {
    setList(courseList);
  }, [courseList]);

  const filterList = useCallback(
    (e) => {
      switch (e?.target.value) {
        case "paid":
          const paidCoursesList = courseList?.filter(
            (course) => course.free === false
          );
          setList(paidCoursesList);
          break;

        case "free":
          const freeCoursesList = courseList?.filter(
            (course) => course.free === true
          );
          setList(freeCoursesList);
          break;

        case "all":
        default:
          setList(courseList);
          break;
      }
    },
    [courseList, setList]
  );

  return { list, filterList };
};

export default useCourseFilter;
