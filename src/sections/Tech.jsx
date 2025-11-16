import Skills from "../components/Skills"
import {technologies} from "../contsnts/index"

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center pl-8 gap-10 mt-32 lg:w-[1100px] mx-auto">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <Skills icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  ); 
};

export default Tech;
