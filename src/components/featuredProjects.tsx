import { githubIcon, linkIcon } from "../assets/svgIcons"
import temp from "../assets/temp.png"

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Project 1",
            description: `This project was done to impress people. 
            It is really really cool. It is really really cool.
            It is really really cool. It is really really cool.
            You should try it. It is really really cool. Let's try to 
            get this thing to overflow to see if overflow is working properly.  `,
            cover: "https://private-user-images.githubusercontent.com/34659821/321349785-f20829e5-69d8-41a5-af1d-7a69f3338d5d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY3Mzg4OTEsIm5iZiI6MTcxNjczODU5MSwicGF0aCI6Ii8zNDY1OTgyMS8zMjEzNDk3ODUtZjIwODI5ZTUtNjlkOC00MWE1LWFmMWQtN2E2OWYzMzM4ZDVkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI2VDE1NDk1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNmZTZiMTUwM2NlYjhlZWIyMzAyYmU0ZjMxYjQ2MjgzZWY0NmY3YWIzNmIwMzU2NTViYzM4OWE5NTgxM2RlZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.O0MQBUkouvtreDtTLPjw30nOQxfgrEK-oHkKNxRJnGk",
            githubLink: "",
            demoLink: "",
            featured: true,
        },
        {
            title: "Project 2",
            description: `This project was done to impress people. 
            It is really really cool.
            You should try it. Let's make this a little longer. `,
            cover: temp,
            githubLink: "",
            demoLink: "",
            featured: true,
        },
        {
            title: "Project 3",
            description: `This project was done to impress people. 
            It is really really cool.
            You should try it `,
            cover: temp,
            githubLink: "",
            demoLink: "",
            featured: true,
        }
    ]

    // flex flex-col w-full justify-evenly md:flex-row
    //lg:w-1/3
    return (
        <div className="w-full grid grid-cols-1 gap-3 lg:grid-cols-3">
            {projects.map((project,index)=>(
                project.featured && 
                <div key={index} className="flex flex-col items-center p-2 w-full">                 
                    <span className="rounded-md p-3 text-wrap h-5/6  overflow-hidden whitespace-nowrap overflow-ellipsis bg-slate-800 bg-opacity-30 hover:bg-opacity-80">
                        <img className="w-1/2 aspect-video" src={project.cover} alt="Project Image" /> 
                        <h1 className="text-3xl font-bold pt-3">{project.title}</h1>
                        <p className="text-sm text-slate-400"> {project.description} </p>
                    </span>

                    <div className="float-right w-full ">
                        <a href={project.demoLink} target="_blank"> {linkIcon} </a>
                        <a href={project.githubLink} target="_blank"> {githubIcon} </a>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default FeaturedProjects