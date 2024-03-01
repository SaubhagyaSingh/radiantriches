import React from "react";
import Starrating from "./Starrating";

const Tile = ({ myrating }) => {
  return (
    <div className="w-[232px] h-[255px] rounded-lg flex flex-col justify-between items-center p-4">
      <div className="flex flex-col items-center  bg-[#F3F9FF] rounded-[10px]">
        <span className="text-4xl mt-8">{myrating}</span>
        <span className="text-xs">Exceptional</span>
        <div className="mt-4 text-yellow-500 py-2 px-2">
          <Starrating rating={6} />
        </div>
      </div>
      <button className="bg-blue-500 text-white w-[232px] h-[48px] rounded-lg">
        View
      </button>
    </div>
  );
};

export default Tile;
