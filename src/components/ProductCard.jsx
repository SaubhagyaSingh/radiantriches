import React from "react";

const ProductCard = ({
  imageSrc,
  productName,
  currentPrice,
  originalPrice,
  discount,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-[333px] h-[480px] mx-[30px] bg-white rounded-lg shadow-md text-[16px]">
      <div>
        <img
          src={imageSrc}
          alt={productName}
          className="w-141 h-103 rounded-lg"
        />
      </div>
      <div className="flex items-center mb-3 text-[#074786] text-sm">
        <div className="bg-[#F2F4F7] px-2">20% off</div>
        <div className="mx-1">Limited Time</div>
      </div>
      <div className="mb-3 text-gray-800 font-bold text-lg">WebBuilder 1</div>
      <div className="mb-3 text-gray-800 font-bold text-xl">{productName}</div>
      <div className="mb-3 text-gray-800 font-bold text-lg">
        {currentPrice}
        <span className="text-gray-500 ml-2 line-through">{originalPrice}</span>
      </div>
      <div className="mb-6">{" " + discount}% off</div>
      <button className="w-[292px] h-[48px] text-white bg-blue-500 rounded-md border-none rounded-2xl cursor-pointer">
        View Deal
      </button>
    </div>
  );
};

export default ProductCard;
