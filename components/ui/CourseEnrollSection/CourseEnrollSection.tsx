import React from "react";
import { copy } from "@/copy/CourseEnrollSectionCopy";
import { Button } from "@/components/ui/lib/button";

interface CourseEnrollSectionProps {
  membership: boolean;
}

const CourseEnrollSection: React.FC<CourseEnrollSectionProps> = ({
  membership,
}) => {
  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      <h2 className="text-[22px] font-bold text-white">{copy.title}</h2>
      <div className="flex flex-col gap-3 mt-3">
        <h2 className="text-white font-light">
          {membership ? copy.member.description : copy.guest.description}
        </h2>
        <Button
          variant="default"
          size="default"
          className="bg-white text-primary hover:bg-slate-100"
          asChild={false}
        >
          {membership ? copy.member.buttonText : copy.guest.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CourseEnrollSection;
