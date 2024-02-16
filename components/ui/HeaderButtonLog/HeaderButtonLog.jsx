import React from "react";
import { UserButton } from "@clerk/nextjs";

const HeaderButtonLog = () => {
  return <UserButton afterSignOutUrl="/courses" />;
};

export default HeaderButtonLog;
