import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SideNav from "@/components/ui/SideNav/SideNav";
import MobileNavigation from "@/components/ui/MobileNavigation/MobileNavigation";
import Header from "@/components/ui/Header/Header";

import { useUser } from "@clerk/nextjs";

const NavigationFacade = () => {
  const path = usePathname();
  const { isLoaded, isSignedIn } = useUser();
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);


  return (
    <div className="flex ">
      <Header user={{ isLoaded, isSignedIn }} openDrawer={openDrawer} />
      <SideNav path={path} />
      <MobileNavigation path={path} open={open} closeDrawer={closeDrawer} />
    </div>
  );
};

export default NavigationFacade;
