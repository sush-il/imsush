export interface projectData{
    title: string,
    description: string,
    cover: string,
    githubLink: string,
    demoLink: string,
    featured: string,
    techUsed: string[]
}

export interface buildDataType{
    type: string,
    id: string
}

export interface TreeNode {
    name: string;
    id: string;
    children?: TreeNode[];
  }
  
export interface MindmapProps {
    data: TreeNode;
  }