"use client";

import React from "react";
import { CONSTANTS } from "../../helpers/constants";
import useDevice from "@/hooks/useDevice";
import { ASSETS } from "@/helpers/assets";

const VideoPlayerSection = () => {
  const { isMob } = useDevice();

  return (
    <>
      <div
        className="w-full relative lg:px-10 px-4"
        style={{
          height: isMob
            ? `calc(100dvh - ${CONSTANTS.navWithListofTextHeight}px - ${CONSTANTS.mobNavWithLogo}px - ${CONSTANTS.mobNavSticky}px - ${CONSTANTS.desktopNav}px )`
            : `calc(100dvh - ${CONSTANTS.navWithListofTextHeight}px - ${CONSTANTS.desktopNav}px - ${CONSTANTS.mobNavSticky}px)`,
        }}
      >
        {/* desktop view */}
        <div className="hidden relative lg:block w-full h-full">
          <video
            src={ASSETS.VideoHeader}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>

          <img
            className=" absolute h-full right-0 top-0 z-10 "
            src={ASSETS.WhiteArrow}
            alt="white-Arrow"
          />

          <div className=" hidden lg:block opacity-75 w-[320px] h-[280px] bg-primary absolute  left-20 bottom-[-55px] pt-14 pl-7 ">
            <span className=" font-bold text-3xl text-white pt-6 pb-2 ">
              Life in balance. <br /> Westward bound.
            </span>
            <br />
            <p className="text-white text-sm pt-4 mr-4">REGISTER NOW</p>
            <img
              className=" h-[74px] w-[30px] pt-8 "
              src={ASSETS.DownArrow}
              alt="down-arrow"
            />
          </div>
        </div>
        {/* mobile view */}
        <div className="lg:hidden w-full lg:h-[100%] flex flex-col">
          <video
            src={ASSETS.VideoHeader}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover"
          ></video>
          <span className=" font-bold text-primary text-2xl pt-6 pb-2 leading-normal ">
            Life in balance. <br /> Westward bound.
          </span>
          <span className="text-primary text-lg mt-[3px] mr-4">
            REGISTER NOW
          </span>
          <img
            className=" h-[44px] w-[30px] pt-2 "
            src={ASSETS.DownArrow}
            alt="down-arrow"
          />
        </div>
      </div>
    </>
  );
};

export default VideoPlayerSection;
