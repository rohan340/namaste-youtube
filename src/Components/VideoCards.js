const VideoCards = ({ info })=>{

    const { snippet, statistics  } = info;
    const { thumbnails, title } = snippet;

    return(
        <div className="flex flex-col">
            <img className="rounded" src={ thumbnails.medium.url} alt="thumbnail" />
            <h1>{ title }</h1>
        </div>
    )
}

export default VideoCards;