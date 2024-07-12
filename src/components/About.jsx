import React from "react";
import aboutBg from "../assets/aboutBg.png";

const About = () => {
  return (
    <div className="bg-[#141414] text-white w-full min-h-[100vh] flex flex-col-reverse lg:flex-row items-center">
      {/*Large screen*/}
     <div className="hidden md:flex md:flex-col-reverse lg:flex lg:flex-row">
      <img
        src={aboutBg}
        alt="About Background"
        className="lg:w-1/2"
      />

      <div className="lg:w-1/2 md:w-[80%] md:pl-[50px] flex flex-col justify-center items-start lg:mr-[100px]">
        <h1 className="font-archivo text-[25px] lg:text-[30px] text-[#FF4739]">
          BRINGING YOUR CONCEPTS TO LIFE WITH EXPERT UI/UX DESIGN!
        </h1>
        <p className="font-poppins mt-[30px] text-[16px] lg:text-[18px]">
          In today's digital world, a well-designed interface can make all the
          difference. As a dedicated UI/UX designer, I am committed to creating
          designs that resonate with your audience and drive engagement. Let's
          create something amazing together that reflects your brand and meets
          your users' needs.
        </p>
      </div>
     </div>

     {/*Small screen*/}

     <div
        style={{ backgroundImage: `url(${aboutBg})` }}
        className='relative mx-auto  w-full h-[100vh] bg-cover bg-center bg-no-repeat md:hidden'
      >
        <div className='absolute mx-auto px-4 flex flex-col justify-center items-center h-full w-full'>
          <h1 className='font-archivo text-[30px] text-center text-[#FF4739]'>
          BRINGING YOUR CONCEPTS TO LIFE WITH EXPERT UI/UX DESIGN!
          </h1>
          <p className="font-poppins text-center mt-[30px] text-[16px] lg:text-[18px]">
          In today's digital world, a well-designed interface can make all the
          difference. As a dedicated UI/UX designer, I am committed to creating
          designs that resonate with your audience and drive engagement. Let's
          create something amazing together that reflects your brand and meets
          your users' needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
