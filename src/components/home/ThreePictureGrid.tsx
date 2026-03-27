import React from "react";
import { ASSETS } from "@/helpers/assets";

const ThreePictureGrid = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className=" flex items-center justify-between pb-40">
          <img
            className=" w-[32%] relative top-32 "
            src={ASSETS.Cycle}
            alt="cycle"
          />
          <img className=" w-[32%]" src={ASSETS.Bakery} alt="bakery" />

          <div className=" w-[32%] relative top-80 ">
            <img src={ASSETS.Bus} alt="bus" />
            <img
              className=" relative bottom-40"
              src={ASSETS.RedArrows}
              alt="red-arrows"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden py-20 overflow-hidden">
        <div className="flex gap-[6px] items-start">
          {/* Left Column */}
          <div className="w-1/2">
            <img src={ASSETS.Bus} alt="bus" className="w-full object-cover" />
            <div className=" relative left-14 bottom-10">
              <img
                src={ASSETS.RedArrows}
                alt="red-arrows"
                className="w-full max-w-[120px]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex flex-col gap-[6px] pt-16">
            <img
              src={ASSETS.Bakery}
              alt="bakery"
              className="w-full object-cover"
            />
            <img
              src={ASSETS.Cycle}
              alt="cycle"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreePictureGrid;
