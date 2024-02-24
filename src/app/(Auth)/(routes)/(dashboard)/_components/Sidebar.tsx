"use client";
import { FolderKanban, Upload } from "lucide-react";
import React, { Fragment, useState } from "react";
import Link from "next/link";
export const Sidebar = () => {
  const [ActiveIndex, setActiveIndex] = useState(0);
  type MenuItem = {
    title: string;
    icon: React.ReactNode;
    navigate: string;
  };
  const menu: MenuItem[] = [
    {
      title: "Upload",
      icon: <Upload />,
      navigate: "/upload",
    },
    {
      title: "Files",
      icon: <FolderKanban />,
      navigate: "/files",
    },
  ];
  return (
    <div className="hidden md:block h-screen  md:w-[15rem] bg-white text-black border-r ">
      {/* menu  */}
      <div className="menu  pt-8">
        {menu.map((item, index) => (
          <Fragment key={index}>
            <Link
              href={item.navigate}
              onClick={() => setActiveIndex(index)}
              className={`flex gap-5 pt-2 text-blue-400 hover:bg-gray-200 h-14 items-center ${
                ActiveIndex === index ? " bg-blue-50" : ""
              }`}
            >
              <h1 className={`text-gray-500 ps-10 ${ActiveIndex == index && "text-blue-500"}`}>{item.icon}</h1>
              <h1 className = {`text-gray-500  ${ActiveIndex == index && "text-blue-500"}`} >{item.title}</h1>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
