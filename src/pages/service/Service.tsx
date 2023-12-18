import React, { useState } from "react";

import "./Service.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UsedServices from "./component/UsedServices";

const Service = () => {
  return (
    <>
      <div className="bg-[#ffffff] h-[100vh] w-full overflow-hidden">
        <NavBar />

        <div className="">
          <div className="movingGradient h-[180px] md:h-[250px] mx-auto rounded-2xl max-w-full ml-6 mr-6">
            <h2 className="text-[#371941f5] drop-shadow-lg pt-1 md:pt-7 text-center text-[62px] mt-4 max-w-[640px] mx-auto font-semibold"></h2>
            <h2 className="text-[#371941f5] font-bold text-center text-[28px] md:text-[50px] mt-4 max-w-[640px] mx-auto ">
              {" "}
              Service Crud
            </h2>
            <p className="font-thin text-[#371941f5] text-[11px] md:text-[15px] text-center max-w-[350px] md:max-w-[800px] mx-auto">
              Welcome to Service Crud – a robust CRUD application. Seamlessly
              create, read, update, and delete data with our intuitive
              interface. Experience seamless functionality with our sleek UI
              powered by React, secure routes with Node.js and Express, dynamic
              data handling using MongoDB, and a touch of modern style courtesy
              of Tailwind CSS. Dive into the future of web applications with us!
            </p>
          </div>

          {/* <div className="mt-6 border-2 rounded-lg h-[60px] w-[600px] mx-auto flex">
          <input
            type="text"
            placeholder="send us your review"
            className="w-[100%] p-2 rounded-lg outline-none text-black"
          />
          <button className="bg-black w-[60%] rounded-lg">Send</button>
        </div> */}
          <UsedServices />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
