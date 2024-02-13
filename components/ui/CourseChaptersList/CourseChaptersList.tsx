import React from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { CourseChaptersListType } from "./CourseChapterListTypes";

const CourseChaptersList: React.FC<CourseChaptersListType> = ({
  chapters,
  chapter,
}) => {
  if (!chapters) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3 bg-white rounded-sm">
      <h2 className="font-semibold">Content</h2>
      {chapters.map((item, index) => (
        <Link href={item.id} key={index}>
          <div
            className={clsx("cursor-pointer p-2", {
              "font-bold text-violet-600": chapter?.name === item?.name,
            })}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseChaptersList;
