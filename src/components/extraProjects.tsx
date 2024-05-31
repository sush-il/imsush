import { Link} from "react-router-dom"
import ProjectCards from "./projectCards"
import data from "../utils/allData.json"

const ExtraProjects = () => {
    const projects = data.projects;
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    projects.slice(0,6).map((project,index)=>(
                        project.featured==="false" && <ProjectCards project={project} key={index} />
                    ))    
                }
            </div>

            {
                (projects.length > 5) && 
                <div className="mt-5 p-3 w-full m-0 flex justify-center">
                    <Link to="/allProjects" state={{projects:projects}}>
                        <button className = "rounded-md p-3 border-2 border-solid border-teal-400 hover:scale-110">
                            View more
                        </button>
                    </Link>
                </div>
            }
        </div>

    )
}

export default ExtraProjects