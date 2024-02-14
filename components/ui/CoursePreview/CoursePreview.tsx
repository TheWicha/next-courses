import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/lib/accordion";
import { CoursePreviewType } from "./coursePreviewType";

const CoursePreview: React.FC<CoursePreviewType> = ({ item, index }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="mr-3 flex items-center justify-center font-bold border bg-violet-600  rounded-full w-[25px] h-[25px] text-white">
            {index + 1}
          </span>
          {item.name}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-start mt-4">
          <div>{item.shortDesc}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CoursePreview;
