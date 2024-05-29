import { githubIcon, folderIcon } from "../assets/svgIcons"
import { projectData } from "../utils/dataTypes"

const ProjectCards:React.FC<{project:projectData}> = ({project}) => {
    return (
        <div className="flex flex-col p-2 rounded-md bg-slate-800 shadow w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-white">
            <div className="rounded-md p-3 text-wrap  flex flex-row justify-between">
                {folderIcon}
                <a href="" target="_blank"> {githubIcon} </a>
            </div>

            <div className="p-3 overflow-hidden overflow-ellipsis w-full">
                <p className="text-2xl font-bold"> {project.title} </p>
                <p className="text-slate-400 text-sm"> {project.description} </p>
            </div>

        </div>
    )
}

export default ProjectCards