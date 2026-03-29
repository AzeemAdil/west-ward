import { ASSETS } from "@/helpers/assets";
import React from "react";

const FlowersAndWalk = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-primary ">
      <div className=" lg:w-[50%] md:h-full h-[440px] w-full flex justify-center items-center ">
        <div>
        <img
          className=" lg:w-[75%] w-1/2 h-auto my-auto m-auto "
          src={ASSETS.Flowers}
          alt="flowers"
        />
        </div>
      </div>
      <div className="w-full lg:w-[50%]">
        <img
          className="w-full h-auto"
          src={ASSETS.Walk}
          alt="two-persons-walking"
        />
      </div>
    </div>
  );
};

export default FlowersAndWalk;
