import React from "react";
import { useTheme } from "../common/themeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGraduationCap,
  faLaptop,
  faStar,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";

import faReact from "../../assets/reactLogo.svg";
import faAngular from "../../assets/angularJs.svg";
import faNode from "../../assets/nodeJs.svg";
import faExpressJs from "../../assets/expressJs.svg";
import FaMongo from "../../assets/mongo.svg";
import faSpringBoot from "../../assets/springBoot.svg";
import faFlutter from "../../assets/flutter.svg";
import faDocker from "../../assets/docker.svg";
import faSQL from "../../assets/mySQL.svg";
import faPostgreSQL from "../../assets/postgreSQL.svg";

const NewAboutMe = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`h-full grid place-items-center gap-10  md:py-10 py-5 border-[1px] ${
        isDark ? "border-gray-300" : "border-[#222222]"
      }  ${isDark ? "text-black" : "text-white"}`}
    >
      <div className="flex  flex-col gap-5 items-center justify-center">
        <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
          Who Am I?
        </h1>
        <h1 className="md:w-3/4 w-[90%] libertinus-math-regular text-[18px] text-center">
          <span>I’m {""}</span>
          <span className="text-orange-700 font-bold">Naol Atomsa, </span>
          <span>a passionate </span>
          <span className="text-orange-700 font-bold">full-stack software engineer </span>

          <span>
            with a strong interest in machine learning and software development.
            I graduated from Adama Science and Technology University with a
            degree in Computer Science and Engineering. I’ve worked on projects
            ranging from AI-powered learning platforms to network security
            tools, using technologies like React, Node.js, Spring Boot, and
            Docker. Currently, I’m part of the Ethiopian Artificial Intelligence
            Institute,{" "}
          </span>

          <span className="text-orange-700 font-bold">
            where I focus on building smart, efficient systems that make a
            difference.
          </span>
        </h1>
      </div>
      <div className="md:flex  grid  md:gap-0 gap-10  md:items-start w-[90%] place-items-center md:w-3/4  md:justify-between   flex-wrap">
        <div className="grid flex-1 gap-2 place-items-center">
          <div
            className={`border w-12 h-12 rounded-full flex items-center justify-center ${
              isDark
                ? "bg-[#dee1e6]  border-gray-300"
                : "bg-[#131313]  border-[#222222]"
            }`}
          >
            <FontAwesomeIcon
              icon={faGraduationCap}
              className=" text-orange-700 text-[15px]"
            />
          </div>
          <h1 className="libertinus-math-regular text-center text-[18px]">
            Graduated From Adama Science and Technology University(ASTU)
          </h1>
          <h1 className="libertinus-math-regular text-center font-bold text-[16px] text-orange-700">
            Class of 2023 GC
          </h1>
        </div>
        <div className="grid gap-2 flex-1 place-items-center">
          <div
            className={`border w-12 h-12 rounded-full flex items-center justify-center ${
              isDark
                ? "bg-[#dee1e6]  border-gray-300"
                : "bg-[#131313]  border-[#222222]"
            }`}
          >
            <FontAwesomeIcon
              icon={faLaptop}
              className=" text-orange-700 text-[15px]"
            />
          </div>
          <h1 className="libertinus-math-regular grid  text-center text-[18px]">
            <span className="">
              School of Electrical Engineering and Computing
            </span>
            <span className="text-orange-700 text-[16px]">
              Department of Computer Science and Engineering
            </span>
          </h1>
        </div>
        <div className="grid gap-1 flex-1 place-items-center">
          <div
            className={`border w-12 h-12 rounded-full flex items-center justify-center ${
              isDark
                ? "bg-[#dee1e6]  border-gray-300"
                : "bg-[#131313]  border-[#222222]"
            }`}
          >
            <FontAwesomeIcon
              icon={faStar}
              className=" text-orange-700 text-[15px]"
            />
          </div>
          <h1 className="libertinus-math-regular text-[18px]">CGPA 3.65</h1>

          <h1 className="libertinus-math-regular font-bold text-orange-700 text-[16 px]">
            Major GPA 3.73
          </h1>
        </div>
      </div>
      <div className={` grid gap-10 place-items-center w-full `}>
        <h1
          className={`dark:text-gray-300 bg-orange-700   w-20 h-20  flex items-center justify-center rounded-full text-xl libertinus-math-regular text-center font-bold`}
        >
          <div>
            <h1>Skills</h1>
            <FontAwesomeIcon size="md" icon={faChevronDown} />
          </div>
        </h1>

        <div className="flex libertinus-math-regular text-[12px] md:w-3/4 w-[90%] justify-center gap-10 md:justify-between flex-wrap">
          <div className="grid gap-1 place-items-center">
            <img
              src={faReact}
              alt="react"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">React Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faAngular}
              alt="react"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Angular Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faNode}
              alt="react"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Node Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faExpressJs}
              alt="react"
              className="flex-1  md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Express Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={FaMongo}
              alt="react"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Mongo DB</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faSpringBoot}
              alt="react"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Spring Boot</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faSQL}
              alt="sql"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">SQL</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faPostgreSQL}
              alt="postgreSQL"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">PostgreSQL</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faDocker}
              alt="docker"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Docker</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img
              src={faFlutter}
              alt="react"
              className="flex-1 md:w-16 md:h-16 w-10 h-10"
            />
            <h1 className="text-center">Flutter</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboutMe;
