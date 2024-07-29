import { ResponsiveTree, Tree } from "@nivo/tree";
import { MindmapProps } from "../utils/dataTypes";

const Mindmap: React.FC<MindmapProps> = ({ data }) => {
  return (
    <div className='flex justify-center' style={{ height: "150vh" }}>
      <ResponsiveTree
        data={data}
        mode='tree'
        margin={{ top: 50, right: 250, bottom: 50, left: 150 }} // Adjust margins
        activeNodeSize={20}
        nodeColor={{ scheme: "paired" }}
        fixNodeColorAtDepth={1}
        linkThickness={5}
        activeLinkThickness={8}
        linkColor={{
          from: "target.color",
          modifiers: [["opacity", 0.4]],
        }}
        theme={{
          text: {
            fill: "#ffff",
            fontSize: 15,
          },
        }}
        layout='left-to-right' // Use horizontal layout for better spacing
        nodeSize={10} // Adjust node size to increase spacing
        orientLabel={false}
        linkTooltipAnchor='top' // Provide a default anchor
        meshDetectionRadius={80}
        //// Dummy functions because they are required by TS but optioinal on nivo
        onNodeMouseEnter={(event, datum) => {}}
        onNodeMouseMove={(event, datum) => {}}
        onNodeMouseLeave={(event, datum) => {}}
        onNodeClick={(event, datum) => {}}
        onLinkMouseEnter={(event, datum) => {}}
        onLinkMouseMove={(event, datum) => {}}
        onLinkMouseLeave={(event, datum) => {}}
        onLinkClick={(event, datum) => {}}
        linkTooltip={() => null}
      />
    </div>
  );
};

export default Mindmap;
