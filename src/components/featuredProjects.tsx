import { githubIcon, linkIcon } from "../assets/svgIcons"
import TechUsed from "./techUsed";
import { projectData } from "../utils/dataTypes";

const FeaturedProjects:React.FC<{projects:projectData[]}> = ({projects}) => { 
    return (
        <div className="w-full grid grid-cols-1 gap-3 lg:grid-cols-3">
            {projects.map((project,index)=>(
                project.featured === "true" &&
                <div key={index} className="flex flex-col items-center p-2 w-full">                 
                    <span className="rounded-md p-3 text-wrap h-5/6  overflow-hidden whitespace-nowrap overflow-ellipsis bg-slate-800 bg-opacity-30 hover:bg-opacity-80">
                        <img className="w-1/2 aspect-video" src={project.cover} alt="Project Image" /> 
                        <h1 className="text-3xl font-bold pt-3">{project.title}</h1>
                        <p className="text-sm text-slate-400"> {project.description} </p>
                    </span>

                    <div className="w-full flex justify-between items-center">
                        <div className="w-2/3">
                            <TechUsed techList={project.techUsed} />
                        </div>
                        <div className="w-1/3 p-3 float-right">
                            <a href={project.demoLink} target="_blank"> {linkIcon} </a>
                            <a href={project.githubLink} target="_blank"> {githubIcon} </a>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default FeaturedProjects