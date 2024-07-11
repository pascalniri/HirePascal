import React from 'react'
import profile from "../assets/profile.png"
import { TbPointFilled } from "react-icons/tb";

const Services = () => {
  return (
    <div className='w-full h-[100vh] bg-black text-white md:px-[150px] md:py-[50px]'>
      <div className='bg-[#141414] md:flex md:flex-row md:items-center w-full h-full'>
        <div className='w-full px-[30px] py-[40px]'>
            <h1 className='font-archivo text-[25px] text-[#FF4739]'>COMPREHENSIVE UI/UX DESIGN SOLUTION</h1>
            <ul className='font-poppins mt-[10px] leading-[30px]'>
                <li className='flex items-center gap-1'><TbPointFilled />
                User Research and Analysis</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Wireframing and Prototyping</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                UI Design</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                UX Design</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Visual Design</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Usability Testing</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Interaction Design</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Responsive Web Design</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Design Audits</li>
                <li className='flex items-center gap-1'><TbPointFilled />
                Consultation and Training</li>
            </ul>
            <div className='flex gap-[20px]'>
            <button className='bg-[#FF4739] text-black font-archivo px-[20px] py-[10px] mt-[40px] hover:bg-black hover:text-[#FF4739] hover:border-[2px] hover:border-[#FF4739] duration-150'>
            WANT DESIGN
          </button>

          <button className='text-[#FF4739] border-[2px] border-[#FF4739] bg-[#141414] font-archivo px-[15px] py-[10px] mt-[40px] hover:bg-black  duration-150'>
            WANT TO LEARN UI/UX
          </button>
            </div>
        </div>

        <div className='w-full'>
            <img src={profile} alt="" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default Services