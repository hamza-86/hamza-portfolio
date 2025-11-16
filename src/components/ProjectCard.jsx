import React from "react"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import github from "../assets/project/github.png"

const ProjectCard = ({ index,
    name,
    description,
    tags,
    image,
    sourceCodeLink,}) => {
  return (

        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        initial="hidden"
        animate="show" >
        
            <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
              <div className="relative h-[230px] w-full">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                  <div
                    onClick={() => window.open(sourceCodeLink, "_blank")}
                    className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="h-1/2 w-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-[22px] font-bold text-white">{name}</h3>
                <p className="text-secondary mt-2 text-[14px]">{description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
         
        </motion.div>
  )
};

export default ProjectCard;
