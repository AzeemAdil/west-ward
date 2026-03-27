import React from "react";
import { ASSETS } from "@/helpers/assets";
const RamenAndClothShop = () => {
  return (
    <>
      <img
        className=" size-52 relative left-[5%] top-20 md:left-[60%] lg:left-[69%] lg:top-24 animate-[spin_10s_linear_infinite] "
        src={ASSETS.CircleText}
        alt="circle-text-image"
      />

      <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-primary ">
        <div className="w-full lg:w-[50%]">
          <img className="w-full" src={ASSETS.ClothShop} alt="cloth-shop" />
        </div>
        <div className=" lg:w-[50%] md:h-full h-[440px] w-full flex justify-center items-center ">
          <div>
            <img
              className=" lg:w-[50%] w-1/2 h-auto my-auto m-auto "
              src={ASSETS.Ramen}
              alt="ramen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RamenAndClothShop;
