import React from "react";
import logo from "../assets/chaicode-white.png";

const Navbar = () => {
  return (
    <nav class="w-full py-5 px-20 flex justify-between fixed top-0 left-0 bg-black z-50">
      <div>
        <img className="w-32" src={logo} />
      </div>
      <div className="flex gap-10 text-gray-200 items-center">
        <div className="flex gap-5">
          <div className="hover:text-orange-400 duration-300 ease-in-out cursor-pointer">
            Cohort
          </div>
          <div className="hover:text-orange-400 duration-300 ease-in-out cursor-pointer">
            Udemy
          </div>
          <div className="hover:text-orange-400 duration-300 ease-in-out cursor-pointer">
            Docs
          </div>
          <div className="hover:text-orange-400 duration-300 ease-in-out cursor-pointer">
            Review
          </div>
        </div>
        <button className="cursor-pointer bg-gradient-to-t from-orange-500 to-yellow-400/90 text-black px-5 py-1 rounded-sm duration-300 ease-in-out hover:-translate-y-0.5">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
