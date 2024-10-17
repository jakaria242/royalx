import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Parallax } from "swiper/modules";

// Import your images
import bannerImage1 from "../../assets/images/hero-1.png";
import bannerImage2 from "../../assets/images/hero-2.png";
import bannerImage3 from "../../assets/images/hero-3.png";

const Banner = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 2500 }}
          parallax={true}
          speed={1500}
          modules={[Autoplay, Parallax]}
        >
          <SwiperSlide>
            <div
              className="h-screen flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${bannerImage1})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 z-[2]"></div>
              <div className="absolute bottom-[25%] left-[95px] z-[3] flex flex-col gap-[16px] font-playfair">
                <small
                  data-swiper-parallax="-200"
                  className="text-base text-white"
                >
                  Luxury Hotel & Restaurant
                </small>
                <h2
                  data-swiper-parallax="-300"
                  className="text-[28px] text-white leading-9"
                >
                  Enjoy Your <span className="text-[#df8033]">Dream</span> Time
                  with <br />
                  <span className="text-[#df8033]">Luxury</span> Experience
                </h2>
                <p
                  data-swiper-parallax="-400"
                  className="text-[18px] text-white font-poppins"
                >
                  Call Now{" "}
                  <span className="block text-[#df8033]">01905000715</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-screen flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${bannerImage2})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 z-[2]"></div>
              <div className="absolute bottom-[25%] left-[95px] z-[3] flex flex-col gap-[16px] font-playfair">
                <small
                  data-swiper-parallax="-200"
                  className="text-base text-white"
                >
                  Luxury Hotel & Restaurant
                </small>
                <h2
                  data-swiper-parallax="-300"
                  className="text-[28px] text-white leading-9"
                >
                  Enjoy Your <span className="text-[#df8033]">Dream</span> Time
                  with <br />
                  <span className="text-[#df8033]">Luxury</span> Experience
                </h2>
                <p
                  data-swiper-parallax="-400"
                  className="text-[18px] text-white font-poppins"
                >
                  Call Now{" "}
                  <span className="block text-[#df8033]">01905000715</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-screen flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${bannerImage3})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 z-[2]"></div>
              <div className="absolute bottom-[25%] left-[95px] z-[3] flex flex-col gap-[16px] font-playfair">
                <small
                  data-swiper-parallax="-200"
                  className="text-base text-white"
                >
                  Luxury Hotel & Restaurant
                </small>
                <h2
                  data-swiper-parallax="-300"
                  className="text-[28px] text-white leading-9"
                >
                  Enjoy Your <span className="text-[#df8033]">Dream</span> Time
                  with <br />
                  <span className="text-[#df8033]">Luxury</span> Experience
                </h2>
                <p
                  data-swiper-parallax="-400"
                  className="text-[18px] text-white font-poppins"
                >
                  Call Now{" "}
                  <span className="block text-[#df8033]">01905000715</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
