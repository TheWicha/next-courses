import { useEffect } from "react";

function useCourseCount(list) {
  useEffect(() => {
    function saveArrayLength(array, key) {
      if (Array.isArray(array)) {
        localStorage.setItem(key, array.length);
      }
    }

    saveArrayLength(list, "numberOfCourses");
  }, [list]);

  const getNumberOfCourses = () => {
    const numberOfCourses = localStorage.getItem("numberOfCourses");

    if (numberOfCourses !== null) {
      return numberOfCourses;
    } else {
      console.log("The key 'numberOfCourses' does not exist in local storage.");
      return;
    }
  };

  return getNumberOfCourses();
}

export default useCourseCount;
