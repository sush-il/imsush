import { useState } from "react";
import MediaRow from "../components/mediaRow";
import Navbar from "../components/navbar";
import data from "../utils/allData.json";

const BuildMedia = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col">
            <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
            <div className={`${isOpen ? 'filter blur-sm' : ''}`}>
                {data.buildData.web.length > 0 && <MediaRow title="Web" dataToMap={data.buildData.web} />}
                {data.buildData.leetcode.length > 0 && <MediaRow title="LeetCode" dataToMap={data.buildData.leetcode} />}
                {data.buildData.other.length > 0 && <MediaRow title="Other" dataToMap={data.buildData.other} />}
            </div>
        </div>
    )
}

export default BuildMedia;