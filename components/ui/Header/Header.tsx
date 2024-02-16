import { BellDot, Search } from "lucide-react";
import React from "react";
import HeaderButtonLog from "@/components/ui/HeaderButtonLog/HeaderButtonLog";
import HeaderButtonUnlog from "@/components/ui/HeaderButtonUnlog/HeaderButtonUnlog";
import { HeaderType } from "./HeaderTypes";

const Header: React.FC<HeaderType> = ({ user, openDrawer }) => {
  const button = user.isSignedIn ? <HeaderButtonLog /> : <HeaderButtonUnlog />;

  return (
    <div className="p-4 bg-white w-full flex justify-between sm:justify-end  md:justify-between sm:ml-64 cursor-pointer">
      <span onClick={openDrawer} className="[&>svg]:w-7 flex sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <div className="items-center gap-2 border rounded-sm md:flex hidden">
        <Search className="  w-5 h-5 " />
        <input
          className="outline-none"
          type="text"
          placeholder="Search..."
        ></input>
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500 cursor-pointer" />

        <div> {button}</div>
      </div>
    </div>
  );
};

export default Header;
