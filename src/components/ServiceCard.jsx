import React from "react";

const ServiceCard = ({ Icon, title, li1, li2, li3, li4 }) => {
  return (
    <div className="py-[35px] px-[30px] border border-transparent hover:border-[#452205] bg-[rgba(131,131,131,0.05)] rounded-[12px] flex flex-col gap-[5px] transition-all duration-300 group">
      {Icon && (
        <Icon className="text-[32px] text-[#df8033] mb-[5px] group-hover:animate-shake" />
      )}
      <h3 className=" text-[20px] font-playfair font-bold mb-[10px]">
        {title}
      </h3>
      <ul className="text-[12px] font-poppins text-[rgba(131,131,131,1)] mt-[3px] flex flex-col gap-[5px]">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>
    </div>
  );
};

export default ServiceCard;
