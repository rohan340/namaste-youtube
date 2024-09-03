import { formatViewsCount, convertToRelativeTime } from "../Hooks/useFormatDateView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const VideoCards = ({ info })=>{
    const { snippet, statistics  } = info;
    const { channelTitle, thumbnails, title, publishedAt } = snippet;

    return(
        <div className="flex flex-col gap-3 w-[310px] h-[300px] cursor-pointer">
            <img className="rounded-[15px]" src={ thumbnails.medium.url} alt="thumbnail" />
            <div className="flex flex-col">
                <h1 className="font-bold">{ title }</h1>
                <div className="flex items-center text-xs font-semibold text-gray-500 gap-[5px]">
                    <p>{ channelTitle }</p>
                    <FontAwesomeIcon style={{ fontSize: '6px' }} icon={faCircle} />
                    <p>{ formatViewsCount(statistics.viewCount) } views</p>
                    <FontAwesomeIcon style={{ fontSize: '6px' }} icon={faCircle} />
                    <p>{ convertToRelativeTime(publishedAt) } </p>
                </div>
                
            </div>
        </div>
    )
}

export default VideoCards;