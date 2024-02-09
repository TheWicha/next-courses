"use client";
import React from "react";
import WelcomeBanner from "@/components/ui/WelcomeBanner";
import CourseListFacade from "app/(router)/courses/CourseListFacade";
import SideBanner from "@/components/ui/SideBanner";
import useGetBanner from "../../_utils/useGetBanner";

const Courses = () => {
  const { banner } = useGetBanner();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-4">
      <div className="col-span-3">
        <WelcomeBanner />
        <CourseListFacade />
      </div>
      <div className="hidden col-span-1 p-4 bg-white rounded-xl md:flex justify-center gap-4">
        <SideBanner banner={banner} />
      </div>
    </div>
  );
};

export default Courses;
