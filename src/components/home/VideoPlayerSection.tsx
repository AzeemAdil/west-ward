"use client";

import React from "react";
import { CONSTANTS } from "../../helpers/constants";
import useDevice from "@/hooks/useDevice";
import { ASSETS } from "@/helpers/assets";

const VideoPlayerSection = () => {
  const { isMob } = useDevice();

  // On mobile: 100dvh minus the 3 fixed height top navs (180px total)
  // On desktop: 100dvh minus top nav and sticky nav
  const containerHeight = isMob
    ? `calc(100dvh - ${CONSTANTS.navWithListofTextHeight + CONSTANTS.mobNavWithLogo + CONSTANTS.mobNavSticky}px)`
    : `calc(100dvh - ${CONSTANTS.navWithListofTextHeight + CONSTANTS.desktopNav}px)`;

  return (
    <section className="w-full relative lg:px-10 px-4">
      <div 
        className="w-full relative overflow-hidden" 
        style={{ height: containerHeight }}
      >
        {/* Video Wrapper */}
        <div className="w-full h-[45svh] lg:h-[90%] relative ">
          <video
            src={ASSETS.VideoHeader}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>

          {/* Side Arrow - Desktop Only */}
          <div className=" absolute h-full right-0 top-0 z-10 pointer-events-none">
            <img
              className="h-full w-auto object-contain"
              src={ASSETS.WhiteArrow}
              alt="Decoration"
            />
          </div>

          {/* Overlay Box - Desktop Only */}
          <div className="hidden lg:flex flex-col justify-center opacity-90 w-[350px] h-[300px] bg-primary absolute left-16 bottom-[-60px] p-10 z-20">
            <h1 className="font-bold text-4xl text-white leading-tight mb-6">
              Life in balance. <br /> Westward bound.
            </h1>
            <div className="text-white text-sm tracking-[0.2em] font-bold mb-6 cursor-pointer hover:opacity-80">
              REGISTER NOW
            </div>
            <img
              className="h-[70px] w-auto self-start transform -translate-x-2"
              src={ASSETS.DownArrow}
              alt="Scroll down"
            />
          </div>
        </div>

        {/* Mobile Info Section (Appears below the 50svh video) */}
        <div className="lg:hidden flex flex-col pt-4 pb-5">
          <h2 className="font-bold text-primary text-2xl mb-2 leading-snug">
            Life in balance. <br /> Westward bound.
          </h2>
          <div className=" cursor-pointer">
            <span className="text-primary text-lg font-bold tracking-wider mr-4">
              REGISTER NOW
            </span>
            <img
              className="h-10 w-auto mt-4"
              src={ASSETS.DownArrow}
              alt="Scroll down"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayerSection;
