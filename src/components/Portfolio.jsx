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
      <div className=' mt-[-80px] h-[450px]'>
        <img className="md:h-[550px] h-[450px] md:w-[500px] w-[450px] object-contain rounded-sm  " src={spotify} alt="" />

      </div>
      <div className=' mt-7 h-[300px] flex justify-center  flex-col gap-7 '>
       <h1 className='font-semibold text-2xl'>Project #1</h1>
       <h1 className='font-semibold text-2xl'>Spotify clone using React</h1>
       <div className='flex gap-5 '>
        <a href='https://spotify-clone-5qre.vercel.app/'><button className='h-[50px] w-[120px] bg-purple-500 rounded-2xl text-white font-semibold cursor-pointer hover:bg-purple-600'>View Site</button></a>
        <a href='https://github.com/vivek-470/Spotify-clone.git'><button className='h-[50px] w-[50px] bg-purple-500 rounded-2xl text-white font-semibold flex justify-center items-center cursor-pointer hover:bg-purple-600'><FaGithub className='text-2xl '/></button></a>
       </div>

      </div>
      </div>
      {/* project 2 */}
      <div className='flex justify-center md:items-center md:gap-10  flex-col items-center md:flex-row max-w-[480px] md:max-w-full '>
     
      <div className=' mt-7 h-[300px] flex justify-center  flex-col gap-7 '>
       <h1 className='font-semibold text-2xl'>Project #2</h1>
       <h1 className='font-semibold text-2xl'>Spotify clone using React</h1>
       <div className='flex gap-5 '>
        <button className='h-[50px] w-[120px] bg-purple-500 rounded-2xl text-white font-semibold cursor-pointer hover:bg-purple-600'>View Site</button>
        <button className='h-[50px] w-[50px] bg-purple-500 rounded-2xl text-white font-semibold flex justify-center items-center cursor-pointer hover:bg-purple-600'><FaGithub className='text-2xl '/></button>
       </div>

      </div>
      <div className=' mt-[-80px] h-[450px] '>
        <img className="md:h-[550px] h-[450px] md:w-[500px] w-[450px] object-contain rounded-sm " src={spotify} alt="" />

      </div>
      </div>
    </div>
    </section>
  )
}

export default Portfolio