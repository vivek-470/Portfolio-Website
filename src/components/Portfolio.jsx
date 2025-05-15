import React from 'react'
import spotify from '../assets/Images/spotify.png'
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section  id='portfolio' >
      <div className='mt-6'  id='portfolio'>
      <h1 className='text-black font-bold text-2xl md:w-[700px] max-w-xl flex justify-center items-center'>Portfolio</h1>
      {/* project 1 */}
      <div className='flex justify-center md:items-center md:gap-10  flex-col items-center md:flex-row max-w-[480px] md:max-w-full '>
      <div className=' mt-[-80px] h-[450px] w-[350px] md:w-[500px]'>
        <img className="md:h-[550px] h-[450px] md:w-[500px] w-[350px] object-contain rounded-sm  " src={spotify} alt="" />

      </div>
      <div className=' mt-7 h-[300px] flex justify-center  flex-col gap-7 '>
       <h1 className='font-semibold text-2xl'>Project #1</h1>
       <h1 className='font-semibold text-2xl'>Spotify clone using React and tailwind css</h1>
       <div className='flex gap-5 '>
        <a href='https://spotify-clone-01-lyart.vercel.app/'><button className='h-[50px] w-[120px] bg-purple-500 rounded-2xl text-white font-semibold cursor-pointer hover:bg-purple-600'>View Site</button></a>
        <a href='https://github.com/vivek-470/Spotify-clone.git'><button className='h-[50px] w-[50px] bg-purple-500 rounded-2xl text-white font-semibold flex justify-center items-center cursor-pointer hover:bg-purple-600'><FaGithub className='text-2xl '/></button></a>
       </div>

      </div>
      </div>
      {/* project 2 */}
      <div className='flex justify-center md:items-center md:gap-10  flex-col items-center md:flex-row max-w-[480px] md:max-w-full '>
     
      <div className=' mt-7 h-[300px] flex justify-center  flex-col gap-7 '>
       <h1 className='font-semibold text-2xl'>Project #2</h1>
       <h1 className='font-semibold text-2xl'>Shopping website using  React and tailwind css</h1>
       <div className='flex gap-5 '>
        <a href='https://shopcart-clone-umy2.vercel.app/'><button className='h-[50px] w-[120px] bg-purple-500 rounded-2xl text-white font-semibold cursor-pointer hover:bg-purple-600'>View Site</button></a>
        <a href="https://github.com/vivek-470/Shopcart-clone.git"><button className='h-[50px] w-[50px] bg-purple-500 rounded-2xl text-white font-semibold flex justify-center items-center cursor-pointer hover:bg-purple-600'><FaGithub className='text-2xl '/></button></a>
       </div>

      </div>
      <div className=' mt-[-80px] h-[450px] w-[350px] md:w-[500px] '>
        <img className="md:h-[550px] h-[450px] md:w-[500px] w-[350px] object-contain rounded-sm " src="https://res.cloudinary.com/dzmfopf1b/image/upload/v1747328692/shopcart_yed5c0.png" alt="" />

      </div>
      </div>
    </div>
    </section>
  )
}

export default Portfolio