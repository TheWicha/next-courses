import React from "react";
import { CoursePreviewType } from "./coursePreviewTypes";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/lib/accordion";

const CoursePreview: React.FC<CoursePreviewType> = ({ item }) => {
  return (
    <div className="rounded-t-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value={item.name}>
          <AccordionTrigger className="bg-violet-100 p-3">
            <span className="font-semibold"> {item.name}</span>
          </AccordionTrigger>
          <AccordionContent className=" mt-4">
            <div className="p-2">{item.shortDesc}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CoursePreview;
