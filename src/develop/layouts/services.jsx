import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../common/themeProvider";

export const Services = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`mx-auto md:py-10 py-5 h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
          Services
        </h1>
        <h1 className="md:w-3/4 w-[90%] libertinus-math-regular text-[18px] text-center">
          Passionate Full- Stack developer with a keen interest in software
          development and machine learning. Known for my enthusiasm and energy
          at work.
        </h1>
      </div>
      <div className="md:flex md:w-3/4 w-[90%] grid justify-center gap-10 items-center">
        <div
          className={`md:w-full p-5 rounded-2xl grid gap-5 ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <FontAwesomeIcon
            icon={faComputer}
            size="2xl"
            className="dark:text-orange-700"
          />
          <h1 className="md:text-2xl text-xl libertinus-math-regular  font-bold dark:text-orange-700">
            Web-Design
          </h1>
          <p className=" libertinus-math-regular text-[16px]">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
        </div>
        <div
          className={`md:w-full p-5 rounded-2xl grid gap-5 ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <FontAwesomeIcon
            icon={faComputer}
            size="2xl"
            className="dark:text-orange-700"
          />

          <h1 className="md:text-2xl text-xl font-bold libertinus-math-regular  dark:text-orange-700">
            Software Development
          </h1>
          <p className=" libertinus-math-regular text-[16px]">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
        </div>
        <div
          className={`md:w-full p-5 rounded-2xl grid gap-5 ${
            isDark ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <FontAwesomeIcon
            icon={faComputer}
            size="2xl"
            className="dark:text-orange-700"
          />

          <h1 className="md:text-2xl text-xl libertinus-math-regular font-bold dark:text-orange-700">
            Mobile-App-Design
          </h1>
          <p className=" libertinus-math-regular text-[16px]">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
        </div>
      </div>
    </div>
  );
};
