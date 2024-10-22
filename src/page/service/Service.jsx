import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { RiHotelLine, RiHotelBedLine, RiRestaurantLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";

const Service = () => {
  // Declare serviceData inside the component function
  const serviceData = [
    {
      id: 0,
      icon: RiHotelLine,
      title: "Basic Facilities",
      li1: "- Reception / Front Desk",
      li2: "- Room Services",
      li3: "- Housekeeping",
      li4: "- Wifi & Parking",
    },
    {
      id: 1,
      icon: RiHotelBedLine,
      title: "Room Aminities",
      li1: "- Comfortable Bedding",
      li2: "- Bed Room and Pool",
      li3: "- TV and AC",
      li4: "- Bar",
    },
    {
      id: 2,
      icon: BiDrink,
      title: "Dining Options",
      li1: "- Restaurant Cafe",
      li2: "- Bar and Lounge",
      li3: "- Cafe & Canteen",
      li4: "- Room Service",
    },
    {
      id: 3,
      icon: RiRestaurantLine,
      title: "Special Features",
      li1: "- Custom Rooms",
      li2: "- Cricket Ground",
      li3: "- Gym",
      li4: "",
    },
  ];

  return (
    <div className="pb-[80px]">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <small className="text-[18px] text-[#1e1e1e] font-poppins font-semibold">
            Facilities
          </small>
          <h2 className="text-[35px] text-[#1e1e1e] font-playfair font-bold">
            Our Best <span className="text-[#9d7e54]">Services</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-4 justify-between gap-[30px]">
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              Icon={item.icon}
              title={item.title}
              li1={item.li1}
              li2={item.li2}
              li3={item.li3}
              li4={item.li4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
