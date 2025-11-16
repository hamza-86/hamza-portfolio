import React from "react"

const Skills = ({icon}) => {
  return (
   
    <div className="xs:w-[250px]  w-[230px]">
        <div className="bg-tertiary flex h-20 w-20 flex-col items-center justify-center rounded-full
         shadow-card p-[1px] ">
          <img
            src={icon}
            alt="service-icon"
            className="h-16 w-16 object-contain" // Ensure the image fits inside the circle
          />
        </div>

    
    </div>
  
  )
};

export default Skills;
