"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SideNavFacade from "./_sideNavFacade/SideNavFacade";
import HeaderFacade from "./_headerFacade/HeaderFacade";

const layout = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SideNavFacade />
      <div className="sm:ml-64">
        <HeaderFacade />
        {children}
      </div>
    </QueryClientProvider>
  );
};

export default layout;
