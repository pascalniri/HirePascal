import React from 'react'
import aboutBg from "../assets/aboutBg.png"
const About = () => {
  return (
    <div className='bg-[#141414] gap-[30px] text-white w-full h-[100vh] md:flex md:justify-center md:items-center'>
          <img src={aboutBg} alt="" className='w-[650px] h-[500px]' />
        <div className='w-full md:mr-[100px]'>
        <h1 className='font-archivo text-[30px] text-[#FF4739]'>BRINGING YOUR CONCEPTS TO LIFE WITH EXPERT UI/UX DESIGN!</h1>
        <p className='font-poppins mt-[30px]'>In today's digital world, a well-designed interface can make all the difference. As a dedicated UI/UX designer, I am committed to creating designs that resonate with your audience and drive engagement. Let's create something amazing together that reflects your brand and meets your users' needs.</p>
        </div>
      
    </div>
  )
}

export default About