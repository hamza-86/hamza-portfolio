import React from "react"
import homeImg from "../assets/home.svg"

const Hero = () => {
  return (
    <section className={`relative mx-auto min-h-[600px] lg:min-h-screen w-full`} id="home">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl sm:px-16 px-6 flex flex-row  items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          
          <div className="bg-gradient-to-b from-[#915EFF] to-[#6B46C1] h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohd Hamza</span>
          </h1>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-white-100 mt-2`}>
          Full-Stack Developer <br className="hidden sm:block" />
          </p>
          <div className=" w-full flex justify-center items-center lg:pl-48 mt-8 lg:mt-[-30px]">
          <img src={homeImg} alt="Home illustration" className="lg:w-[500px] w-[350px]" />

          </div>
        </div>

        
      </div>
    </section>
  )
};

export default Hero;
