import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { GoInfo, GoVerified } from "react-icons/go";

const Breadcrumbs = () => {
  return (
    <div className="mt-[11px]">
      <hr className="bg-gray-300 w-[1024px] ml-[244px] p-2" />
      <div className="flex items-center gap-8 ml-[250px] text-[#4B5665]">
        <div className="flex flex-row">
          <GoVerified size={18} className="mt-1 mr-1" />
          <span>Last Updated - </span>
        </div>
        <span>February 22, 2020</span>

        <div className="flex flex-row">
          <GoInfo size={18} className="mt-1 mr-1" />
          <span>Disclosure</span>
        </div>
        <div className="ml-[490px] flex flex-row items-center">
          <span>Relevant</span>
          <span className="mt-1">
            <FiChevronDown />
          </span>
        </div>
      </div>
      <hr className="bg-gray-300 w-[1024px] ml-[244px] mt-4" />
    </div>
  );
};

export default Breadcrumbs;
