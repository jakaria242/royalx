import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

const RoomCard = ({
  src1,
  btn1,
  src2,
  price,
  title,
  li1,
  li2,
  li3,
  li4,
  btn2,
}) => {
  return (
    <div className="w-[320px] sm:w-[365px] h-[300px] group [perspective:1000px] cursor-pointer">
      <div className="relative h-full w-full rounded-[20px] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500 ease-in-out">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[20px] [backface-visibility:hidden]">
          <img
            src={src1}
            alt="Room"
            className="w-full h-full rounded-[20px] object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center p-[25px] z-[1]">
            <Button
              className="w-full borde-0 bg-[#cb5c00] text-[15px] tracking-[1.5px] font-poppins font-medium text-white rounded-[30px] transition-all duration-700 hover:border-black cursor-pointer shadow-[2px_3px_3px_1px_#B9B7BD] p-[5px]"
              text={btn1}
            />
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[20px] bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <img
            src={src2}
            alt="Room"
            className="w-full h-full rounded-[20px] object-cover"
          />

          <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] border border-[rgba(255,255,255,1)] bg-[rgba(255,255,255,0.4)] [backdrop-filter:blur(3px)] inset-0 flex flex-col justify-between items-center text-black rounded-[12px] py-2">
            <small className="text-[16px] py-[8px] px-[12px] font-poppins font-normal bg-[#1e1e1e] text-white">
              {price}
            </small>
            <div>
              <h4 className="text-[18px] font-poppins font-bold">{title}</h4>
              <ul className="text-[14px] font-poppins font-medium mt-2 flex flex-col gap-[5px]">
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
              </ul>
            </div>
            <div className="flex justify-between gap-x-[145px]">
              <Button
                className=" borde-0 bg-[#cb5c00] text-[15px] tracking-[1.5px] font-poppins font-medium text-white rounded-[30px] transition-all duration-700 hover:border-black cursor-pointer shadow-[2px_3px_3px_1px_#B9B7BD] p-[5px_15px]"
                text={btn2}
              />
              <div className="h-full w-[50px] bg-[#1e1e1e] text-white flex justify-center items-center">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
