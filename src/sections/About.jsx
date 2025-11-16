import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import {services} from "../constants/index"


const About = () => {
  
  return (
    <section className="min-h-screen lg:w-[1200px] mx-auto px-5 pt-10 pl-10 id" id="about">
     
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </h2>
      </motion.div>

      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-secondary mt-4 max-w-3xl  text-[17px] leading-[30px]"
      >
        I am a passionate Full-Stack Web Developer with a strong foundation in programming languages like C, C++, and JavaScript. Proficient in frontend technologies such as Recat.js HTML, CSS, and Tailwind CSS, as well as backend frameworks like Express.js and Node.js. I thrive on building scalable, efficient, and user-friendly applications, always eager to learn and innovate. Let's work together to bring your ideas to life!      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
