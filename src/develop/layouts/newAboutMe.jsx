import React from "react";
import { useTheme } from "../common/themeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
          Passionate Full- Stack developer with a keen interest in software
          development and machine learning. Known for my enthusiasm and energy
          at work.
        </h1>
      </div>
      <div className="md:flex  grid md:gap-0 gap-10  items-start md:w-3/4  w-[90%] justify-between   flex-wrap">
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
              dee1e6
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
      <div className={` w-full grid gap-10 place-items-center `}>
        <h1
          className={`dark:text-orange-700  border w-20 h-20  flex items-center justify-center rounded-full text-xl libertinus-math-regular text-center font-bold
            ${
              isDark
                ? "bg-[#dee1e6]  border-gray-300"
                : "bg-[#131313]  border-[#222222]"
            }`}
        >
          Skills
        </h1>
        <div className="flex libertinus-math-regular text-[12px] md:w-3/4 w-[90%] gap-5 justify-between flex-wrap">
          <div className="grid gap-1 place-items-center">
            <img src={faReact} alt="react" className="flex-1 w-16 h-16" />
            <h1 className="text-center">React Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img src={faAngular} alt="react" className="flex-1 w-16 h-16" />
            <h1 className="text-center">Angular Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img src={faNode} alt="react" className="flex-1 w-16 h-16" />
            <h1 className="text-center">Node Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img src={faExpressJs} alt="react" className="flex-1  w-16 h-16" />
            <h1 className="text-center">Express Js</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img src={FaMongo} alt="react" className="flex-1 w-16 h-16" />
            <h1 className="text-center">Mongo DB</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img src={faSpringBoot} alt="react" className="flex-1 w-16 h-16" />
            <h1 className="text-center">Spring Boot</h1>
          </div>
          <div className="grid gap-1 place-items-center">
            <img src={faFlutter} alt="react" className="flex-1 w-16 h-16" />
            <h1 className="text-center">Flutter</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboutMe;
