"use client";
import React from "react";
import SideNav from "@/components/ui/SideNav/SideNav";
import Header from "@/components/ui/Header/Header";
import Loader from "@/components/ui/Loader/Loader";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUser } from "@clerk/nextjs";

const layout = ({ children }) => {
  const queryClient = new QueryClient();
  const path = usePathname();
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className=" hidden sm:w-64 fixed sm:block">
        <SideNav path={path} />
      </div>
      <div className="sm:ml-64">
        <Header user={{ isLoaded, isSignedIn }} />
        {children}
      </div>
    </QueryClientProvider>
  );
};

export default layout;
