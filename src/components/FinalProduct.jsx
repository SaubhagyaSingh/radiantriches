import React from "react";
import Tile from "./Tile";
import { FiChevronDown } from "react-icons/fi";
import Features from "./Features.jsx"; // Import the Features component

const FinalProduct = ({
  myrating,
  no,
  trophyText,
  prevImage,
  builderName,
  title,
  highlights,
  mainhighlights,
}) => {
  return (
    <div className="mt-12 mb-24 flex gap-16 items-center ml-[248px] w-[1024px] h-[436px] py-2 px-2">
      <div className="flex flex-col">
        <div className=" flex items-center justify-center text-[20px] mb-12 border-[1px] h-[44px] w-[44px] rounded-2xl text-center">
          {no}
        </div>
        <div>
          <img
            className="h-[103px] w-[141px] mb-8"
            src={prevImage}
            alt="Previous"
          ></img>
          <div className="flex items-center justify-center">{builderName}</div>
        </div>
      </div>

      <div className="flex-1 pl-4">
        <p className="mt-12">
          <b>{title}</b>- {highlights}
        </p>
        <br />
        <b>Main highlights</b>
        <p className="mt-2">
          <Features />
        </p>{" "}
        {/* Render the Features component */}
        <span className="flex flex-row text-[#1B88F4] text-[16px] mt-20">
          Show more <FiChevronDown className="mt-1.5" />
        </span>
      </div>
      <div>
        <Tile myrating={myrating} />
      </div>
    </div>
  );
};

export default FinalProduct;
