import React from "react";
import naolHome from "../../assets/naolee.png";

const NavBar = () => {
  return (
    <div className="bg-[#121212] w-screen">
      <div className="flex  md:pt-10 font-sans py-5  justify-between mx-auto w-3/4">
        <div className="w-[15%] cursor-pointer">
          <h1 className="text-white text-2xl font-bold">Naol Atomsa</h1>
          {/* <img src={naolHome} alt="naol home" /> */}
        </div>
        <div className="md:flex hidden items-center gap-5 text-[14px]">
          <button className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md">
            Home
          </button>
          <button className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md">
            About Me
          </button>
          <button className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md">
            Services
          </button>
          <button className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md">
            Projects
          </button>
          <button className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md">
            Testimonials
          </button>
          <button className="cursor-pointer hover:text-gray-500 font-semibold text-white px-2 py-1 rounded-md">
            Contact
          </button>
          <button className="cursor-pointer hover:bg-orange-950 hover:text-gray-500 font-semibold bg-orange-700 text-white px-4 py-1 rounded-md">
            Download CV
          </button>
        </div>
      </div>
    </div>  
  );
};

export default NavBar;
