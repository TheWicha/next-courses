"use client";
import React from "react";
import Image from "next/image";
import NavItems from "../NavItems/NavItems";
import { NavItemsType } from "./sideNavType";

const SideNav: React.FC<NavItemsType> = ({ path }) => {
  return (
    <div className="p-5 bg-white shadow-sm border h-screen hidden sm:w-64 fixed sm:block">
      <div className="flex flex-col items-center">
        <Image
          priority
          src="/logo-no-background.png"
          alt="logo"
          width={370}
          height={350}
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
