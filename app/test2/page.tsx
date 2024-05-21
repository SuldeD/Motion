/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsOpen(!isOpen);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className={cn(
          "bg-white w-24 h-24 flex items-center justify-center relative overflow-hidden",
          isOpen && "w-[400px]"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className={cn(
            isOpen ? "left-5 " : "-left-20",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-20 " : "-left-20",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-75"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-36 " : "-left-20",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-100"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-52" : "-left-20",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-150"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-[274px]" : "-left-20",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-200"
          )}
        />
      </motion.div>

      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className={cn(
          "bg-white h-24 flex items-center justify-center relative overflow-hidden w-[340px]"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className={cn(
            isOpen ? "left-5" : "left-36",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-500"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-20" : "left-36",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-300"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-36" : "left-36",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-52" : "left-36",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-300"
          )}
        />
        <motion.div
          layout
          className={cn(
            isOpen ? "left-[274px]" : "left-36",
            "w-12 h-12 absolute bg-red-300 rounded-full top-5 duration-500"
          )}
        />
      </motion.div>

      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className={cn(
          "bg-white h-24 flex items-center justify-center relative overflow-hidden w-[340px]"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className={cn(
            isOpen ? "left-24" : "left-[122px]",
            "w-12 h-20 absolute z-10 ease-in-out bg-amber-950 top-2 duration-700 border-r border-black"
          )}
        />
        <motion.div
          layout
          className={cn(
            "flex items-center justify-center w-24 h-12 duration-1000",
            isOpen ? "bg-black opacity-100" : "bg-white opacity-0"
          )}
        >
          <svg
            className="w-9"
            viewBox="0 0 969 955"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="161.191"
              cy="320.191"
              r="133.191"
              stroke="currentColor"
              strokeWidth="20"
            ></circle>
            <circle
              cx="806.809"
              cy="320.191"
              r="133.191"
              stroke="currentColor"
              strokeWidth="20"
            ></circle>
            <circle
              cx="695.019"
              cy="587.733"
              r="31.4016"
              fill="currentColor"
            ></circle>
            <circle
              cx="272.981"
              cy="587.733"
              r="31.4016"
              fill="currentColor"
            ></circle>
            <path
              d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
              fill="currentColor"
            ></path>
            <rect
              x="310.42"
              y="448.31"
              width="343.468"
              height="51.4986"
              fill="#FF1E1E"
            ></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
        <motion.div
          layout
          className={cn(
            isOpen ? "right-24" : "right-[122px]",
            "w-12 h-20 absolute z-10 ease-in-out bg-amber-950 top-2 duration-700 border-l border-black"
          )}
        />
      </motion.div>
    </div>
  );
}
