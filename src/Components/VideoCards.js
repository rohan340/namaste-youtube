const VideoCards = ({ info })=>{

    const { snippet, statistics  } = info;
    const { channelTitle, thumbnails, title } = snippet;

    return(
        <div className="flex flex-col gap-4 p-2 shadow-md w-72 cursor-pointer">
            <img className="rounded" src={ thumbnails.medium.url} alt="thumbnail" />
            <div className="flex flex-col">
                <h1 className="font-bold truncate">{ title }</h1>
                <p>{ channelTitle }</p>
                <p>{ statistics.viewCount }</p>
            </div>
        </div>
    )
}

export default VideoCards;