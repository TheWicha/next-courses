import { BellDot, Search } from "lucide-react";
import React from "react";
import HeaderButtonLog from "@/components/ui/HeaderButton/HeaderButtonLog";
import HeaderButtonUnlog from "@/components/ui/HeaderButton/HeaderButtonUnlog";

const Header = ({ user }) => {
  const button = user.isSignedIn ? <HeaderButtonLog /> : <HeaderButtonUnlog />;

  return (
    <div className="p-4 bg-white flex justify-end md:justify-between ">
      <div className=" items-center gap-2 border rounded-sm md:flex hidden">
        <Search className="  w-5 h-5 " />
        <input
          className="outline-none"
          type="text"
          placeholder="Search..."
        ></input>
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        <div> {button}</div>
      </div>
    </div>
  );
};

export default Header;
