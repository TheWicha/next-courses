import React from "react";
import Header from "@/components/ui/Header/Header";
import Loader from "@/components/ui/Loader/Loader";
import { useUser } from "@clerk/nextjs";
const HeaderFacade = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  return <Header user={{ isLoaded, isSignedIn }} />;
};

export default HeaderFacade;
