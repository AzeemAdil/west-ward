"use client";
import React, { useEffect, useRef, useState } from "react";
import { ASSETS } from "../../helpers/assets";
import { CONSTANTS } from "../../helpers/constants";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        // Trigger condition if element gets stuck to the top
        setIsSticky(navRef.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav 
        className="w-full bg-primary flex justify-center items-center  gap-4 lg:gap-52 text-[8px] md:text-sm "
        style={{ height: CONSTANTS.navWithListofTextHeight }}
      >
        <span className="text-text-secondary">PET-FRIENDLY</span>
        <span className="text-text-secondary">
          STUDIO TO 3-BEDROOM RENTAL HOMES
        </span>
        <span className="text-text-secondary">COMING SOON</span>
      </nav>
      <nav 
        className="w-full bg-primary flex justify-center lg:hidden items-center"
        style={{ height: CONSTANTS.mobNavWithLogo }}
      >
        <img
          src={ASSETS.WestWard}
          alt="west-ward"
          className="w-[180px]"
        />
      </nav>
      <nav 
        ref={navRef}
        className=" w-full bg-background-paper flex justify-center items-center sticky top-0 z-50 transition-colors lg:hidden"
        style={{ height: CONSTANTS.mobNavSticky }}
      >
        <span className="text-primary text-sm mt-[3px] mr-2 transition-all" >
          {isSticky ? "REGISTER NOW" : "COMING SOON"}  
        </span>
        <img src={ASSETS.ArrowLeft} className=" size-3" alt="arrow-left"  />
      </nav>
      <nav
        className="w-full bg-white hidden lg:flex  px-5 py-8  "
        style={{ height: CONSTANTS.desktopNav }}
      >
        <div className="flex-1" >
          <img src={ASSETS.WestWardLogoRed} alt="west-ward" className="h-full" />
        </div>
        <div className="flex-1 flex justify-end items-center " >
          <span className="text-primary text-lg mt-[3px] mr-4" >
          REGISTER NOW  
        </span>
          <img src={ASSETS.ArrowLeft} className=" size-5" alt="arrow-left"  />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
