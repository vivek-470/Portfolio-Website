import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  function ChangeIcon() {
    setIcon(!icon);
  }

  const nav = [
    { href: "skills", name: "Skills" },
    { href: "portfolio", name: "Portfolio" },
    { href: "contact", name: "Contact" },
  ];

  return (
   
       <div className="bg-white fixed top-0  shadow  w-full h-[80px] text-black flex justify-between items-center px-4 md:px-36 md:flex  border-2 border-black backdrop-blur-md z-50 drop-shadow-xl">
      {/* Logo / Name */}
      <div className="flex text-[20px]">
        <h1 className="hidden md:flex">Vivek Sharma</h1>
      </div>

      {/* Desktop Nav */}
      <div className="gap-12 text-[20px] hidden md:flex cursor-pointer ">
        {nav.map((item, key) => (
          <h1 key={key} >
            <Link  to={item.href} smooth={true} duration={500} offset={-80}>
              {item.name}
            </Link>
          </h1>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={ChangeIcon}>
        {icon ? <RxCross1 className="text-black" size={28} /> : <RxHamburgerMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed mt-18 top-0 left-0 h-screen w-full bg-black text-white p-6 z-60 transform transition-transform duration-400 ease-in-out ${
          icon ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 mt-20 text-xl  w-full">
          {nav.map((item, key) => (
            <h1
              key={key}
              className="hover:transition hover:transform hover:scale-110 hover:ease-in-out cursor-pointer  w-[100%] flex justify-center items-center "
            >
              <Link  className=""
                to={item.href}
                smooth={true}
                duration={500}
                onClick={() => setIcon(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </h1>
          ))}
        </div>
      </div>
    </div>
  
   
  );
};

export default Navbar;
