import { useState } from "react";
import ExtraLinkCards from "../components/extraLinkCards";
import Navbar from "../components/navbar";

const UniModuleList = () => {
  const moduleList = [
    "Artificial Intelligence",
    "Data structures & Algorithms",
    "Functional Programming",
    "Human Computer Interaction",
    "Machine Learning",
    "Mathematics for Computation",
    "Visual Computing",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full min-h-screen font-mono flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white p-3'>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />

      <div className='container p-3 self-center grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {moduleList.map((moduleName) => (
          <ExtraLinkCards title={moduleName} linksTo='' />
        ))}
      </div>
    </div>
  );
};

export default UniModuleList;
