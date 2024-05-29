// src/components/Navbar.js
import { Link } from 'react-router-dom';
import ThemeToggle from './themeToogle';

const Navbar:React.FC<{isOpen:boolean, toggleMenu: ()=>void}> = ({isOpen, toggleMenu}) => {

  return (
    <nav className="bg-slate-100 dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                ImSush
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/projects" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </Link>
                <Link to="/builds" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Builds
                </Link>
                <Link to="/photography" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Photography
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* ${isOpen ? 'block' : 'hidden'} */}
      <div className={`md:hidden transition-all duration-200 fixed w-full z-10 ${isOpen ? '-translate-x-3': ' translate-x-full'}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 float-right text-right h-screen'>
          <Link to="/" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/projects" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
            Projects
          </Link>
          <Link to="/builds" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
            Builds
          </Link>
          <Link to="/photography" className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
            Photography
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
