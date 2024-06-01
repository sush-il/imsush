const TechUsed:React.FC<{techList: string[]}> = ({techList}) => {
    return(
        <div className="gap-2 font-mono flex flex-row flex-wrap text-gray-200">
        {    techList.map((techItem,index) => (
                <div key={index} className="bg-teal-400 font-extralight text-xs bg-opacity-20 rounded-lg p-1">
                    {techItem}
                </div>
            ))
        }
        </div>
    )
}

export default TechUsed;