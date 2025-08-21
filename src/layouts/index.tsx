import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

type MainLayoutType = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div className="min-h-screen bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      {children}
    </div>
  );
};
