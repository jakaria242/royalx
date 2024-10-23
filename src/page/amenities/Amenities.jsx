
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../assets/images/pool.jpg";
import img2 from "../../assets/images/gym.jpg";
import img3 from "../../assets/images/rest.jpg";
import AmenitiesCard from "../../components/AmenitiesCard";

const Amenities = () => {
  const amenitiesData = [
    {
      id: 0,
      img: img1,
      title: "Swimming Pool",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet hic porro error architecto perferendis dolores consequuntur quo commodi repellendus sequi, impedit repellat tenetur molestiae autem!",
    },
    {
      id: 1,
      img: img2,
      title: "GYM & Sports",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet hic porro error architecto perferendis dolores consequuntur quo commodi repellendus sequi, impedit repellat tenetur molestiae autem!",
    },
    {
      id: 2,
      img: img3,
      title: "Restro & Cafe",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet hic porro error architecto perferendis dolores consequuntur quo commodi repellendus sequi, impedit repellat tenetur molestiae autem!",
    },
  ];

  return (
    <div className="pb-[80px]">
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-[10px] text-center">
          <small className="text-[18px] text-[#1e1e1e] font-poppins font-semibold">
            Luxury Amenities
          </small>
          <h2 className="text-[28px] sm:text-[35px] text-[#1e1e1e] font-playfair font-bold">
            Our Best <span className="text-[#9d7e54]">Amenities</span>
          </h2>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
            speed={2000}
            modules={[Autoplay]}
            className="w-full"
          >
            {amenitiesData.map((amenity) => (
              <SwiperSlide key={amenity.id}>
                <AmenitiesCard
                  src={amenity.img}
                  title={amenity.title}
                  description={amenity.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
