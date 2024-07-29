import React, { useState } from "react";
import { buildsDataType, projectDataType } from "../utils/dataTypes";

interface SidePanelProps {
  onClose: (
    type?: "project" | "build" | null,
    newData?: projectDataType | buildsDataType
  ) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ onClose }) => {
  const [type, setType] = useState<"project" | "build" | null>(null);
  const [mediaType, setMediaType] = useState<"video" | "playlist" | null>(null);
  const [mediaCategory, setMediaCategory] = useState<
    "web" | "leetcode" | "other" | null
  >(null);
  const [mediaId, setMediaId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [techUsed, setTechUsed] = useState("");

  const handleSubmit = () => {
    const techArray = techUsed.split(",").map((tech) => tech.trim());

    if (type === "project") {
      onClose("project", {
        featured: isFeatured ? "true" : "false",
        title,
        description,
        cover,
        githubLink,
        demoLink,
        techUsed: techArray,
      });
    } else if (type === "build") {
      if (mediaCategory === "web" && mediaType) {
        onClose("build", {
          web: [
            {
              type: mediaType,
              id: mediaId,
            },
          ],
          leetcode: [],
          other: [],
        });
      } else if (mediaCategory === "leetcode" && mediaType) {
        onClose("build", {
          web: [],
          leetcode: [
            {
              type: mediaType,
              id: mediaId,
            },
          ],
          other: [],
        });
      } else if (mediaCategory === "other" && mediaType) {
        onClose("build", {
          web: [],
          leetcode: [],
          other: [
            {
              type: mediaType,
              id: mediaId,
            },
          ],
        });
      }
    }
  };

  return (
    <div className='fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-8 overflow-y-auto'>
      <button
        onClick={() => onClose()}
        className='text-gray-500 hover:text-gray-800 mb-4'>
        Close
      </button>
      <div className='flex flex-col mb-4'>
        <label className='mb-2'>Type</label>
        <select
          value={type || ""}
          onChange={(e) => setType(e.target.value as "project" | "build")}
          className='p-2 border rounded'>
          <option value='' disabled>
            Select type
          </option>
          <option value='project'>Project</option>
          <option value='build'>Build</option>
        </select>
      </div>

      {type === "project" && (
        <>
          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='p-2 border rounded'
              placeholder='Project Title'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='p-2 border rounded'
              placeholder='Project Description'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Cover Image URL</label>
            <input
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              className='p-2 border rounded'
              placeholder='Image URL'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>GitHub Link</label>
            <input
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className='p-2 border rounded'
              placeholder='GitHub URL'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Demo Link</label>
            <input
              value={demoLink}
              onChange={(e) => setDemoLink(e.target.value)}
              className='p-2 border rounded'
              placeholder='Demo URL'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Tech Used (comma separated)</label>
            <input
              value={techUsed}
              onChange={(e) => setTechUsed(e.target.value)}
              className='p-2 border rounded'
              placeholder='e.g., React, TypeScript, Tailwind CSS'
            />
          </div>

          <div className='flex items-center mb-4'>
            <input
              type='checkbox'
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className='mr-2'
            />
            <label>Featured</label>
          </div>
        </>
      )}

      {type === "build" && (
        <>
          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Media Type</label>
            <select
              value={mediaType || ""}
              onChange={(e) =>
                setMediaType(e.target.value as "video" | "playlist")
              }
              className='p-2 border rounded'>
              <option value='' disabled>
                Select type
              </option>
              <option value='video'>Video</option>
              <option value='playlist'>Playlist</option>
            </select>
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Media Category</label>
            <select
              value={mediaCategory || ""}
              onChange={(e) =>
                setMediaCategory(e.target.value as "web" | "leetcode" | "other")
              }
              className='p-2 border rounded'>
              <option value='' disabled>
                Select type
              </option>
              <option value='web'>Web</option>
              <option value='leetcode'>Leet Code</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div className='flex flex-col mb-4'>
            <label className='mb-2'>Youtube ID</label>
            <input
              value={mediaId}
              onChange={(e) => setMediaId(e.target.value)}
              className='p-2 border rounded'
              placeholder='dQw4w9WgXcQ'
            />
          </div>
        </>
      )}

      <button
        onClick={handleSubmit}
        className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
        Submit
      </button>
    </div>
  );
};

export default SidePanel;
