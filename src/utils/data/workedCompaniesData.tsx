import { CompanyProps } from "../dataTypes";

const companies: { [key: string]: CompanyProps } = {
  SquaredUp: {
    title: "Software Engineer Intern",
    date: "Sept 2024 – Present",
    description: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients.",
      "Develop technical solutions to fulfill business requirements.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
    ],
  },
  Tutoring: {
    title: "Tutoring",
    date: "Sept 2022 - May 2024",
    description: [
      "Tutoring students with diverse needs, requiring effective communication, adaptability, and problem-solving.",
      "Managing, planing and delivering high quality lessons to students",
    ],
  },
  Education: {
    title: "University of Bath",
    date: "Oct 2022 - June 2026",
    description: [
      "Expected Grade - First Class",
      // <a target='_blank' href='\uni' className='text-teal-400 hover:text-white'>
      //   View All Modules Taken
      // </a>,
    ],
  },
};

export default companies;
