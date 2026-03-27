import React from "react";
import { ASSETS } from "@/helpers/assets";

const Amenities = () => {
  const highlightItems = [
    {
      icon: ASSETS.OppositeArrows,
      title: "MOVEMENT ROOM",
      desc: "Fully equipped fitness room to keep your body moving and mind clear.",
    },
    {
      icon: ASSETS.FireIcon,
      title: "FIRESIDE LOUNGE",
      desc: "Cozy up by the fire, catch the big game, or challenge neighbours to shuffleboard.",
    },
    {
      icon: ASSETS.UpArrowsIcon,
      title: "GATHER LOUNGE",
      desc: "Private dining, kitchen, and lounge space for celebrations, events, or casual get-togethers.",
    },
    {
      icon: ASSETS.WorkingIcon,
      title: "THE STUDY",
      desc: "Focus, collaborate, or meet in our stylish coworking space with private call pods and a meeting room.",
    },
    {
      icon: ASSETS.ChairIcon,
      title: "THE WEST DECK",
      desc: "A sunny rooftop escape with BBQs, lawn games, and room to relax.",
    },
    {
      icon: ASSETS.DogIcon,
      title: "THE NORTH YARD",
      desc: "Playground, pup run, and garden plots, there’s something for everyone.",
    },
    {
      icon: ASSETS.CycleIcon,
      title: "THE PEDAL HUB",
      desc: "Store, tune, and freshen up your ride with ease.",
    },
    {
      icon: ASSETS.DogIcon, // Using DogIcon for Paw Spa as well, or update if a specific one exists
      title: "THE PAW SPA",
      desc: "Keep tails wagging with a convenient, pup-approved wash station.",
    },
  ];

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className=" flex justify-end h-[100vh] items-center">
          <div className="w-[35%] relative bottom-64 ">
            <div className=" text-primary text-3xl ">A M E N I T I E S</div>
            <div className=" text-4xl text-primary font-medium pt-8 pb-16 ">
              Everything You Need. <br /> Right Where You Need It.
            </div>
            <div className=" text-base pb-10 font-charter w-[60%] ">
              Work, unwind, or simply hang out, Westward’s amenities make every
              day feel a little brighter. From cozy corners to outdoor spaces,
              you’ll find living at Westward sparks connection, supports your
              well-being, and adds a dash of fun to the everyday. 
            </div>
            <button className=" bg-primary text-white px-6 py-2  ">
              See Amenities
            </button>
          </div>

          <div className="w-[50%] bg-primary relative top-8 h-[120vh] z-50 ">
            <img
              className="w-full relative top-32 right-28 shadow-2xl"
              src={ASSETS.LivingRoom}
              alt="living-room"
            />

            <div className="absolute tracking-wider text-xl bottom-10 left-10  bg-primary text-white p-4 ">
              AMENITY HIGHLIGHTS
            </div>
          </div>
        </div>

        {/* Amenity Highlights Section */}
        <div className="relative w-full">
          {/* Background Image Container with Overlay */}
          <div
            className="relative w-full h-auto py-32 bg-cover bg-center"
            style={{ backgroundImage: `url(${ASSETS.TVlounge})` }}
          >
            {/* Darkish tint overlay */}
            <div className="absolute inset-0 bg-[#333]/50"></div>

            {/* Grid Content */}
            <div className="relative z-10 max-w-[1200px] mx-auto pt-20 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                {highlightItems.map((item, index) => (
                  <div
                    key={index}
                    className=" flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div className="mb-6  ">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="text-lg text-white font-semibold tracking-widest mb-4 uppercase">
                      {item.title}
                    </div>
                    <div className="text-sm text-white leading-relaxed ">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* White Header Section */}
        <div className="bg-white px-6 py-16">
          <div className="text-primary tracking-[.3em] text-xs font-semibold mb-6 uppercase">
            Amenities
          </div>
          <div className="text-primary text-4xl font-bold leading-tight mb-8">
            Everything You Need, <br /> Right Where You Need It.
          </div>
          <div className="text-base font-charter leading-relaxed mb-10">
            Work, unwind, or simply hang out, Westward’s amenities make every
            day feel a little brighter. From cozy corners to outdoor spaces,
            you’ll find living at Westward sparks connection, supports your
            well-being, and adds a dash of fun to the everyday.
          </div>
          <div className="relative mb-12">
            <img
              src={ASSETS.LivingRoom}
              alt="amenities-lounge"
              className="w-full h-auto"
            />
          </div>
          <div className="inline-flex items-center relative">
            <button className="bg-primary text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase">
              Amenities Gallery
            </button>
          </div>
        </div>

        {/* Red Highlights Section */}
        <div className="bg-primary px-10 py-20 text-center">
          <div className="text-white/80 tracking-widest text-[10px] uppercase mb-16">
            Amenities Highlights
          </div>

          <div className="flex flex-col gap-24">
            {highlightItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-6"
                />
                <h3 className="text-white text-lg font-bold tracking-[0.2em] mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
