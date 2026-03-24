import { ASSETS } from '@/helpers/assets'
import React from 'react'

const Homes = () => {
  const highlights = [
    "Internet included",
    "Full-size appliances",
    "Ample storage",
    "In-suite laundry",
    "Air conditioner"
  ]

  return (
    <div className="bg-white py-20 lg:py-40">
      <div className=" px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-10 relative lg:gap-0">
        
        {/* Left Column: Blue Sofa Image - 30% */}
        <div className="lg:w-[30%] h-[100vh] relative top-32 w-full">
          <img 
            src={ASSETS.BlueSofa} 
            alt="thoughtful home design" 
            className="w-full object-cover shadow-lg"
          />
        </div>

        {/* Middle Column: Text Content - 40% */}
        <div className="lg:w-[40%] w-full flex flex-col items-center text-center ">
          <div className="text-primary tracking-[0.4em] text-2xl uppercase mb-12">Homes</div>
          
          <div className="text-primary text-4xl lg:text-5xl font-medium leading-[1.1] mb-8">
            Thoughtful Design. <br />
            Timeless Comfort.
          </div>

          <p className="text-primary/90 text-[15px] leading-relaxed mb-16 max-w-[400px]">
            Created in collaboration with interior design studio Ste. Marie, 
            Westward homes blend style with everyday practicality. Bright 
            interiors and a neutral palette set the stage for you to make it 
            your own, while natural light and thoughtful details make each 
            space feel like home, for you and your four-legged friends.
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
                <div key={index} className="flex items-center gap-3 text-primary/80 font-medium leading-[1]">
                  <img src={ASSETS.ArrowLeft} className="w-4 h-4 object-contain brightness-0 saturate-100" style={{ filter: 'invert(19%) sepia(87%) saturate(3048%) hue-rotate(352deg) brightness(85%) contrast(100%)' }} alt="indicator" />
                  <span className="text-[17px] mt-[-2px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-primary text-white px-12 py-3 uppercase tracking-widest text-sm hover:bg-primary/90 transition-all font-semibold">
            Floorplans
          </button>
        </div>

        {/* Right Column: Kitchen Image - 30% */}
        <div className="lg:w-[30%] w-full h-[100vh] relative bottom-32 flex justify-end">
          <img 
            src={ASSETS.Kitchen} 
            alt="kitchen design" 
            className="w-full  object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default Homes