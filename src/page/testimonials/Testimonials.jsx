import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../../assets/images/testi-01.jpg";
import img2 from "../../assets/images/testi-04.jpg";
import img3 from "../../assets/images/testi-03.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 0,
      img: img1,
      name: "Amrita",
      designation: "manager",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque posuere cursus. Donec vitae tellus in neque consectetur bibendum.",
    },
    {
      id: 1,
      img: img2,
      name: "Samantha",
      designation: "Salse manager",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque posuere cursus. Donec vitae tellus in neque consectetur bibendum.",
    },
    {
      id: 2,
      img: img3,
      name: "Mary Johnson",
      designation: "HR manager",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis non neque posuere cursus. Donec vitae tellus in neque consectetur bibendum.",
    },
  ];

  return (
    <div className="pb-[80px]">
      <div className="max-w-container mx-4 sm:mx-5 md:mx-6 xl:mx-auto">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <small className="text-[18px] text-[#1e1e1e] font-poppins font-semibold">
            Testimonial
          </small>
          <h2 className="text-[35px] text-[#1e1e1e] font-playfair font-bold">
            What Our Clients <span className="text-[#9d7e54]">Says</span>
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
            breakpoints={{
              0: { slidesPerView: 1 },
              1200: { slidesPerView: 2 },
            }}
            speed={1500}
            modules={[Autoplay]}
            className="w-[100%]"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide>
                <TestimonialCard
                  key={testimonial.id}
                  src={testimonial.img}
                  name={testimonial.name}
                  designation={testimonial.designation}
                  discription={testimonial.discription}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
