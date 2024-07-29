import { Link } from "react-router-dom";

interface linkCardProps {
  title: string;
  linksTo: string;
  newTab?: boolean;
}

const ExtraLinkCards: React.FC<linkCardProps> = ({
  title,
  linksTo,
  newTab,
}) => {
  if (!newTab) {
    return (
      <Link to={linksTo}>
        <div className='flex justify-center items-center h-16 rounded-lg border-2 border-white hover:bg-slate-800 md:h-52'>
          <h1 className='text-2xl font-bold p-2  '> {title} </h1>
        </div>
      </Link>
    );
  }

  return (
    <a href={linksTo} target='_blank'>
      <div className='flex justify-center items-center h-16 rounded-lg border-2 border-white hover:bg-slate-800 md:h-52'>
        <h1 className='text-2xl font-bold p-2  '> {title} </h1>
      </div>
    </a>
  );
};

export default ExtraLinkCards;
