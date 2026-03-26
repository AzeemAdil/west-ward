import { ASSETS } from "@/helpers/assets";
import React from "react";

const Form = () => {
  return (
    <div className="bg-[rgba(247,208,166,0.37)] py-20 px-6 lg:py-32 overflow-hidden">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Header Section */}
        <div className="text-primary text-5xl mb-4 tracking-tight">
          Be the first to know
        </div>
        <p className=" text-sm mb-6 font-medium">
          Register to receive the latest updates on Westward in Kerrisdale.
        </p>
        <div className="flex rotate-90 justify-center mb-16">
          <img src={ASSETS.RedArrows} alt="logo" className="w-20 h-auto" />
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mb-4">
          <input
            type="text"
            placeholder="First"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary transition-all placeholder:text-gray-900"
          />
          <input
            type="text"
            placeholder="Last"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
          <input
            type="text"
            placeholder="Bedroom Type"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
          <input
            type="text"
            placeholder="Do you have pets?"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
          <input
            type="text"
            placeholder="Do you require parking?"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
        </div>

        {/* Full width field */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="How did you hear about us?"
            className="w-full p-4 bg-[rgba(247,208,166,0.1)] border border-primary focus:border-primary outline-none transition-all placeholder:text-gray-900"
          />
        </div>

        {/* Consent Section */}
        <div className="flex items-start gap-5 text-left mb-16 max-w-[850px]">
          <div className="relative mt-1">
            <input 
              type="checkbox" 
              className="w-6 h-6 appearance-none bg-[rgba(247,208,166,0.1)] border-2 border-primary checked:bg-primary  cursor-pointer transition-all relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[7px] after:top-[2px] after:w-[6px] after:h-[12px] after:border-white after:border-b-2 after:border-r-2 after:rotate-45" 
            />
          </div>
          <p className="text-[8px] lg:text-sm font-charter leading-relaxed text-gray-800  opacity-90">
            By clicking this box, I hereby consent to receiving communications, promotional messages and other information from Intracorp and their respective current and future affiliates, including, without limitation, information and promotional messages regarding upcoming real estate developments and/or their other products and services. I understand that communications may be sent to me via e-mail, text message, other electronic means, telephone and/or mail, and hereby consent to receiving communications by way of any of the foregoing means. You may withdraw your consent at any time.
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <a href="#" className="underline text-[13px] text-gray-800 font-bold tracking-tight pb-2">
            Privacy Policy
          </a>
          
          <button className="flex items-center group transition-transform active:scale-95">
            <div className=" relative left-[70px] h-14 w-20 flex items-center justify-center">
              <img 
                src={ASSETS.SinglePaperArrow} 
                alt="submit" 
                className="size-full" 
              />
              <img 
                src={ASSETS.SinglePaperArrow} 
                alt="submit" 
                className="size-full" 
              />
            </div>
            <div className="bg-primary h-14 pl-24 rounded-l-full flex items-center pr-8 text-white">
              <span className="text-xs font-bold tracking-[0.4em] uppercase">Submit</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
