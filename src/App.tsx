import { useContext, useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import ExtraProjects from "./components/extraProjects";
import { DataContext } from "./utils/dataContext";
import { mainDataType } from "./utils/dataTypes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const allData = useContext<mainDataType>(DataContext);
  const projects = allData.projectsData;
  const builds = allData.buildData;
  sessionStorage.setItem("currentProjects", JSON.stringify(projects));
  sessionStorage.setItem("currentBuildsData", JSON.stringify(builds));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!projects) {
    return (
      <div className='w-full min-h-screen font-mono flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white p-3'>
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`w-full min-h-screen font-mono flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white p-3 `}>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <div
        className={`w-full container mx-auto my-5 md:my-0 md:h-screen ${
          isOpen ? "filter blur-sm" : ""
        }`}>
        <HeroSection />
      </div>
      <div
        id='projects'
        className={`container mx-auto flex flex-col ${
          isOpen ? "filter blur-sm" : ""
        }`}>
        <h1 className='text-5xl font-bold text-left p-2 pb-5'>
          {" "}
          Featured Projects{" "}
        </h1>
        <ExtraProjects projects={projects} isFeatured={true} />

        <br />

        <h1 className='text-5xl font-bold text-left p-2 mt-10 pb-5'>
          {" "}
          Other Projects
        </h1>
        <ExtraProjects projects={projects} isFeatured={false} />
      </div>
    </div>
  );
}

export default App;
