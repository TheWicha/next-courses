import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/lib/accordion";
import { CoursePreviewType } from "./coursePreviewTypes";

const CoursePreview: React.FC<CoursePreviewType> = ({ item, index }) => {
  return (
    <div>
      <div className="flex mb-2 bg-violet-100 rounded-t-lg p-2">
        <span className="mr-3 flex items-center justify-center font-bold  bg-violet-600  rounded-full w-[25px] h-[25px] text-white">
          {index + 1}
        </span>
        {item.name}
      </div>
      <div className="p-4">{item.shortDesc}</div>
    </div>
  );
};

export default CoursePreview;
