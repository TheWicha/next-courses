"use client";
import React from "react";
import SideNav from "../../components/ui/SideNav/SideNav";
import Header from "../../components/ui/Header";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const path = usePathname();
  return (
    <div>
      <div className=" hidden sm:w-64 fixed sm:block">
        <SideNav path={path} />
      </div>

      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
