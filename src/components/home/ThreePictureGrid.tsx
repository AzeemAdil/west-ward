import React from 'react'
import { ASSETS } from '@/helpers/assets'

const ThreePictureGrid = () => {
  return (
    <div className='flex items-center justify-between pb-40'>
        <img className=' w-[32%] relative top-32 '  src={ASSETS.Cycle} alt="cycle" />
        <img className=' w-[32%]' src={ASSETS.Bakery} alt="bakery" />
        <div className='w-[32%] relative top-80 '>

        <img src={ASSETS.Bus} alt="bus" />
        <img className=' relative bottom-40' src={ASSETS.RedArrows} alt="red-arrows" />
        </div>
    </div>
  )
}

export default ThreePictureGrid