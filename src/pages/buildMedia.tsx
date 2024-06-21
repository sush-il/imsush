import { useContext, useState } from "react";
import MediaRow from "../components/mediaRow";
import Navbar from "../components/navbar";
import { mainDataType } from "../utils/dataTypes";
import { DataContext } from "../utils/dataContext";
// import data from "../utils/data/allData";

const BuildMedia = () => {
    const data = useContext<mainDataType>(DataContext);
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