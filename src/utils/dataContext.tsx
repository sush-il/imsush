import { createContext, useState, useEffect } from 'react';
import { getMainData } from './appFunctions';
import { buildsDataType, mainDataType, projectDataType } from './dataTypes';

export const DataContext = createContext<mainDataType>({});

export const DataProvider = ({ children }) => {

    const [allProjects, setAllProjects] = useState<projectDataType[]>([]);
    const [allBuilds, setAllBuilds] = useState<buildsDataType>({
      web: [],
      leetcode: [],
      other: []
    });


    useEffect(()=>{
        const getData = async()=>{
          const data = await getMainData();
          setAllProjects(data.projects);
          setAllBuilds(data.buildData);
        }
        
        getData();
    },[])

  return (
    <DataContext.Provider value={{projectsData: allProjects, buildData:allBuilds}}>
      {children}
    </DataContext.Provider>
  );
};
