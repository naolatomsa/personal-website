import React, { useState, useEffect } from "react";
import naolHome from "../../assets/naolee.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faGlobe,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { mobileData } from "../data/menuItems";
const NavBar = ({ onScrollTo }) => {
  //mobile devices

  const [isMobile, setIsMobile] = useState(false);
  // const handleToggleForMobile = () => setIsMobile(!isMobile);

  const handleExpand = (id) => {
    setExpandedItem((prev) => (prev === id ? null : id)); // Toggle expanded state
  };

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
  }, [isMobile]);
  return (
    <div className="bg-[#121212] w-screen z-50 navbar">
      <div className="flex  md:pt-10 font-sans py-5 items-center justify-between mx-auto md:w-3/4 w-[90%]">
        <div className="md:w-[15%] cursor-pointer">
          <h1
            onClick={() => onScrollTo("home")}
            className="text-white  md:text-2xl font-bold"
            style={{
              borderBottom: "1px solid transparent",
              borderImage:
                "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
              width: "100%",
            }}
          >
            Naol Atomsa
          </h1>
          {/* <img src={naolHome} alt="naol home" /> */}
        </div>
        <div className="md:flex hidden items-center gap-5 text-[14px]">
          <button
            onClick={() => onScrollTo("home")}
            className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md"
          >
            Home
          </button>
          <button
            onClick={() => onScrollTo("about")}
            className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md"
          >
            About Me
          </button>
          <button
            onClick={() => onScrollTo("services")}
            className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md"
          >
            Services
          </button>
          <button
            onClick={() => onScrollTo("projects")}
            className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md"
          >
            Projects
          </button>
          <button
            onClick={() => onScrollTo("testimonials")}
            className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md"
          >
            Testimonials
          </button>
          <button
            onClick={() => onScrollTo("contact")}
            className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md"
          >
            Contact
          </button>
          <button className="cursor-pointer hover:bg-orange-950 hover:text-gray-500 font-semibold bg-orange-700 text-white px-4 py-1 rounded-md">
            Download CV
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Menu
            open={isMobile}
            handler={setIsMobile}
            dismiss={{
              outsidePointerDown: true, // Close menu when clicking outside
              insidePointerDown: false, // Prevent menu from closing when clicking inside
            }}
          >
            <MenuHandler>
              <button
                // onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-md border py-1 px-2 rounded-md border-gray-500 text-white dark:bg-orange-700"
              >
                {isMobile ? `Close` : `Menu`}
              </button>
            </MenuHandler>

            <MenuList
              id="menu"
              className="bg-[#21212133] border p-5 border-orange-700 backdrop-blur-3xl rounded-3xl w-full navbar:hidden flex flex-col gap-7 justify-center h-3/4 z-50"
            >
              <MenuItem className="col-span-2 hover:bg-transparent justify-self-start focus:bg-transparent active:bg-transparent">
                <div
                  className="flex gap-5 justify-center items-center"
                  style={{
                    borderBottom: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
                    width: "100%",
                  }}
                >
                  <ul className="flex items-center justify-center gap-5 py-3">
                    <li
                      className="py-3"
                      onClick={() => {
                        setIsMobile(false), onScrollTo("contact");
                      }}
                    >
                      <div
                        to={`/contact-us`}
                        className="px-3 py-2 dark:bg-orange-700 text-white rounded-[4px] normal-case text-[14px] font-semibold md:leading-[20px] leading-[16px]"
                      >
                        Contact Me
                      </div>
                    </li>
                    <li
                      className="flex justify-center items-center gap-3 px-2 py-3"
                      style={{
                        borderLeft: "1px solid transparent",
                        borderImage:
                          "linear-gradient(to bottom, transparent, white, transparent) 1", // Gradient effect
                        height: "100%",
                      }}
                    >
                      {/* <FontAwesomeIcon icon={faGlobe} color="white" /> */}
                      <a className=" text-sm font-semibold transition-all delay-100 hover:text-[#15ABC2] text-white">
                        Addis Ababa, Ethiopia
                      </a>
                    </li>
                  </ul>
                </div>
              </MenuItem>
              {mobileData.map((parent) => (
                <div key={parent.id}>
                  <MenuItem
                    onClick={() => handleExpand(parent.id)} // Toggle child items
                    className=" focus:bg-transparent active:bg-transparent"
                    style={{
                      borderBottom: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
                      width: "100%",
                    }}
                  >
                    <div
                      to={`${`comming-soon`}`}
                      onClick={() => {
                        setIsMobile(!isMobile), onScrollTo(parent.link);
                      }}
                    >
                      <div className="flex justify-center  w-full">
                        <h1 className="text-white hover:text-white active:text-white">
                          {parent.title}
                        </h1>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              ))}

              <MenuItem className="hover:bg-transparent flex justify-center focus:bg-transparent active:bg-transparent ">
                <span className="px-3 py-2 dark:bg-orange-700 text-white rounded-[4px] normal-case text-[14px] font-semibold md:leading-[20px] leading-[16px]">
                  Download CV
                </span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
