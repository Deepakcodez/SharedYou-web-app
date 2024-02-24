"use client";
import React, { useState, ChangeEvent } from "react";
import { Alert } from "../../_components/Alert";
import { PreviewFile } from "../../_components/PreviewFile";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAlert, setAlert] = useState<boolean>(false);

  const uploadhandler = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files && e.target.files[0];
    if (!uploadedFile) return;

    if (uploadedFile.size > 2000000) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false)
      },2000);
      console.log("File size exceeds 2MB");
    } else {
      setFile(uploadedFile);
     setAlert(false)
      console.log("Uploaded file:", uploadedFile);
    }
  };
  return (
    <>
      <div className=" flex flex-col items-center justify-center w-full bg-white h-screen  ">
        <label className="flex flex-col items-center justify-center md:w-[50%] w-[80%]  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-blue-100 bg-blue-50 hover:bg-blue-100 dark:border-blue-600/75 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => uploadhandler(e)}
          />
        </label>
        <PreviewFile file={file}/>
      </div>

      {/* alert  */}
      {isAlert && <Alert message={"File size exceeds 2MB"} />}
    </>
  );
};

export default Upload;
