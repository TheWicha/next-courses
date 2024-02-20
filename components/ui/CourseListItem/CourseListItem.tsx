import Image from "next/image";
import React from "react";
import useTrimmedText from "../../../utils/useTrimText";
import { CourseItemType } from "./CourseListItemTypes";

const CourseListItem: React.FC<CourseItemType> = ({ course }) => {
  const trimmedText = useTrimmedText({
    text: course?.description,
    maxLength: 200,
  });

  return (
    <div className="border rounded-xl hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer hover:shadow-purple-300">
      <div className="relative aspect-[500/300]">
        <Image
          src={course?.banner?.url}
          layout="fill"
          alt="banner"
          className="rounded-t-xl object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h2 className="font-semibold text-[12px] lg:text-[14px]">
          {course?.name}
        </h2>
        <h2 className="text-[15px] font-medium">
          {course?.free ? (
            <div className="flex text-green-700">
              <Image
                src={"/free.png"}
                width={20}
                height={20}
                className="mr-1"
                alt="free"
              />
              Free
            </div>
          ) : (
            <div className="flex text-yellow-700">
              <Image
                src={"/paid.png"}
                width={20}
                height={20}
                className="mr-1"
                alt="paid"
              />
              Paid
            </div>
          )}
        </h2>
        <p className="text-[14px]">{trimmedText}</p>
      </div>
    </div>
  );
};

export default CourseListItem;
