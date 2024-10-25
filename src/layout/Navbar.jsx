import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Button from "../components/Button";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const menuData = [
    {
      id: 0,
      text: "Home",
      url: "/",
      dropdown: null,
    },
    {
      id: 1,
      text: "About Us",
      url: "/about",
      dropdown: null,
    },
    {
      id: 2,
      text: "Category",
      url: "service",
      dropdown: null,
    },
    {
      id: 3,
      text: "Amenities",
      url: "/amenities",
      dropdown: null,
    },
    {
      id: 4,
      text: "Rooms",
      url: "/rooms",
      dropdown: null,
    },
    {
      id: 5,
      text: "Testimonials",
      url: "/testimonial",
      dropdown: null,
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <>
      <nav
        className={`py-3 bg-[#00000062]  w-[100%] fixed top-0 left-0 z-[999] ${
          scrolled ? "bg-[#1e1e1e]" : "bg-[#00000036]"
        }`}
        ref={navRef}
      >
        <div className="max-w-container mx-4 sm:mx-5 md:mx-6 xl:mx-auto">
          <div className="flex justify-between gap-[20px] lg:gap-x-[30px] xl:gap-x-[70px] items-center">
            <div className="w-auto lg:w-[150px] xl:w-[200px]">
              <Link
                to="/"
                className="text-[22px] sm:text-[24px] md:text-[28px]  font-playfair font-bold text-[#df8033]"
              >
                ROYAL
                <span className="text-white">X</span>
              </Link>
            </div>

            <div className="hidden lg:block md:w-[600px] xl:w-[650px]">
              <ul className="flex justify-center items-center gap-[20px] text-white">
                {menuData.map((item, index) => (
                  <li key={index} className="relative group">
                    <div className='flex justify-center items-center gap-[3px] capitalize relative  after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full group-hover:text-[#df8033] transition-all duration-500 '>
                      <NavLink
                        to={item.url}
                        className="text-[15px] font-poppins font-medium relative group"
                      >
                        {item.text}
                      </NavLink>
                      {item.dropdown && (
                        <MdOutlineArrowDropDown className="text-[15px] group-hover:rotate-180 ease-out duration-700 " />
                      )}
                    </div>
                    {item.dropdown && (
                      <ul className="bg-[#df8033] p-5 absolute -bottom-8 left-0 translate-y-full w-[250px] flex flex-col gap-y-6 opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-bottom-[4px] z-50">
                        {item.dropdown.map((dropdownitem, dropdownindex) => (
                          <li
                            key={dropdownindex}
                            className='group/sub relative after:absolute after:content-[""] after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full'
                          >
                            <div className="flex justify-between items-center gap-[3px]">
                              <NavLink
                                to={dropdownitem.dropurl}
                                className="text-[15px] font-poppins font-medium relative group"
                              >
                                {dropdownitem.droptext}
                              </NavLink>
                              {dropdownitem.subdrop && (
                                <MdOutlineArrowDropDown className="text-[15px] group-hover/sub:rotate-180 ease-out duration-300" />
                              )}
                            </div>
                            {dropdownitem.subdrop && (
                              <ul className="bg-[#545454] flex flex-col gap-y-3 p-5 absolute top-8 -right-5 translate-x-full opacity-0 invisible transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:top-0">
                                {dropdownitem.subdrop.map(
                                  (subdropItem, subdropIndex) => (
                                    <li key={subdropIndex}>
                                      <Link
                                        href={subdropItem.subdropurl}
                                        className="text-[15px] font-poppins font-medium text-white"
                                      >
                                        {subdropItem.subdroptext}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="w-[40px] h-[30px] md:w-[40px] md:h-[40px] lg:hidden bg-[#cb5c00] flex justify-center items-center cursor-pointer">
              <RiMenu4Fill className=" text-[18px] sm:text-[22px] md:text-[26px]  text-white" />
            </div> */}

            {/* Menu icon for mobile */}
            <div
              className="w-[40px] h-[30px] md:w-[40px] md:h-[40px] lg:hidden bg-[#cb5c00] flex justify-center items-center cursor-pointer"
              onClick={toggleMenu} // Toggle the menu on click
            >
              <RiMenu4Fill className=" text-[18px] sm:text-[22px] md:text-[26px]  text-white" />
            </div>

            {/* Mobile Menu (Slide Down) */}
            {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 w-full bg-[#1e1e1e] p-5 shadow-lg z-[999]">
                <ul className="flex flex-col items-start  md:text-center gap-4 text-white">
                  {menuData.map((item, index) => (
                    <li key={index} className="w-full">
                      <NavLink
                        to={item.url}
                        className="block text-[15px] font-poppins font-medium"
                        onClick={toggleMenu} // Close the menu on selection
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="hidden md:block lg:w-[150px] xl:w-[250px] text-right group">
              <Button
                className="h-[38px] w-[130px] borde-0 bg-[#cb5c00] text-[15px] tracking-[1.5px] font-poppins font-medium text-white rounded-[30px] transition-all duration-700 hover:border-black cursor-pointer shadow-[2px_3px_3px_1px_#B9B7BD]"
                text="Book Now"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
