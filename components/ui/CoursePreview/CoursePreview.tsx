import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/lib/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/lib/button";
import { CoursePreviewType } from "./coursePreviewType";

const CoursePreview: React.FC<CoursePreviewType> = ({ item, index, data }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="mr-3 flex items-center justify-center font-bold border bg-violet-600  rounded-full w-[25px] h-[25px] text-white">
            {index + 1}
          </span>{" "}
          {item.name}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-start mt-4">
          <div>{item.shortDesc}</div>
          <Button className="mt-4">
            <Link href={`${data}/${item.id}`}>Start lesson</Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CoursePreview;
