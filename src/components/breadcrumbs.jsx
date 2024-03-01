import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
import { GoVerified } from "react-icons/go";

const Breadcrumbs = () => {
  return (
    <div className="mt-[11px]">
      <hr className="bg-#E1E4E6 w-[1024px] ml-[244px] p-2"></hr>
      <div
        className="flex items-center gap-8 ml-[250px] text-[#4B5665] 
"
      >
        <div className="flex flex-row">
          <GoVerified size={18} className="mt-1 mr-1"></GoVerified>
          <span>Last Updated - </span>
        </div>
        <span>February 22,2020</span>

        <div class="flex flex-row">
          <GoInfo size={18} className="mt-1 mr-1" />
          <span>Disclosure</span>
        </div>
        <div class="ml-[490px]  flex flex-row items-center">
          <span>Relevant</span>
          <span className="mt-1">
            <FiChevronDown />
          </span>
        </div>
      </div>
      <hr className="#E1E4E6 w-[1024px] ml-[244px] mt-4"></hr>
    </div>
  );
};

export default Breadcrumbs;
