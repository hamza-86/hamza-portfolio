import React from "react"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard"

const Project = () => {
  return (
    <section className="min-h-screen  lg:w-[1200px] mx-auto px-5 pt-10 pl-10" id="project">
     
    <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
      My work
      </p>
      <h2 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">
      Projects
      </h2>
    </motion.div>

     <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
          >
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.    
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </section>
  )
};

export default Project;
