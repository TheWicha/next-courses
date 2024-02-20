import React, { useMemo } from "react";
import CoursePreview from "@/components/ui/CoursePreview/CoursePreview";
import { ChapterListFacadeProps } from "./ChapterListFacadeTypes";

const ChapterListFacade: React.FC<ChapterListFacadeProps> = ({ chapters }) => {
  const lessonChapters = chapters?.chapter;

  const coursePreviews = useMemo(
    () =>
      lessonChapters?.map((item, index) => (
        <div key={index} className="border rounded-lg p-4 gap-2 bg-violet-100 ">
          <CoursePreview item={item} index={index} />
        </div>
      )),
    [lessonChapters]
  );

  return (
    <div className="flex flex-col gap-4 col-span-2 ">{coursePreviews}</div>
  );
};

export default ChapterListFacade;
