import React from "react";
import RoomCard from "../../components/RoomCard";
import pic1 from "../../assets/images/1.jpg";
import pic2 from "../../assets/images/2.jpg";
import pic3 from "../../assets/images/3.jpg";
import pic4 from "../../assets/images/4.jpg";
import pic5 from "../../assets/images/5.jpg";
import pic6 from "../../assets/images/6.jpg";

const Rooms = () => {
  const roomData = [
    {
      id: 0,
      img1: pic1,
      btn1: "Junio Suite",
      img2: pic1,
      price: "$120/N",
      title: "Junio Suite",
      li1: "- Daily Cleaning",
      li2: "- Home Service",
      li3: "- House Keeping",
      li4: "- Wifi & Parking",
      btn2: "Book Now",
    },
    {
      id: 1,
      img1: pic2,
      btn1: "Twin Room",
      img2: pic2,
      price: "$210/N",
      title: "Twin Room",
      li1: "- Daily Cleaning",
      li2: "- Home Service",
      li3: "- House Keeping",
      li4: "- Wifi & Parking",
      btn2: "Book Now",
    },
    {
      id: 2,
      img1: pic3,
      btn1: "Quad Room",
      img2: pic3,
      price: "$150/N",
      title: "Quad Room",
      li1: "- Daily Cleaning",
      li2: "- Home Service",
      li3: "- House Keeping",
      li4: "- Wifi & Parking",
      btn2: "Book Now",
    },
    {
      id: 3,
      img1: pic4,
      btn1: "Deulex Room",
      img2: pic4,
      price: "$400/N",
      title: "Deulex Room",
      li1: "- Daily Cleaning",
      li2: "- Home Service",
      li3: "- House Keeping",
      li4: "- Wifi & Parking",
      btn2: "Book Now",
    },
    {
      id: 4,
      img1: pic5,
      btn1: "Exclusive Room",
      img2: pic5,
      price: "$800/N",
      title: "Exclusive Room",
      li1: "- Daily Cleaning",
      li2: "- Home Service",
      li3: "- House Keeping",
      li4: "- Wifi & Parking",
      btn2: "Book Now",
    },
    {
      id: 5,
      img1: pic6,
      btn1: "Personal Room",
      img2: pic6,
      price: "$600/N",
      title: "Personal Room",
      li1: "- Daily Cleaning",
      li2: "- Home Service",
      li3: "- House Keeping",
      li4: "- Wifi & Parking",
      btn2: "Book Now",
    },
  ];

  return (
    <div className="pb-[75px]">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <small className="text-[18px] text-[#1e1e1e] font-poppins font-semibold">
            Luxury Suites
          </small>
          <h2 className="text-[35px] text-[#1e1e1e] font-playfair font-bold">
            Our Best <span className="text-[#9d7e54]">Rooms</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-3 justify-between items-center gap-[35px]">
          {roomData.map((item) => (
            <RoomCard
              key={item.id}
              src1={item.img1}
              btn1={item.btn1}
              src2={item.img2}
              price={item.price}
              title={item.title}
              li1={item.li1}
              li2={item.li2}
              li3={item.li3}
              li4={item.li4}
              btn2={item.btn2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
