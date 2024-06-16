import { useState } from 'react';
import Navbar from '../components/navbar';
import Mindmap from '../components/mindmap';
import courseData from "../utils/data/courseMindmapData.json";


const Extras = () => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
     
      return (
        // ${isOpen ? 'filter blur-sm' : ''}
        <div className={`w-full min-h-screen font-mono flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white p-3 `}>
          <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
          <div className="flex min-h-screen w-full h-screen">
            <Mindmap data={courseData.hci} />
          </div>
        </div>
      );   
    
}

export default Extras;

