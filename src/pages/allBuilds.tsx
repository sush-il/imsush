import { useLocation } from "react-router-dom";
import { useState } from "react";
import MediaRow from "../components/mediaRow";
import Navbar from "../components/navbar";

const AllBuilds = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { state } = useLocation();
  return (
    <div className='min-h-screen font-mono bg-slate-100 dark:bg-gray-900 dark:text-white'>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <div className={`w-full ${isOpen ? "filter blur-sm" : ""}`}>
        <MediaRow
          title=''
          dataToMap={state.data}
          sliceEnd={state.data.length}
        />
      </div>
    </div>
  );
};

export default AllBuilds;
