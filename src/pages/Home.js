import React from "react";
import Categorybar from "../components/Categorybar";
import Breadcrumbs from "../components/Breadcrumbs";
import Navhistory from "../components/Navhistory";
const Home = () => {
  return (
    <div>
      <div className="mt-[38px] text-[48px] w-[100%] ml-[248px] text-[#2C384A]">
        Best Website builders in the US
      </div>
      <Breadcrumbs></Breadcrumbs>
      <Categorybar></Categorybar>
      <Navhistory></Navhistory>
    </div>
  );
};

export default Home;
