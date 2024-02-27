import React, { memo } from "react";
import CoursePreview from "@/components/ui/CoursePreview/CoursePreview";
import { ChapterListFacadeProps } from "./ChapterListFacadeTypes";

const ChapterListFacade: React.FC<ChapterListFacadeProps> = ({ chapters }) => {
  return (
    <div className="flex flex-col gap-1 col-span-2 ">
      {chapters?.map((item, index) => (
        <div key={index} className="border rounded-lg gap-4 ">
          <CoursePreview item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default memo(ChapterListFacade);
