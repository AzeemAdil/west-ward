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
import Form from './Form'
import Footer from './Footer'
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
    <Form/>
    <Footer/>
    </>
  )
}

export default Home