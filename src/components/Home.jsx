import React from 'react';
import heroBg from '../assets/heroBg.png';
import heroBg2 from '../assets/heroBg2.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='bg-black text-white w-full h-[100vh] flex flex-col md:flex-row md:justify-center md:items-center'>
      {/* Desktop view */}
      <div className='hidden md:flex md:flex-row md:justify-center md:items-center md:w-full'>
        <div className='mx-auto px-4 md:w-1/2 md:ml-[50px] lg:ml-[100px]'>
          <h1 className='font-archivo text-[30px] sm:text-[35px] lg:text-[45px]'>
            GET THE PERFECT ATTRACTIVE UI/UX DESIGN FOR YOUR WEBSITE
          </h1>
          <Link to="/deal">
            <button className='bg-[#FF4739] text-black font-archivo px-[20px] py-[10px] mt-[50px] hover:bg-black hover:text-[#FF4739] hover:border-[2px] hover:border-[#FF4739] duration-150'>
            MAKE A DEAL
            </button>
          </Link>
        </div>
        <div className='md:w-1/2'>
          <img src={heroBg} alt="Hero Background" className='w-full h-[500px]' />
        </div>
      </div>

      {/* Mobile view */}
      <div
        style={{ backgroundImage: `url(${heroBg2})` }}
        className='relative w-full h-[100vh] bg-cover bg-center bg-no-repeat md:hidden'
      >
        <div className='absolute flex flex-col justify-center items-center h-full w-full'>
          <h1 className='font-archivo text-[30px] text-center'>
            GET THE PERFECT ATTRACTIVE UI/UX DESIGN FOR YOUR WEBSITE
          </h1>
          <Link to="/deal" className='bg-[#FF4739] text-black font-archivo px-[20px] py-[10px] mt-[50px] hover:bg-black hover:text-[#FF4739] hover:border-[2px] hover:border-[#FF4739] duration-150'>
            MAKE A DEAL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
