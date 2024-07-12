import React from 'react'
import heroBg2 from "../assets/heroBg2.png"
import { Link } from 'react-router-dom'

const Deal = () => {
  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col justify-center items-center lg:flex lg:flex-row'>
        <div style={{backgroundImage:`url(${heroBg2})`}} className='lg:w-1/2 mx-auto px-4 pt-[100px] pb-[50px] h-[100%] lg:h-[100vh] text-center bg-cover bg-center bg-no-repeat flex flex-col-reverse justify-center items-center'>
            <p>Thank you for choosing to work with us! Please fill out the form to get started on creating the perfect UI/UX design for your project. We look forward to bringing your vision to life!</p>
            <Link to="/">
            <button className='bg-[#FF4739] text-black font-archivo px-[20px] py-[10px] mb-[50px] hover:bg-transparent hover:text-[#FF4739] hover:border-[2px] hover:border-[#FF4739] duration-150'>
            RETURN TO HOME
            </button>
            </Link>
        </div>
        <form className=' lg:w-1/2 flex flex-col mx-auto px-4 py-[30px] w-full'>
            <input type="text" placeholder='Your names' className='px-[20px] py-[10px] mb-[20px] bg-black border border-[#2c2c2c] outline-none' />
            <input type="text" placeholder='Your email address' className='px-[20px] py-[10px] mb-[20px] bg-black border border-[#2c2c2c] outline-none' />
            <textarea type="text" placeholder='Describe your deal' rows={10} cols={50} className='px-[20px] py-[10px] mb-[20px] bg-black border border-[#2c2c2c] outline-none' />
           <div className='flex justify-end'>
           <button className='bg-[#FF4739] text-black font-archivo px-[20px] py-[10px] mt-[50px] hover:bg-black hover:text-[#FF4739] hover:border-[2px] hover:border-[#FF4739] duration-150'>
            SEND YOUR DEAL
            </button>
           </div>
        </form>
    </div>
  )
}

export default Deal