import { ASSETS } from "@/helpers/assets";
import React from "react";

const FlowersAndWalk = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center bg-primary ">
      <div className=" lg:w-[50%] lg:h-full h-[440px] w-full flex justify-center items-center  ">
        <img
          className=" lg:w-[50%] w-1/2 h-1/2  m-auto "
          src={ASSETS.Flowers}
          alt="flowers"
        />
      </div>
      <img
        className="w-full lg:w-[50%]"
        src={ASSETS.Walk}
        alt="two-persons-walking"
      />
    </div>
  );
};

export default FlowersAndWalk;
