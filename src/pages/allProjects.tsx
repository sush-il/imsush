import { useLocation } from "react-router-dom"
import ProjectCards from "../components/projectCards"
import { projectData } from "../utils/dataTypes"
import '../App.css'
import Navbar from "../components/navbar"
import { useState } from "react"

const AllProjects = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const {state} = useLocation();
    return(
        <div className="min-h-screen font-mono bg-slate-100 dark:bg-gray-900 dark:text-white">
            <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
            <div className={`mx-auto container p-3 grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3 ${isOpen ? 'filter blur-sm' : ''}`}>
                {
                    state.projects.map((project:projectData, index:any)=>(
                        <ProjectCards project={project} key={index} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default AllProjects