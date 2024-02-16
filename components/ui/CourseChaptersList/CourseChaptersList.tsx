import React from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { CourseChaptersListType } from "./CourseChaptersListTypes";
import Skeleton from "../Skeleton/Skeleton";
import { Lock, Play } from "lucide-react";

const CourseChaptersList: React.FC<CourseChaptersListType> = ({
  chapters,
  chapter,
}) => {
  if (!chapters) {
    return <Skeleton variant="sm" numberOfSkeletons={1} />;
  }

  return (
    <div className="p-3 bg-white rounded-sm">
      <h2 className="font-semibold">Content</h2>
      {chapters.map((item, index) => (
        <Link
          href={item.id}
          key={index}
          className="flex items-center border rounded-sm mt-2 p-1 hover:bg-gray-100"
        >
          <div
            className={clsx(
              "cursor-pointer p-2 text-[13px] lg:text-[16px] font-light ",
              {
                "font-bold text-violet-600": chapter?.name === item?.name,
              }
            )}
          >
            {index + 1}. {item.name}
          </div>
          {index !== 0 ? (
            <Lock className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default CourseChaptersList;
