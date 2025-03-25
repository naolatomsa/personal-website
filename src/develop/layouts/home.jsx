import React from "react";
import NavBar from "./navBar";

const Home = () => {
  return (
    <div className="grid mx-20 justify-center h-screen">
      <div className="  border-white">
        <NavBar />
      </div>
      <div className="md:flex grid w-full md:gap-20  justify-center">
        <div>
          <h1 className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
        <div>
          <h1 className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
