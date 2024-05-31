const MediaEmbedCard:React.FC<{embedLink:string}> = ({embedLink}) => {
    console.log(embedLink);
    return (
        <div className="p-3 w-full">
            <iframe 
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${embedLink}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>

    )
}

export default MediaEmbedCard;