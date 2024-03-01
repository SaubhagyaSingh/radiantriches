import React from "react";

const ProductCard = ({
  imageSrc,
  productName,
  currentPrice,
  originalPrice,
  discount,
}) => {
  return (
    <div className="w-[333px] h-[480px] ml-[30px] bg-white rounded-lg shadow-md text-[16px]">
      <div className="">
        <img
          src={imageSrc}
          alt={productName}
          className="w-141 h-103 rounded-lg"
        />
      </div>
      <div className="mb-3 text-red-500 text-sm">20% off Limited Time</div>
      <div className="mb-3 text-gray-800 font-bold text-lg">Webbuilder 1</div>
      <div className="mb-3 text-gray-800 font-bold text-xl">{productName}</div>
      <div className="mb-3 text-gray-800 font-bold text-lg flex">
        {currentPrice}
        <span className="text-gray-500 ml-2 line-through">{originalPrice}</span>
        <div className="mb-6">{" " + discount}% off</div>
      </div>
      <button className=" w-[292px] h-[48px] bg-blue-500 text-whiterounded-md border-none rounded-2xl cursor-pointer">
        View Deal
      </button>
    </div>
  );
};

export default ProductCard;
