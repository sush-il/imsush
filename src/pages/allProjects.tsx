import { useLocation } from "react-router-dom"
import ProjectCards from "../components/projectCards"
import { projectData } from "../utils/dataTypes"

const AllProjects = () => {
    const {state} = useLocation();
    return(
        <div className="grid grid-cols-1 gap-3 dark md:grid-cols-2 lg:grid-cols-4">
            {
                state.projects.map((project:projectData, index:any)=>(
                    <ProjectCards project={project} key={index} />
                ))
            }
            
        </div>
    )
}

export default AllProjects