// data type of each project
export interface projectDataType{
    title: string,
    description: string,
    cover: string,
    githubLink: string,
    demoLink: string,
    featured: string,
    techUsed: string[]
}

// data type of each media in builds section
export interface buildsMediaType{
  type: string,
  id: string
}

// the whole builds datat types
export interface buildsDataType{
  web: buildsMediaType[],
  leetcode: buildsMediaType[],
  other: buildsMediaType[];
}

// theh whole data type stored as json
export interface mainDataType{
  projectsData: projectDataType[]
  buildData: buildsDataType
}

export interface TreeNode {
    name: string;
    id: string;
    children?: TreeNode[];
  }
  
export interface MindmapProps {
    data: TreeNode;
  }