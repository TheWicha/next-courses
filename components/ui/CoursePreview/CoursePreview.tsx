import React from "react";
import { CoursePreviewType } from "./coursePreviewTypes";

const CoursePreview: React.FC<CoursePreviewType> = ({ item }) => {
  return (
    <div>
      <div className="flex mb-2 bg-slate-100 rounded-t-lg p-2">
        <span className="font-semibold "> {item.name}</span>
      </div>
      <div className="p-4">{item.shortDesc}</div>
    </div>
  );
};

export default CoursePreview;
