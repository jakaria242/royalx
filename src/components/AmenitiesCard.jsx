import React from "react";
import Button from "./Button";

const AmenitiesCard = ({ src, title, description }) => {
  return (
    <div className="flex gap-[30px] items-center">
      <div className="w-[60%] h-auto rounded-tr-[200px] rounded-br-[200px] rounded-tl-[30px] rounded-bl-[30px] overflow-hidden">
        <picture>
          <img
            className="w-full h-full object-cover"
            src={src}
            alt="NOt Found"
          />
        </picture>
      </div>
      <div className="w-[40%] flex flex-col gap-[20px]">
        <h2
          className="text-[60px] font-bold font-playfair ml-[-100px]"
          style={{ WebkitTextStroke: "1px #fff" }}
        >
          {title}
        </h2>
        <p className="text-[16px] font-poppins">{description}</p>
        <Button
          className="w-[200px] borde-0 bg-[#cb5c00] text-[15px] tracking-[1.5px] font-poppins font-medium text-white rounded-[30px] transition-all duration-700 hover:border-black cursor-pointer p-[10px_15px]"
          text="Book Now !"
        />
      </div>
    </div>
  );
};

export default AmenitiesCard;
