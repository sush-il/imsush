import { useState } from "react";
import MediaRow from "../components/mediaRow";
import Navbar from "../components/navbar";
import data from "../utils/fakeData.json";

const BuildMedia = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col">
            <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
            <div className={`${isOpen ? 'filter blur-sm' : ''}`}>
                <MediaRow title="Web" dataToMap={data.buildData.web} />
                <MediaRow title="LeetCode" dataToMap={data.buildData.leetcode} />
                <MediaRow title="Other" dataToMap={data.buildData.other} />
            </div>
        </div>
    )
}

export default BuildMedia;