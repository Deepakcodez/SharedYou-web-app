import React from "react";
import {motion} from 'framer-motion'
import { log } from "console";
type messageType = {
  message: string;
};

export const Alert = ({ message }: messageType) => {
    console.log('>>>>>>>>>>> from alert', message)
  return (
    <motion.div
    initial= {{top:0,}}
    animate = {{top : '5rem' ,}}
    transition={{ type : "spring", stiffness:200, duration: .5 }}
    exit={{ opacity: [1, 0], y: 50, transition: { duration: 0.5 } }}
      role="alert"
      className="rounded absolute right-4 top-[5rem] border-s-4 border-red-500 bg-red-50 p-4"
    >
      <strong className="block font-medium text-red-800">
        {" "}
        Something went wrong{" "}
      </strong>

      <p className="mt-2 text-sm text-red-700">
        {message}
      </p>
    </motion.div>
  );
};
