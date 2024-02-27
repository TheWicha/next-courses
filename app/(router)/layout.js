"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavigationFacade from "./_NavigationFacade/NavigationFacade";
import Loader from "@/components/ui/Loader/Loader";
const layout = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Loader />
      <NavigationFacade />
      <div className="sm:ml-64">{children}</div>
    </QueryClientProvider>
  );
};

export default layout;
