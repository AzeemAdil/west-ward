import React from "react";
import { ASSETS } from "@/helpers/assets";

const Footer = () => {
  return (
    <footer className="bg-primary text-white lg:py-5">
      <div className="w-[100%] mx-auto flex md:flex-row md:justify-around md:items-center flex-col lg:flex-row lg:justify-around lg:items-center">
        {/* Logo and Info Section */}
        <div className="flex flex-col md:flex-row px-8 items-center  mb-12 lg:mb-0">
          {/* Component 1: Westward Logo and Map Arrows */}

          <div className="lg:hidden md:w-[35%] w-full overflow-hidden">
            <img
              src={ASSETS.WestwardDownArrowsLogo}
              alt="westward-logo"
              className=" relative md:right-2 md:scale-75 md:top-16 top-20 "
            />
            <img
              src={ASSETS.MapArrows}
              alt="map-arrows"
              className=" w-full relative md:scale-110 md:left-10 md:bottom-[50px] bottom-[100px] "
            />
          </div>

          <div className=" hidden lg:flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-12 lg:mb-0 overflow-hidden">
            <img src={ASSETS.WestwardDownArrowsLogo} alt="Westward Logo" />
            <img
              src={ASSETS.MapArrows}
              alt="Map Layout"
              className="  lg:relative lg:right-48"
            />
          </div>

          {/* Component 2: Contact/Location Info */}
          <div className=" relative lg:right-32 text-left flex flex-col gap-6 lg:gap-4">
            {/* Mobile-only "Coming Soon" text */}
            <div className="lg:hidden  text-[15px] md:w-[50%] md:mx-auto font-medium opacity-90 leading-tight">
              Leasing office and display homes coming soon
            </div>

            {/* Desktop-only Headings */}
            <div className="hidden lg:block font-charter">
              <span className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2 block">
                Contact Us
              </span>
              <div className="text-sm opacity-90 font-medium tracking-tight">
                xxx-xxx-xxxx
              </div>
              <div className="text-sm opacity-90 font-medium tracking-tight">
                info@rentwestward.com
              </div>
            </div>

            <div className="flex flex-col md:mx-auto   font-charter ">
              <span className="hidden lg:block text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
                Location
              </span>
              <div className="text-[15px]  lg:text-sm opacity-90 font-medium tracking-tight">
                2325 West 49th Ave
              </div>
              <div className="text-[15px]  lg:text-sm opacity-90 font-medium tracking-tight">
                Kerrisdale, Vancouver, BC
              </div>
            </div>
          </div>
        </div>

        {/* Intracorp Logo Section */}
        
          <div className=" md:w-[30%] md:pr-10 ">
            <img src={ASSETS.IntracorpLogo} alt="Intracorp" />
          </div>
        
      </div>

      {/* Disclaimer Section */}
      <div className="w-[90%] mx-auto md:mt-0 mt-12 lg:mt-16 py-10 lg:pt-8">
        <p className=" text-sm leading-relaxed font-charter text-left ">
          This is not an offering for sale/lease. The developer reserves the
          right to make changes, modifications or substitutions to the design,
          specifications and floorplans of the development without notice.
          Renderings, views, drawings, pictures and layouts are for illustrative
          purposes only and should not be relied upon. Prices are subject to
          change without notice. E.&O.E.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
