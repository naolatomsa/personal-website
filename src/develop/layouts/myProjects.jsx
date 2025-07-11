import React from "react";
import menas from "../../assets/menas.png";
import { useTheme } from "../common/themeProvider";

const MyProjects = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`mx-auto border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } md:h-full md:py-10 py-5  h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
          My Projects
        </h1>
        <h1 className="md:w-3/4 w-[90%] libertinus-math-regular text-[18px] text-center font-sans">
          Passionate Full- Stack developer with a keen interest in software
          development and machine learning. Known for my enthusiasm and energy
          at work.
        </h1>
      </div>
      <div className="md:flex grid grid-cols-2 gap-5 w-3/4 md:gap-3 justify-center libertinus-math-regular text-[16px]">
        <button
          className={`cursor-pointer hover:dark:bg-orange-700 active:dark:bg-orange-700 focus:dark:bg-orange-700 active:text-white focus:text-white hover:text-white font-semibold  px-4 py-1 rounded-md ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          All
        </button>
        <button
          className={`cursor-pointer hover:dark:bg-orange-700 active:dark:bg-orange-700 focus:dark:bg-orange-700 active:text-white focus:text-white hover:text-white font-semibold  px-4 py-1 rounded-md ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          {" "}
          Website
        </button>
        <button
          className={`cursor-pointer hover:dark:bg-orange-700 active:dark:bg-orange-700 focus:dark:bg-orange-700 active:text-white focus:text-white hover:text-white font-semibold  px-4 py-1 rounded-md ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          {" "}
          Software
        </button>
        <button
          className={`cursor-pointer hover:dark:bg-orange-700 active:dark:bg-orange-700 focus:dark:bg-orange-700 active:text-white focus:text-white hover:text-white font-semibold  px-4 py-1 rounded-md ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          {" "}
          Mobile
        </button>
      </div>
      <div className="md:flex w-[90%] grid  justify-center gap-10 ">
        <div className="md:w-1/4 grid gap-2">
          <img src={menas} alt="mypic" />
          <h1 className="dark:text-orange-700 font-bold libertinus-math-regular text-[14px]">
            Website
          </h1>
          <h1 className=" text-2xl libertinus-math-regular">
            Menas Cyber Solution
          </h1>
          <p
            className={`text-[16px] libertinus-math-regular ${
              isDark ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
          <a className="text-xs text-blue-700 underline libertinus-math-regular cursor-pointer">
            Go to the site
          </a>
        </div>
        <div className="md:w-1/4 grid gap-2">
          <img src={menas} alt="mypic" />
          <h1 className="dark:text-orange-700 font-bold libertinus-math-regular text-[14px]">
            Website
          </h1>
          <h1 className=" text-2xl libertinus-math-regular">
            Menas Cyber Solution
          </h1>
          <p
            className={`text-[16px] libertinus-math-regular ${
              isDark ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
          <a className="text-xs text-blue-700 underline libertinus-math-regular cursor-pointer">
            Go to the site
          </a>
        </div>
        <div className="md:w-1/4 grid gap-2">
          <img src={menas} alt="mypic" />
          <h1 className="dark:text-orange-700 font-bold libertinus-math-regular text-[14px]">
            Website
          </h1>
          <h1 className=" text-2xl libertinus-math-regular">
            Menas Cyber Solution
          </h1>
          <p
            className={`text-[16px] libertinus-math-regular ${
              isDark ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
          <a className="text-xs text-blue-700 underline libertinus-math-regular cursor-pointer">
            Go to the site
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
