import React from "react";
import { ASSETS } from "@/helpers/assets";

const Rentals = () => {
  return (
    <div>
      <div className=" flex items-baseline ">
        <img
          className="w-full lg:w-[45%] "
          src={ASSETS.Couple}
          alt="couple-image"
        />
        <div className=" lg:bg-[rgba(247,208,166,0.37)] lg:w-[55%] h-44  "> </div>
      </div>
      <div className=" lg:bg-[rgba(247,208,166,0.37)]">
        <div className=" text-primary text-3xl lg:text-5xl font-semibold lg:w-full text-center lg:text-center pt-20 lg:pb-16 ">
          Modern Rentals, Classic Kerrisdale.
        </div>
        <img
            className=" w-[30%] animate-[spin_10s_linear_infinite] relative top-8 left-16 lg:hidden  lg:relative lg:bottom-72 lg:left-32 "
            src={ASSETS.CircleText}
            alt="circle-text-image"
          />
        <div className=" flex justify-between items-center ">
          <img
            className=" w-[20%] hidden lg:block animate-[spin_10s_linear_infinite] relative bottom-28 left-10 lg:relative lg:bottom-72 lg:left-32 "
            src={ASSETS.CircleText}
            alt="circle-text-image"
          />
          <img className="lg:w-[28%] w-[40%]" src={ASSETS.Bench} alt="bench-image" />
          <img className="lg:w-[50%] w-[55%]" src={ASSETS.Flats} alt="flats-image" />
        </div>
        <div className=" flex justify-end flex-col lg:flex-row  items-center mt-16 ">
          <div className=" lg:w-[50%] w-full lg:pl-60 lg:relative pl-4 lg:bottom-28 ">
            <div className=" text-primary text-2xl ">NEIGHBOURHOOD</div>
            <div className=" text-primary text-2xl font-semibold py-7 ">
              Rooted in Kerrisdale. <br /> Connected to it all.
            </div>
            <div className=" text-white lg:bg-primary hidden lg:block w-fit px-[30px] py-[10px] ">
              Explore Neighbourhood
            </div>
          </div>
          <div className=" lg:w-[50%] font-charter w-full lg:pr-60 pr-4 pl-4 text-sm ">
            At West 49th and Vine, Westward blends Kerrisdale’s timeless charm
            with everyday convenience. Tree-lined streets, vibrant cafés and
            boutiques, top-rated schools, and expansive parks are all steps
            away. With effortless access to the city and campus when you need
            it, you’re close to everything yet surrounded by the calm of a
            classic Vancouver neighbourhood. 
            <div className=" text-white bg-primary lg:hidden w-fit p-5 tracking-widest my-4 py-[16px] ">
              Neighbourhood
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
