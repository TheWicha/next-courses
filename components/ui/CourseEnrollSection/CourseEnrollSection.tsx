import React from "react";
import { CourseEnrollSectionProps } from "./CourseEnrollSectionTypes";

const CourseEnrollSection: React.FC<CourseEnrollSectionProps> = ({
  content,
}) => {
  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      <div className="flex flex-col gap-3 mt-3">
        <h2 className="text-white  text-[18px] ">{content.description}</h2>
        {content.button}
      </div>
    </div>
  );
};

export default CourseEnrollSection;
