import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div className="mx-auto md:min-h-screen md:py-10 py-5 h-full flex gap-10 flex-col items-center ">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1
          className="text-white text-3xl text-center"
          style={{
            borderBottom: "1px solid transparent",
            borderImage:
              "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
            // width: "100%",
          }}
        >
          Services
        </h1>
        <h1 className="text-white  w-[90%] text-center font-sans">
          Passionate Full- Stack developer with a keen interest in software
          development and machine learning. Known for my enthusiasm and energy
          at work.
        </h1>
      </div>
      <div className="md:flex md:w-3/4 w-[90%] grid justify-center gap-10 items-center">
        <div className="md:w-full p-5 rounded-2xl bg-gray-800 text-white grid gap-5">
          <FontAwesomeIcon
            icon={faComputer}
            size="2xl"
            className="dark:text-orange-700"
          />
          <h1 className="md:text-3xl text-2xl font-bold dark:text-orange-700">Web-Design</h1>
          <p className="text-white">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
        </div>
        <div className="md:w-full p-5 rounded-2xl grid gap-5 bg-gray-800">
          <FontAwesomeIcon
            icon={faComputer}
            size="2xl"
            className="dark:text-orange-700"
          />

          <h1 className="md:text-3xl text-2xl font-bold dark:text-orange-700">
            Software Development
          </h1>
          <p className="text-white">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
        </div>
        <div className="md:w-full p-5 rounded-2xl bg-gray-800">
          <FontAwesomeIcon
            icon={faComputer}
            size="2xl"
            className="dark:text-orange-700"
          />

          <h1 className="md:text-3xl text-2xl font-bold dark:text-orange-700">Mobile-App-Design</h1>
          <p className="text-white">
            Passionate Full- Stack developer with a keen interest in software
            development and machine learning. Known for my enthusiasm and energy
            at work.
          </p>
        </div>
      </div>
    </div>
  );
};
