import React from "react";

const TestimonialCard = ({ src, name, designation, discription }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-[20px]">

      <div className="w-full h-full sm:w-[650px] sm:h-[230px] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[15px] rounded-br-[15px] overflow-hidden">
        <picture>
          <img
            src={src}
            className="w-full h-full object-cover"
            alt="NOt Found"
          />
        </picture>
      </div>

      <div className="p-[10px] flex flex-col gap-[15px]">
        <h2 className="text-[25px] sm:text-[35px] font-poppins font-semibold">
          {name}
          <span className="block text-[15px] font-poppins font-light">{designation}</span>
        </h2>
        <p className="p-[10px] sm:p-[20px] border border-[rgba(131,131,0131, 0.2)] rounded-[10px]">
          {discription}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
