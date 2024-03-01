import React from "react";
import Categorybar from "../components/Categorybar.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Navhistory from "../components/Navhistory.jsx";
import Product from "../components/Product.jsx";
import prev from "../assets/prev.png";
import Productnormal from "../components/Productnormal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import FinalProduct from "../components/FinalProduct.jsx";

const productData = {
  no: 1,
  myrating: 9.8,
  trophyText: "Best Choice",
  prevImage: prev,
  builderName: "Builder 1",
  title: "WixPro 72-Inch Responsive Website Builder",
  highlights:
    "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",

  mainhighlights:
    "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
};

const productData2 = {
  no: 2,
  myrating: 9.5,
  trophyText: "Best Choice",
  prevImage: prev,
  builderName: "Builder 2",
  title: "SiteCraft 68-Inch Ultimate Web Design Studio",
  highlights:
    "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",

  mainhighlights:
    "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
};

const productData3 = {
  no: 3,
  myrating: 9.3,

  prevImage: prev,
  builderName: "Builder 2",
  title: "WixPro 72-Inch Responsive Website Builder",
  highlights:
    "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",

  mainhighlights:
    "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
};

const card1info = {
  imageSrc: prev,
  productName: "Computer  Modern clasic with wix support",
  currentPrice: "39.96$",
  originalPrice: "49.96$",
  discount: "20",
};

const Home = () => {
  return (
    <div className="container">
      <div className="mt-[38px] text-[48px] w-[100%] ml-[248px] text-[#2C384A]">
        Best Website builders in the US
      </div>
      <Breadcrumbs></Breadcrumbs>
      <Categorybar></Categorybar>
      <Navhistory></Navhistory>

      <div className="">
        <Product {...productData}></Product>
        <Product {...productData2}></Product>
        <Productnormal {...productData3}></Productnormal>
        <FinalProduct {...productData}></FinalProduct>
        <h3 className="ml-[292px] text-[32px] text-[#2C384A]">
          Related ideas you might Like for
        </h3>
        <div className="flex mt-12 mb-16">
          <div className="ml-[200px]"></div>
          <ProductCard {...card1info} />
          <ProductCard {...card1info} />
          <ProductCard {...card1info} />
        </div>
      </div>
    </div>
  );
};

export default Home;
