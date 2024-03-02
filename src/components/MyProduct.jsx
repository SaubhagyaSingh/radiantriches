import React from "react";
import { CiTrophy } from "react-icons/ci";
import Tile from "./Tile.jsx";
import { FiChevronDown } from "react-icons/fi";

const MyProduct = ({
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
    <div className="mt-12 mb-24 flex gap-16 items-center ml-[248px] w-[1024px] h-[300px] py-2 px-2">
      <div className="flex flex-col">
        <div className="mb-10 flex bg-[#FF7724] w-[136px] h-[34px] rounded-[8px] text-white items-center justify-center">
          <CiTrophy size={20} /> {trophyText}
        </div>
        <div className=" flex items-center justify-center text-[20px] mb-12 border-[1px] h-[44px] w-[44px] rounded-2xl text-center">
          {" "}
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
        <p className="mt-2">{mainhighlights}</p>
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

export default MyProduct;
