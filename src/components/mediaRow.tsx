import { buildDataType } from "../utils/dataTypes";
import { Link } from "react-router-dom";
import MediaEmbedCard from "./mediaEmbedCard";

interface mediaRowProps {
    title:string, 
    dataToMap:buildDataType[], 
    sliceStart?:number, 
    sliceEnd?:number,
}

const MediaRow:React.FC<mediaRowProps> = ({title, dataToMap, sliceStart=0, sliceEnd=3}) => {
    return(
        <div className="w-full font-mono p-3 flex flex-col bg-slate-100 text-black dark:bg-gray-900  dark:text-white">
            <div className={`container self-center`}>                
                {title && <div className="w-full p-3 flex justify-between items-center">
                    <h1 className="text-2xl font-bold"> {title} </h1>
                    <Link to="/allBuilds" state={{data: dataToMap}}>
                        <button className = "transition-colors duration-300 text-xs rounded-md p-3 border-2 border-solid border-teal-400 hover:bg-teal-400">
                            View more
                        </button>
                    </Link>
                </div>}

                <div className="w-full grid grid-cols-3"> 
                    {
                        dataToMap && dataToMap.slice(sliceStart,sliceEnd).map((build)=>{
                            if(build.type === "video"){
                                return <MediaEmbedCard embedLink={build.id} />
                            }else if(build.type === "playlist"){
                                const embedLink = `videoseries?list=${build.id}`
                                return <MediaEmbedCard embedLink={embedLink} />
                            }
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default MediaRow;