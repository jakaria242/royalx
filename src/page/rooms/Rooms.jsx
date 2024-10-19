import React from 'react'
import RoomCard from '../../components/RoomCard'

const Rooms = () => {
  return (
    <div className='pb-[75px]'>
        <div className='max-w-container mx-auto'>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <small className="text-[18px] text-[#1e1e1e] font-poppins font-semibold">
            Luxury Suites
          </small>
          <h2 className="text-[35px] text-[#1e1e1e] font-playfair font-bold">
            Our Best <span className="text-[#9d7e54]">Rooms</span>
          </h2>
        </div>
        <div className='mt-10'>
            <RoomCard/>
        </div>
        </div>
    </div>
  )
}

export default Rooms