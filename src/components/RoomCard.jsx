
import React from 'react';
import pic1 from '../assets/images/1.jpg';
import Button from './Button';

const RoomCard = () => {
  return (
    <div className="w-[365px] h-[300px] group [perspective:1000px] cursor-pointer">
      <div className="relative h-full w-full rounded-[20px] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500 ease-in-out">
        
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[20px] [backface-visibility:hidden]">
          <img src={pic1} alt="Room" className="w-full h-full rounded-[20px] object-cover" />
          <div className="absolute inset-0 flex items-end justify-center p-[25px] z-[1]">
            <Button className='w-full borde-0 bg-[#cb5c00] text-[15px] tracking-[1.5px] font-poppins font-medium text-white rounded-[30px] transition-all duration-700 hover:border-black cursor-pointer shadow-[2px_3px_3px_1px_#B9B7BD] p-[5px]' text='Junio Suite'/>
          </div>
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[20px] bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <img src={pic1} alt="Room" className="w-full h-full rounded-[20px] object-cover" />

          <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] border border-[rgba(255,255,255,1)] bg-[rgba(255,255,255,0.4)] [backdrop-filter:blur(3px)] inset-0 flex flex-col justify-between items-center text-black rounded-[12px] py-2">
               <small className='text-[16px] font-poppins font-normal'>$120/N</small>
               <div>
                <h4 className='text-[18px] font-poppins font-bold'>Junior Suite</h4>
                <ul className='text-[14px] font-poppins font-medium'>
                  <li>- Daily Cleaning</li>
                  <li>- Home Service</li>
                  <li>- House Keeping</li>
                  <li>- Wifi & Parking</li>
                </ul>
            </div>
               <Button className=' borde-0 bg-[#cb5c00] text-[15px] tracking-[1.5px] font-poppins font-medium text-white rounded-[30px] transition-all duration-700 hover:border-black cursor-pointer shadow-[2px_3px_3px_1px_#B9B7BD] p-[5px_15px]' text='Book Now'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
