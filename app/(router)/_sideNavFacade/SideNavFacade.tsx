import React from "react";
import { usePathname } from "next/navigation";
import SideNav from "@/components/ui/SideNav/SideNav";

const SideNavFacade = () => {
  const path = usePathname();
  return (
    <div className=" hidden sm:w-64 fixed sm:block">
      <SideNav path={path} />
    </div>
  );
};

export default SideNavFacade;
