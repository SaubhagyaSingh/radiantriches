import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the tick icon component

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[505px] h-[116px] bg-[#FFF4ED] flex-row justify-around items-center mb-4">
        <div className="text-center flex">
          <span className="text-xl text-[14px] font-bold text-[#1B88F4]">
            9.9
          </span>
          <span className="block mx-2 text-[14px]">Building Responsive</span>
        </div>
        <div className="text-center flex">
          <span className="text-xl font-bold text-[14px]  text-[#1B88F4]">
            8.9
          </span>
          <span className="block mx-2 text-[14px]">Cool</span>
        </div>
        <div className=" flex">
          <span className="text-xl font-bold text-[14px]  text-[#1B88F4]">
            8.9
          </span>
          <span className="block mx-2 text-[14px]">Docs</span>
        </div>
      </div>
      <div className=" align-left">
        <div className="font-bold mb-2">Why we love it</div>
        <div class="flex mb-2">
          <span className=" mt-1">
            <FaCheckCircle />
          </span>
          Documentation
        </div>
        <div class="flex mb-2">
          <span className=" mt-1">
            <FaCheckCircle />
          </span>
          Easy to Use
        </div>
        <div class="flex mb-2">
          <span className=" mt-1">
            <FaCheckCircle />
          </span>
          Out of the Box
        </div>
      </div>
    </div>
  );
};

export default Features;
