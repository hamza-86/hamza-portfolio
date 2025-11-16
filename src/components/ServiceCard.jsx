import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion"; 

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30} 
      tiltMaxAngleY={30} 
      glareColor="#aaa6c3" 
    >
      <div className="xs:w-[250px]  w-[260px]">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          initial="hidden" // Initial state before the animation
          animate="show" // State after the animation // Animation variants
          className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
        >
          <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
            <img
              src={icon}
              alt="service-icon"
              className="h-16 w-16 object-contain"
            />
            <h3 className="text-center text-[20px] font-bold text-white">
              {title} <br /> Developer
            </h3>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
