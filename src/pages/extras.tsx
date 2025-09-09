import { useState } from "react";
import Navbar from "../components/navbar";
import ExtraLinkCards from "../components/extraLinkCards";
import extraLinkList from "../utils/data/extrasCardData";

const Extras = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full min-h-screen font-mono flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white p-3 `}>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />

      <div className='mt-3 self-center container bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6'>
        <h1 className='text-2xl font-bold mb-4'>What's this about?</h1>
        <p className='text-lg'>
          Welcome to the Extras page! Think of this as my personal playground,
          where I jot down notes and record information for my own reference.
          But don't be shy, feel free to peek around! Here, you'll find a mix of
          my university course materials, ambitious goals, ongoing projects, and
          other intriguing bits that make up my academic and personal journey.
          Dive in and explore if you wish!
        </p>
      </div>

      <div className='container self-center grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {extraLinkList.map((element) => (
          <ExtraLinkCards title={element.title} linksTo={element.path} />
        ))}
      </div>

      {/* <div className="w-full">
            <Mindmap data={ml.unsupervisedLearning} />
          </div> */}
    </div>
  );
};

export default Extras;
