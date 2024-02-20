"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavigationFacade from "./_NavigationFacade/NavigationFacade";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/ui/Loader/Loader";
const layout = ({ children }) => {
  const queryClient = new QueryClient();
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationFacade />
      <div className="sm:ml-64">{children}</div>
    </QueryClientProvider>
  );
};

export default layout;
