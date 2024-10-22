import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = ["About", "Contact Us", "Rooms", "GYM", "Restaurant"];
  const cityBranches = [
    "Bangladesh",
    "California",
    "Germany",
    "Mexico",
    "India",
  ];
  const contactDetails = [
    { label: "Address", value: "Street- Dhaka, Bangladesh" },
    { label: "Email", value: "jakaria.dev242@gmail.com" },
    { label: "Phone", value: "01905000715" },
  ];

  return (
    <div className="py-[40px] bg-[#1e1e1e]">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-4 gap-[40px]">
          <div>
            <h2>
              <Link
                to="/"
                className="text-[25px] font-playfair font-bold text-[#df8033]"
              >
                ROYAL
                <span className="text-white">X</span>
              </Link>
            </h2>
            <p className=" text-[14px] text-[rgba(131,131,131,1)] hover:text-[#51b9ff] cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              pariatur sed omnis laboriosam vel est!
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-[20px] font-poppins font-bold text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[12px] text-[14px] font-poppins font-normal text-[rgba(131,131,131,1)]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link className="hover:text-[#51b9ff] cursor-pointer" to="#">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[20px] font-poppins font-bold text-white">
              City Branches
            </h3>
            <ul className="flex flex-col gap-[12px] text-[14px] font-poppins font-normal text-[rgba(131,131,131,1)]">
              {cityBranches.map((branch, index) => (
                <li key={index}>
                  <Link className="hover:text-[#51b9ff] cursor-pointer" to="#">
                    {branch}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[20px] font-poppins font-bold text-white">
              Contact
            </h3>
            <ul className="flex flex-col gap-[12px] text-[14px] font-poppins font-normal text-[rgba(131,131,131,1)]">
              {contactDetails.map((detail, index) => (
                <li className="hover:text-[#51b9ff] cursor-pointer" key={index}>
                  {detail.label} :
                  <span className="text-white"> {detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
