import React from "react";
import { TypeAnimation } from "react-type-animation";


import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import resume from '../assets/Images/resume1.jpeg'

const Home = () => {
  return (
    <div className="mt-24  w-full max-w-screen-xl  items-center md:items-start  md:max-w-[1200px] mx-auto relative flex flex-col md:flex-row md:justify-between justify-center  grid-cols-2   select-none" >
      {/* div1 */}
      <div className="w-full md:max-w-[50%] flex flex-col items-center md:items-start text-center md:text-left ">
        <TypeAnimation className="text-purple-500"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Front End Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Web Developer",
            1000,
           
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />

        <h1 className="md:text-[70px] text-[30px] text-black">
              
          HEY, I AM <span className="text-purple-500">VIVEK SHARMA</span>
        </h1>
        <h1 className="md:text-2xl  text-black">
          I am a front end developer with 6 months of internship
        </h1>
        <div className="flex flex-wrap h-[100px]  mt-5 gap-7 items-center   ">
          <h1 className="border-2 border-purple-500 md:h-[60px] cursor-pointer h-[40px]  w-[180px] flex justify-center items-center px-5 py-2 rounded-2xl text-black font-serif font-bold md:w-[200px]">
            DOWNLOAD CV
          </h1>
          <FaGithub className="md:text-[60px] cursor-pointer text-[30px] text-purple-500 hover:transition hover:transform hover:scale-120 hover:ease-in-out" />
          <CiLinkedin className="md:text-[60px] cursor-pointer text-[30px] text-purple-500 hover:scale-120 hover:ease-in-out" />
          <FaInstagram className="md:text-[60px] cursor-pointer text-[30px] text-purple-500 hover:scale-120 hover:ease-in-out" />
        </div>
      </div>
      <div className=" w-full md:w-[50%] mt-10 md:mt-0 flex justify-center z-0 "  >
        <img
          className="w-full max-w-[400px] h-auto object-contain "
          src={resume}
          alt=""
        />
      </div>
      
      
    </div>
  );
};

export default Home;
