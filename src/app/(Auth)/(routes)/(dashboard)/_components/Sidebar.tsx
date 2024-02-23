import { FolderKanban, Upload } from "lucide-react";
import React, { Fragment } from "react";

export const Sidebar = () => {
  const menu = [
    {
      title: "Upload",
      icon: <Upload />,
    },
    {
      title: "Files",
      icon: <FolderKanban />,
    },
  ];
  return (
    <div className="h-screen w-[10rem] bg-white text-black p-2 ">
        <h1 className="border-b border-black/25">

      Logo
        </h1>
      {/* menu  */}
      <div className="menu p-4 pt-8">
        {menu.map((item, index) => (
          <Fragment key={index}>
            <div className=" flex  gap-4 pt-4 ">
                {item.icon}
              <h1>{item.title}</h1>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
