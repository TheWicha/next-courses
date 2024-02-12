"use client";
import React from "react";
import SideNav from "../../components/ui/SideNav/SideNav";
import Header from "../../components/ui/Header";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const layout = ({ children }) => {
  const queryClient = new QueryClient();
  const path = usePathname();
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" hidden sm:w-64 fixed sm:block">
        <SideNav path={path} />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </QueryClientProvider>
  );
};

export default layout;
