import { useState } from "react";
import Navbar from "../components/navbar";

interface CompanyProps {
  title: string;
  date: string;
  description: string[];
}

const ExperiencePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selectedCompany, setSelectedCompany] = useState<string>("Upstatement");

  const companies: { [key: string]: CompanyProps } = {
    Upstatement: {
      title: "Lead Engineer @ Upstatement",
      date: "May 2018 – Present",
      description: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      ],
    },
    Apple: {
      title: "Software Engineer @ Apple",
      date: "Apr 2016 – May 2018",
      description: [
        "Worked on enhancing the performance and scalability of Apple’s core services.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Provided technical guidance and mentorship to junior engineers.",
        "Participated in code reviews and contributed to improving the codebase.",
      ],
    },
    // Add other companies here...
    "Scout Studio": {
      title: "Frontend Developer @ Scout Studio",
      date: "Jan 2014 – Mar 2016",
      description: [
        "Developed responsive web applications for various clients.",
        "Worked closely with designers to create intuitive user interfaces.",
        "Implemented state management solutions using Redux.",
        "Ensured cross-browser compatibility and optimized performance.",
      ],
    },

    Starry: {
      title: "Intern @ Starry",
      date: "Jun 2013 – Dec 2013",
      description: [
        "Assisted in the development of the company’s main product.",
        "Wrote unit tests and performed debugging tasks.",
        "Participated in team meetings and contributed ideas for product improvement.",
        "Conducted research on new technologies and presented findings to the team.",
      ],
    },
    MullenLowe: {
      title: "Junior Developer @ MullenLowe",
      date: "Jan 2012 – May 2013",
      description: [
        "Worked on building and maintaining client websites.",
        "Collaborated with designers and project managers to deliver projects on time.",
        "Learned and applied new technologies to improve development processes.",
        "Provided support and troubleshooting for technical issues.",
      ],
    },
  };

  return (
    <div className='flex flex-col min-h-screen font-mono dark:bg-gray-900 dark:text-white'>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <div
        className={`container flex flex-col justify-center mx-auto md:h-dvh ${
          isOpen ? "filter blur-sm" : ""
        }`}>
        <h2 className='text-3xl font-bold text-teal-400 pb-3'>
          01. Where I’ve Worked
        </h2>
        <div className='flex items-center p-3 min-h-96'>
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
