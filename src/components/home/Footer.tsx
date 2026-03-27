import React from "react";
import { ASSETS } from "@/helpers/assets";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12   l  g:py-10">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Logo and Info Section */}
        <div className="flex flex-col lg:flex-row items-center  mb-12 lg:mb-0">
          {/* Component 1: Westward Logo and Map Arrows */}

          <div className="lg:hidden mb-10 w-full ">
            <img
              src={ASSETS.WestwardDownArrowsLogo}
              alt="westward-logo"
              className=" relative top-40 right-5 "
            />
            <img src={ASSETS.MapArrows} alt="map-arrows" className=" w-full" />
          </div>

          <div className=" hidden lg:flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-12 lg:mb-0">
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
            <div className="lg:hidden text-[17px] font-medium opacity-90 leading-tight">
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

            <div className="flex flex-col  font-charter ">
              <span className="hidden lg:block text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
                Location
              </span>
              <div className="text-[17px] lg:text-sm opacity-90 font-medium tracking-tight">
                2325 West 49th Ave
              </div>
              <div className="text-[17px] lg:text-sm opacity-90 font-medium tracking-tight">
                Kerrisdale, Vancouver, BC
              </div>
            </div>
          </div>
        </div>

        {/* Intracorp Logo Section */}
        <div className="flex flex-col items-center lg:items-end gap-6 border-t lg:border-t-0 border-white/10 pt-12 lg:pt-0">
          <div className="flex flex-col items-center lg:items-end">
            <img src={ASSETS.IntracorpLogo} alt="Intracorp" />
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="w-[90%] mx-auto mt-12 lg:mt-16 pt-10 lg:pt-8">
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
