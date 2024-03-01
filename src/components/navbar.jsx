import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="bg-[#212731] h-[64px] flex items-center">
        <form className="flex items-center ml-[489px] ">
          <input
            type="text"
            placeholder=""
            className=" h-[37px] w-[258px] border border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500"
          ></input>
        </form>
        <a className="ml-[80px] text-[#D1D6DA]">Categories</a>
        <a className="ml-[80px] text-[#D1D6DA]">Website Builders</a>
        <a className="ml-[100px] text-[#D1D6DA]">Today's deals</a>
      </div>
    </div>
  );
};

export default navbar;
