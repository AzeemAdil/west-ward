import { ASSETS } from "@/helpers/assets";
import React from "react";

const Homes = () => {
  const highlights = [
    "Internet included",
    "Full-size appliances",
    "Ample storage",
    "In-suite laundry",
    "Air conditioner",
  ];

  return (
    <div className="bg-white py-20 lg:py-40">
      {/* desktop */}
      <div className="hidden lg:flex  flex-row justify-between items-center relative lg:gap-0">
        <div className="lg:w-[30%] h-[100vh] relative top-32 w-full">
          <img
            src={ASSETS.BlueSofa}
            alt="thoughtful home design"
            className="w-full object-cover shadow-lg"
          />
        </div>

        <div className="lg:w-[40%] w-full flex flex-col items-center text-center ">
          <div className="text-primary tracking-[0.4em] text-2xl uppercase mb-12">
            Homes
          </div>

          <div className="text-primary text-3xl lg:text-5xl font-medium leading-[1.1] mb-8 px-4 ">
            Thoughtful Design. <br />
            Timeless Comfort.
          </div>

          <p className=" text-base px-4 font-charter leading-relaxed mb-16">
            Created in collaboration with interior design studio Ste. Marie,
            Westward homes blend style with everyday practicality. Bright
            interiors and a neutral palette set the stage for you to make it
            your own, while natural light and thoughtful details make each space
            feel like home, for you and your four-legged friends.
          </p>

          <div className="w-full flex justify-center items-start gap-10 mb-20 translate-x-4">
            {/* Left side of highlights - The Title */}
            <div className="relative pt-4">
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-primary"></div>
              <div className="text-primary tracking-[0.2em] font-semibold text-sm leading-tight text-left">
                HOME <br />
                HIGHLIGHTS
              </div>
            </div>

            {/* Right side of highlights - The List */}
            <div className="flex w-[35%] flex-col gap-2 text-left">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-primary/80 font-medium leading-[1]"
                >
                  <img
                    src={ASSETS.ArrowLeft}
                    className="w-4  "
                    alt="indicator"
                  />
                  <span className=" font-charter text-base mt-[-2px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-primary text-white px-12 py-3 uppercase tracking-widest text-sm hover:bg-primary/90 transition-all font-semibold">
            Floorplans
          </button>
        </div>

        <div className="lg:w-[30%] w-full h-[100vh] relative bottom-32 flex justify-end">
          <img
            src={ASSETS.Kitchen}
            alt="kitchen design"
            className="w-full  object-cover"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden  pt-10">
        <div className="px-6">
          <div className="mb-6 text-primary tracking-[.4em] text-xs font-semibold uppercase">
            Homes
          </div>
          <div className="text-primary text-4xl font-bold leading-tight  mb-8">
            Thoughtful Design. <br /> Timeless Comfort.
          </div>

          <div className=" text-base font-charter leading-relaxed  mb-16">
            Created in collaboration with interior design studio Ste. Marie,
            Westward homes blend style with everyday practicality. Bright
            interiors and a neutral palette set the stage for you to make it
            your own, while natural light and thoughtful details make each space
            feel like home, for you and your four-legged friends.
          </div>

          <div className="mb-12">
            <div className="text-primary tracking-[0.2em]  text-xs mb-10 uppercase">
              Home Highlights
            </div>
            <div className="flex flex-col gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <img
                    src={ASSETS.ArrowLeft}
                    className="w-4  "
                    alt="indicator"
                  />
                  <span className=" font-charter text-base mt-[-2px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center relative mb-20">
            <button className="bg-primary text-white px-12 py-4 text-xs font-bold tracking-widest uppercase shadow-md">
              Homes
            </button>
          </div>
        </div>
        {/* Staggered Images Section */}
        <div className="relative pb-20">
          <div className="w-[75%] relative z-0">
            <img
              src={ASSETS.BlueSofa}
              alt="modern living room"
              className="w-full h-auto shadow-xl"
            />
          </div>
          <div className="w-[75%] ml-auto mt-[-45%] relative z-10 ">
            <img
              src={ASSETS.Kitchen}
              alt="modern kitchen"
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
