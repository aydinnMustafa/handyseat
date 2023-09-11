import React from "react";

import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-200 w-full h-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center">
          <div className=" mb-1.5">
            <img className=" -mt-8" src={logo} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
