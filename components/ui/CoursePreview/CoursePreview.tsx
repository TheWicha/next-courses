import React, { useState } from "react";
import { clsx } from "clsx";
import { CoursePreviewType } from "./coursePreviewTypes";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/lib/accordion";

const CoursePreview: React.FC<CoursePreviewType> = ({ item }) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = () => setCollapsed(!collapsed);

  return (
    <div className="rounded-t-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value={item.name}>
          <AccordionTrigger
            onClick={handleClick}
            className={clsx("bg-violet-300 p-3", {
              "rounded-md": !collapsed,
              "rounded-t-md": collapsed,
            })}
          >
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
