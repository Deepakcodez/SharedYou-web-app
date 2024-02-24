import React from "react";
import { Sidebar } from "./_components/Sidebar";
import { TopHeader } from "./_components/TopHeader";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className=" flex-col w-full">
        <div className="w-full">
          <TopHeader />
        </div>
        <div className="w-full flex ">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
