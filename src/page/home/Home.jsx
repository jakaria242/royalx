import React from 'react'
import Banner from './Banner'
import About from '../about/About'
import Service from '../service/Service'
import Rooms from '../rooms/Rooms'
import Amenities from '../amenities/Amenities'

const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Service/>
    <Rooms/>
    <Amenities/>
    </>
  )
}

export default Home