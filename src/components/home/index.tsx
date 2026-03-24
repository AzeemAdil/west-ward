import React from 'react'
import NavBar from './NavBar'
import VideoPlayerSection from './VideoPlayerSection'
import TextSection from './TextSection'
import Rentals from './Rentals'
import Map from './Map'
import FlowersAndWalk from './FlowersAndWalk'
import RamenAndClothShop from './RamenAndClothShop'
import ThreePictureGrid from './ThreePictureGrid'
import Amenities from './Amenities'
import Homes from './Homes'
const Home = () => {  
  return (
    <>
    <NavBar />
    <VideoPlayerSection />
    <TextSection />
    <Rentals/>  
    <Map/>
    <FlowersAndWalk/>
    <ThreePictureGrid/>
    <Amenities/>
    <Homes/>
    
    <RamenAndClothShop/>
    </>
  )
}

export default Home