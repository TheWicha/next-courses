"use client";
import Link from "next/link";
import React from "react";
import CourseListItem from "../CourseListItem/CourseListItem";
import { CourseListPropsType } from "./CourseListTypes";

const CourseList: React.FC<CourseListPropsType> = ({
  courses,
  handleChange,
}) => {
  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">Courses</h2>
        <select name="courses" onChange={handleChange} className="m-1">
          <option value="all">All Courses</option>
          <option value="paid">Paid Courses</option>
          <option value="free">Free Courses</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
        {courses?.map((item, index) => (
          <Link href={`/course-preview/${item.slug}`} key={index}>
            <CourseListItem course={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
