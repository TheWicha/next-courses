import React from "react";
import { copy } from "@/copy/CourseEnrollSectionCopy";
import { Button } from "@/components/ui/lib/button";

const CourseEnrollSection = () => {
  return (
    <div className="p-3 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-[22px] font-bold text-white">{copy.title}</h2>
      <h2 className="text-white font-light"> {copy.description}</h2>
      <Button
        variant="default"
        size="default"
        className="bg-white text-primary hover:bg-slate-100"
        asChild={false}
      >
        {copy.buttonText}
      </Button>
    </div>
  );
};

export default CourseEnrollSection;
