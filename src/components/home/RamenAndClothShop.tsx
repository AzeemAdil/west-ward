import React from 'react'
import { ASSETS } from '@/helpers/assets'
const RamenAndClothShop = () => {
  return (
    <div className="flex  lg:flex-row justify-center items-center bg-primary " >
            <img
            className="w-full lg:w-[50%]"
            src={ASSETS.ClothShop}
            alt="cloth-shop"
          />
          <div className=" lg:w-[50%] lg:h-full h-[440px] w-full flex justify-center items-center  ">
            <img className=" lg:w-[50%] w-1/2 h-1/2 my-auto  m-auto " src={ASSETS.Ramen} alt="ramen" />
          </div>
          
        </div>
  )
}

export default RamenAndClothShop