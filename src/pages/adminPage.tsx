import { useState, useEffect } from "react";
import AddButton from "../components/adminAddButton";
import SidePanel from "../components/adminSidePanel";
import { buildsDataType, projectDataType } from "../utils/dataTypes";
import Login from "./login";

const AdminPage = () => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  if (isAuthenticated !== "true") {
    return <Login />;
  }

  const pantryId = import.meta.env.VITE_PANTRYID as string;
  const basketName = import.meta.env.VITE_PANTRYBASKETNAME as string;

  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [projects, setProjects] = useState<projectDataType[]>([]);
  const [builds, setBuilds] = useState<buildsDataType>({
    web: [],
    leetcode: [],
    other: [],
  });

  useEffect(() => {
    const allCurrentProjects: string | null =
      sessionStorage.getItem("currentProjects");
    const allCurrentBuilds: string | null =
      sessionStorage.getItem("currentBuildsData");

    if (allCurrentProjects !== null) {
      try {
        const parsedProjects = JSON.parse(
          allCurrentProjects
        ) as projectDataType[];
        const parsedBuilds = allCurrentBuilds
          ? (JSON.parse(allCurrentBuilds) as buildsDataType)
          : { web: [], leetcode: [], other: [] };
        setProjects(parsedProjects);
        setBuilds(parsedBuilds);
      } catch (error) {
        console.error("Error parsing projects data:", error);
      }
    } else {
      console.log("No projects found in sessionStorage");
    }
  }, []);

  const handleAddButtonClick = () => {
    setSidePanelOpen(true);
  };

  const addItem = async (
    type: string,
    newData: projectDataType[] | buildsDataType
  ) => {
    let dataToAdd = null;

    if (type === "project") {
      dataToAdd = { projects: newData };
    } else if (type === "build") {
      dataToAdd = { buildData: newData };
    }

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToAdd),
    };
    try {
      await fetch(
        `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketName}`,
        options
      );
    } catch (error) {
      console.error("Couldn't add item to the API: " + error);
    }
  };

  const closeSidePanel = (
    type?: "project" | "build" | "card" | null,
    newData?: projectDataType | buildsDataType // : { web: [], leetcode: [], other: [] }
  ) => {
    if (type === "project" && newData) {
      const dataToAdd = [...projects, newData] as projectDataType[];
      addItem(type, [newData as projectDataType]);
      setProjects(dataToAdd);
    } else if (type === "build" && newData) {
      const dataToAdd = newData as buildsDataType;
      if (dataToAdd.web.length > 0) {
        builds.web.push(dataToAdd.web[0]);
        addItem(type, builds);
      } else if (dataToAdd.leetcode.length > 0) {
        builds.leetcode.push(dataToAdd.leetcode[0]);
        addItem(type, builds);
      } else if (dataToAdd.other.length > 0) {
        builds.other.push(dataToAdd.other[0]);
        addItem(type, builds);
      }
    }

    setSidePanelOpen(false);
  };

  return (
    <div className='w-full min-h-screen font-mono flex flex-col bg-slate-200 text-black dark:bg-gray-900  dark:text-white p-3'>
      <h1 className='p-3'>Welcome to the Admin Page</h1>
      <h1 className='text-4xl font-bold p-3'> Projects </h1>
      <div className='grid grid-cols-4 gap-3'>
        {projects.map((project, index) => (
          <div key={index} className='mb-4 p-4 shadow rounded'>
            <h2 className='text-2xl font-bold'>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} className='text-blue-600'>
              {project.githubLink}
            </a>
            {project.featured === "true" && (
              <div className='mt-2 text-green-600 font-bold'>Featured</div>
            )}
            <div className='mt-2'>
              <strong>Tech Used:</strong> {project.techUsed.join(", ")}
            </div>
          </div>
        ))}
      </div>

      <h1 className='text-4xl font-bold p-3'> Builds </h1>
      <div className='grid grid-cols-4 gap-3'>
        {builds.web.map((build, index) => {
          let preType;
          if (build.type === "video") {
            preType = `https://www.youtube.com/watch?v=${build.id}`;
          } else if (build.type === "playlist") {
            preType = `https://www.youtube.com/playlist?list=${build.id}`;
          }
          return (
            <div key={index} className='mb-4 p-4 shadow rounded'>
              <h2 className='text-2xl font-bold'>{build.type}</h2>
              <a target='_blank' href={preType}>
                {" "}
                {build.id}
              </a>
            </div>
          );
        })}

        {builds.other.map((build, index) => {
          let preType;
          if (build.type === "video") {
            preType = `https://www.youtube.com/watch?v=${build.id}`;
          } else if (build.type === "playlist") {
            preType = `https://www.youtube.com/playlist?list=${build.id}`;
          }
          return (
            <div key={index} className='mb-4 p-4 shadow rounded'>
              <h2 className='text-2xl font-bold'>{build.type}</h2>
              <a target='_blank' href={preType}>
                {" "}
                {build.id}
              </a>
            </div>
          );
        })}

        {builds.leetcode.map((build, index) => {
          let preType;
          if (build.type === "video") {
            preType = `https://www.youtube.com/watch?v=${build.id}`;
          } else if (build.type === "playlist") {
            preType = `https://www.youtube.com/playlist?list=${build.id}`;
          }
          return (
            <div key={index} className='mb-4 p-4 shadow rounded'>
              <h2 className='text-2xl font-bold'>{build.type}</h2>
              <a target='_blank' href={preType}>
                {" "}
                {build.id}
              </a>
            </div>
          );
        })}
      </div>
      <AddButton onClick={handleAddButtonClick} />
      {isSidePanelOpen && <SidePanel onClose={closeSidePanel} />}
    </div>
  );
};

export default AdminPage;
