import React from "react";
import SignupBar from "./Signupbar";
import Countrydropdown from "./Countrydropdown";

const MyFooter = () => {
  return (
    <div>
      <div className=" flex flex-row w-[1024px] h-[171px] text-[32px] ml-[338px] text-[#5C6874]">
        <span>
          Sign up and get exclusive<br></br> special deals
        </span>
        <span class="ml-[260px]">
          <SignupBar />
        </span>
      </div>
      <div className="bg-[#212731] h-[452px] w-[100%] text-[#FFFFFF] p-4 flex">
        <div className="flex flex-col ml-[295px] text-[16px] gap-4 mt-12">
          <a href="" >Categories</a>
          <a  href="" className="text-[13px]">Web Builder</a>
          <a  href="" className="text-[13px]">Hosting</a>
          <a  href="" className="text-[13px]">Data Center</a>
          <a  href="" className="text-[13px]">Robotic automation</a>
        </div>
        <div className="flex flex-col ml-[295px] text-[16px] gap-4 mt-12">
          <a href="" >Contact</a>
          <a  href="" className="text-[13px]">Privacy Policy</a>
          <a  href="" className="text-[13px]">Terms of Service</a>
          <a  href="" className="text-[13px]">Categories</a>
          <a  href="" className="text-[13px]">About</a>
        </div>
        <div className="ml-[300px] mt-[80px]">
          <Countrydropdown />
        </div>
      </div>
      ;
    </div>
  );
};

export default MyFooter;
