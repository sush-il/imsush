import { githubIcon, folderIcon } from "../assets/svgIcons";
import { projectData } from "../utils/dataTypes";
import TechUsed from "./techUsed";

const ProjectCards: React.FC<{ project: projectData }> = ({ project }) => {
  return (
    <div className='text-slate-100 flex flex-col justify-between p-2 rounded-md bg-slate-800 shadow w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-white'>
      <div className='w-full h-40 overflow-hidden'>
        <div className='rounded-md p-3 flex flex-row justify-between'>
          {folderIcon}
          <a href={project.githubLink} target='_blank'>
            {" "}
            {githubIcon}{" "}
          </a>
        </div>

        <div className='p-3 overflow-hidden text-ellipsis whitespace-normal'>
          <p className='text-2xl font-bold'> {project.title} </p>
          <p className='text-slate-400 text-sm overflow-hidden text-ellipsis whitespace-normal'>
            {" "}
            {project.description}{" "}
          </p>
        </div>
      </div>

      <div className='p-3 container flex justify-end w-full'>
        <TechUsed techList={project.techUsed} />
      </div>
    </div>
  );
};

export default ProjectCards;
