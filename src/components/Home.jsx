import React from 'react'
import heroBg from "../assets/heroBg.png"
const Home = () => {
  return (
    <div className='bg-black text-white w-full h-[100vh] md:flex md:justify-center md:items-center'>
        <div className='w-full md:ml-[100px]'>
        <h1 className='font-archivo text-[45px]'>GET THE PERFECT ATTRACTIVE UI/UX DESIGN FOR YOUR WEBSITE</h1>
        <button className='bg-[#FF4739] text-black font-archivo px-[20px] py-[10px] mt-[50px] hover:bg-black hover:text-[#FF4739] hover:border-[2px] hover:border-[#FF4739] duration-150'>MAKE A DEAL</button>
        </div>
        <img src={heroBg} alt="" className='w-[650px] h-[500px]' />
    </div>
  )
}

export default Home