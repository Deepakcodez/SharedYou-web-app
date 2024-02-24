import React from "react";
import { FileText , X } from "lucide-react";
export const PreviewFile = ({ file ,removeFile}: File | null) => {
  console.log(">>>>>>>>>>>from preview", file);
  return (
    <>
      <div className=" flex  gap-4 items-center border border-dotted w-[80%] p-5 md:w-[50%] mt-5">
        <div>
          <FileText color="#0f73ff" size={50} />
        </div>
        <div className=" flex flex-col  truncate  ">
          <div className="text-black truncate font-bold">{file.name}</div>
          <div className="text-black text-gray-400 truncate">{file.type}</div>
        </div>
        <div onClick={()=>removeFile()} ><X color="red" /></div>
      </div>
    </>
  );
};
