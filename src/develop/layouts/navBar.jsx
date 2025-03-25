import React from "react";

const NavBar = () => {
  return (
    <div className="flex pt-10 justify-center md:gap-20 items-center">
      <div className="">
        <h1 className="text-white text-2xl">Naol Atomsa</h1>
      </div>
      <div className="md:flex hidden items-center gap-10 text-[14px]">
        <button className="cursor-pointer  text-white px-2 py-1 rounded-md">
          Home
        </button>
        <button className="cursor-pointer text-white px-2 py-1 rounded-md">
          About Me
        </button>
        <button className="cursor-pointer  text-white px-2 py-1 rounded-md">
          Services
        </button>
        <button className="cursor-pointer  text-white px-2 py-1 rounded-md">
          Projects
        </button>
        <button className="cursor-pointer  text-white px-2 py-1 rounded-md">
          Testimonials
        </button>
        <button className="cursor-pointer  text-white px-2 py-1 rounded-md">
          Contact
        </button>
        <button className="cursor-pointer bg-orange-700 text-white px-2 py-1 rounded-md">
          Download Cv
        </button>
      </div>
    </div>
  );
};

export default NavBar;
