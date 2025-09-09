import { useState } from "react";
import Navbar from "../components/navbar";
import companies from "../utils/data/workedCompaniesData";

const ExperiencePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selectedCompany, setSelectedCompany] = useState<string>("SquaredUp");

  return (
    <div className='flex flex-col min-h-screen font-mono dark:bg-gray-900 dark:text-white'>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <a
        className='container self-center p-2 flex justify-end w-full mt-5'
        target='_blank'
        href='/cv'>
        <button className='w-32 border-2 border-solid rounded-lg bg-teal-400 bg-opacity-80 text-lg font-bold tracking-widest border-white p-3 hover:bg-opacity-100'>
          <h1 className=''> CV </h1>
        </button>
      </a>
      <div
        className={`container flex flex-col justify-center mx-auto p-3 ${
          isOpen ? "filter blur-sm" : ""
        }`}>
        <h2 className='text-3xl font-bold text-teal-400 pb-3'>
          01. Where I’ve Worked
        </h2>
        <div className='flex p-3 '>
          <div className='w-1/4'>
            <ul className='text-gray-400'>
              {Object.keys(companies).map((company) => (
                <li
                  key={company}
                  className={`text-teal-400 pb-3 mb-4 cursor-pointer hover:text-white ${
                    selectedCompany === company ? "text-white" : ""
                  }`}
                  onClick={() => setSelectedCompany(company)}>
                  {company}
                </li>
              ))}
            </ul>
          </div>

          <div className='w-3/4 pl-8 text-left'>
            <h3 className='text-2xl font-bold'>
              {companies[selectedCompany].title}
            </h3>
            <p className='text-gray-400 mb-4'>
              {companies[selectedCompany].date}
            </p>
            <ul className='list-disc list-inside space-y-2'>
              {companies[selectedCompany].description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
