"use client";
import React from "react";
import Image from "next/image";

import NavItems from "./NavItems";

const SideNav = ({ path }) => {
  return (
    <div className="p-5 bg-white shadow-sm border h-screen ">
      <div className="flex flex-col items-center">
        <Image
          priority
          src="/logo-no-background.svg"
          alt="logo"
          width={"0"}
          height="0"
          style={{ width: "170px", height: "auto" }}
        />
      </div>
      <hr className="mt-7" />
      <div className="mt-5">
        <NavItems path={path} />
      </div>
    </div>
  );
};

export default SideNav;
