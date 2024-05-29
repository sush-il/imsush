import { useState } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import ExtraProjects from './components/extraProjects';
import ProjectSection from './components/projectSection';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full min-h-screen font-mono flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white p-3">
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <div className={`container mx-auto my-5 md:my-0 md:h-screen ${isOpen ? 'filter blur-sm' : ''}`}>
        <HeroSection />
      </div>
      <div className={`container mx-auto flex flex-col ${isOpen ? 'filter blur-sm' : ''}`}>
        <h1 className="text-5xl font-bold text-left p-2 pb-5"> Featured Projects </h1>
        <ProjectSection />
        <br />
        <h1 className="text-5xl font-bold text-left p-2 pb-5"> Other Projects</h1>
        <ExtraProjects />
      </div>
    </div>
  );
}

export default App;

