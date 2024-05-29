import { Link} from "react-router-dom"
import ProjectCards from "./projectCards"
const projects = [
    {
        title: "Project 1",
        description: `This project was done to impress people. 
        It is really really cool. It is really really cool.
        It is really really cool. It is really really cool.
        You should try it. It is really really cool. `,
        cover: "",
        githubLink: "",
        demoLink: "",
        featured: true,
    },
    {
        title: "Project 2",
        description: `This project was done to impress people. 
        It is really really cool.
        You should try it `,
        cover: "",
        githubLink: "",
        demoLink: "",
        featured: true,
    },
    {
        title: "Project 3",
        description: `This project was done to impress people. 
        It is really really cool.
        You should try it `,
        cover: "",
        githubLink: "",
        demoLink: "",
        featured: true,
    },
    {
        title: "Project 4",
        description: `This project was done to impress people. 
        It is really really cool.
        You should try it `,
        cover: "",
        githubLink: "",
        demoLink: "",
        featured: true,
    }, 
    {
        title: "Project 5",
        description: `This project was done to impress people. 
        It is really really cool.
        You should try it `,
        cover: "",
        githubLink: "",
        demoLink: "",
        featured: true,
    },
    {
        title: "Project 5",
        description: `This project was done to impress people. 
        It is really really cool.
        You should try it `,
        cover: "",
        githubLink: "",
        demoLink: "",
        featured: true,
    }
]

const ExtraProjects = () => {
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    projects.slice(0,6).map((project,index)=>(
                        <ProjectCards project={project} key={index} />
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