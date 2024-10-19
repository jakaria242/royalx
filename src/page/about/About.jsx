import React from "react";
import aboutpic from "../../assets/images/about-one.png";

const About = () => {
  const countData = [
    {
      id: 0,
      count: "260+",
      text: "Awards wins",
    },
    {
      id: 1,
      count: "250k+",
      text: "Visitors Visits",
    },
    {
      id: 0,
      count: "160k+",
      text: "Events",
    },
  ];

  return (
    <div className="py-[90px]">
      <div className="max-w-container mx-auto">
        <div className="w-full flex justify-between">
          <div className="w-[50%]">
            <div className="w-[90%] ">
              <picture>
                <img
                  className="w-full h-full object-cover"
                  src={aboutpic}
                  alt="Not Found"
                />
              </picture>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-col gap-[15px] py-[30px]">
              <small className="text-[22px] text-[#1e1e1e] font-poppins font-semibold">
                The Royal Hotel
              </small>
              <h2 className="text-[35px] text-[#1e1e1e] font-playfair font-bold">
                Where Elegance Meets{" "}
                <span className="text-[#9d7e54]">Excellance</span>
              </h2>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dolorem qui repellat deleniti quis nisi veniam fugiat obcaecati
                inventore laboriosam iure vero, maxime asperiores deserunt.
              </p>
              <div className="grid grid-cols-3 gap-[30px] mt-[35px]">
                {countData.map((data) => (
                  <p
                    key={data.id}
                    className={`h-[100px] w-[180px] flex flex-col justify-center items-center py-[25px] px-[20px] bg-[rgb(157,126,84,0.05)] border border-[#9d7e54] rounded-[25px] text-[35px] text-center font-poppins font-semibold leading-[30px] ${
                      data.id === 1 ? "mt-[15px]" : ""
                    }`}
                  >
                    {data.count}
                    <span className="text-[15px] block font-poppins">
                      {data.text}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
