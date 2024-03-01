import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="mt-[11px]">
      <hr className="bg-#E1E4E6 w-[1024px] ml-[244px] p-2"></hr>
      <div
        className="flex items-center gap-4 ml-[250px] text-[#4B5665] 
"
      >
        <span>icon</span>
        <span>Last Updated - </span>
        <span>February 22,2020</span>
        <span>icon</span>
        <span>Disclosure</span>
        <span class="ml-[490px]">Top Relevant</span>
      </div>
      <hr className="#E1E4E6 w-[1024px] ml-[244px] mt-4"></hr>
    </div>
  );
};

export default Breadcrumbs;
