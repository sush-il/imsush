const TechUsed:React.FC<{techList: string[]}> = ({techList}) => {
    return(
        <div className="font-mono flex flex-row gap-2 text-gray-200">
        {    techList.map((techItem) => (
                <div className="bg-teal-400 font-extralight text-xs bg-opacity-20 rounded-lg p-1">
                    {techItem}
                </div>
            ))
        }
        </div>
    )
}

export default TechUsed;