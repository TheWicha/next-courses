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
          src="/logo-no-background.png"
          alt="logo"
          width={170}
          height={150}
          // style={{ width: "170px", height: "auto" }}
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
