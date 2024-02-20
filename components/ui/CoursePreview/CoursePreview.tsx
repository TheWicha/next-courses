import React from "react";
import { CoursePreviewType } from "./coursePreviewTypes";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/lib/accordion";

const CoursePreview: React.FC<CoursePreviewType> = ({ item }) => {
  console.log(item);
  return (
    <div className="flex rounded-t-lg p-2">
      <Accordion type="single" collapsible>
        <AccordionItem value={item.name}>
          <AccordionTrigger>
            <span className="font-semibold"> {item.name}</span>
          </AccordionTrigger>
          <AccordionContent className=" mt-4">
            <div>{item.shortDesc}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CoursePreview;
