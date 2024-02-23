import { FolderKanban,  Upload } from "lucide-react";
import React, { Fragment } from "react";
import Link from 'next/link'
export const Sidebar = () => {
    type MenuItem = {
        title: string;
        icon: React.ReactNode;
        navigate : string
      };
  const menu: MenuItem[]  = [
    {
      title: "Upload",
      icon: <Upload />,
      navigate : '/upload'
    },
    {
      title: "Files",
      icon: <FolderKanban />,
      navigate : '/files'
    },
  ];
  return (
    <div className="h-screen w-[15rem] bg-white text-black  ">
        <h1 className="border-b border-black/25">

      Logo
        </h1>
      {/* menu  */}
      <div className="menu  pt-8">
        {menu.map((item, index) => (
          <Fragment key={index}>
            <Link  href={item.navigate}   className=" flex  gap-4 pt-2 hover:bg-gray-200 h-14 items-center ">
                <h1 className="text-gray-500 ps-10 ">
                {item.icon}

                </h1>
              <h1 className="text-gray-500 ">{item.title}</h1>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
