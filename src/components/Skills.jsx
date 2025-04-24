import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";


import { BsFillBootstrapFill } from "react-icons/bs";



const Skills = () => {
  return (
    <>
   <section id="skills" >
   <div className='  w-full px-4 py-4 items-center  flex flex-col justify-center md:py-12 ' >
     <div className='flex flex-wrap justify-center items-center gap-4 '>
      My Tech Stack
 
      <FaHtml5 className='text-orange-400 md:text-7xl text-4xl' />
      <FaHtml5 className='text-blue-500 md:text-7xl text-4xl' />
      <FaJsSquare  className='text-yellow-400 md:text-7xl text-4xl'/> 
      <FaReact className='text-blue-300 md:text-7xl text-4xl' />
  
      <FaNodeJs className=' text-green-500 md:text-7xl text-4xl' />
      </div>

      {/* skills box */}

      <div className='h-[200px] w-[300px]  border-2 border-purple-500  flex flex-col  rounded-[7px] mt-20  items-center py-7 text-[18px] font-normal bg-purple-600 text-white select-none'>
        <h1 className='font-bold text-[20px]' >Frontened</h1>
        {/* first column*/}
        <div className='flex gap-6 mt-4 '>
         <div className='flex flex-col gap-3  w-[130px]'>
          <div className='flex gap-2 items-center '>
          <FaHtml5 className='text-orange-500 text-2xl' />
          HTML

          </div>
          <div className='flex gap-2 items-center '>
          <FaSass className='text-pink-400 text-2xl'/>
           Sass

          </div>
          <div className='flex gap-2 items-center'>
          <FaJsSquare className='text-orange-500 text-3xl' />
           Javascript

          </div>

         </div>
         {/* Second column*/}
         <div className='flex flex-col gap-3'>
         <div className='flex gap-2 items-center'>
          <IoLogoCss3 className='text-blue-500 text-2xl'  />
          CSS

          </div>
          <div className='flex  gap-2  items-center'>
          <BsFillBootstrapFill className='text-purple-500 text-2xl' />
           Bootstrap

          </div>
          <div className='flex gap-2 items-center'>
          <FaReact className='text-orange-500 text-2xl' />
           React

          </div>
          </div>
      
        </div>
        </div>

      </div>
   </section>
    

    </>
  )
}

export default Skills