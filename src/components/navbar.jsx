import React from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";

const navbar = () => {
  return (
    <div>
      <div className="bg-[#212731] h-[64px] flex items-center">
        <form className="flex items-center ml-[489px] ">
          <PiMagnifyingGlassThin className="text-white mr-2" size={28} />
          <input
            type="text"
            placeholder=""
            className=" h-[37px] w-[258px] border border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500"
          ></input>
        </form>
        <a href="" className="ml-[80px] text-[#D1D6DA]">Categories</a>
        <a href="" className="ml-[80px] text-[#D1D6DA]">Website Builders</a>
        <a href="" className="ml-[100px] text-[#D1D6DA]">Today's deals</a>
      </div>
    </div>
  );
};

export default navbar;
