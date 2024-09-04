import { formatViewsCount, convertToRelativeTime } from "../Hooks/useFormatDateView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SearchResultsCards = ({ info })=>{
    const { snippet, statistics  } = info;
    const { channelTitle, thumbnails, title, description, publishedAt } = snippet;
    return(
        <div className="flex w-[74rem] ml-3 mt-3 gap-4 p-2 cursor-pointer">
            <img className="rounded-xl" src={ thumbnails.medium.url} alt="thumbnail" />
            <div className="flex flex-col w-[71%] gap-4">
                <h1 className="font-bold truncate">{ title }</h1>
                <div className="flex items-center text-xs font-semibold text-gray-500 gap-2">
                    <p>{ channelTitle }</p>
                    <FontAwesomeIcon style={{ fontSize: '6px' }} icon={faCircle} />
                    <p>{ formatViewsCount(statistics.viewCount) } views</p>
                    <FontAwesomeIcon style={{ fontSize: '6px' }} icon={faCircle} />
                    <p>{ formatViewsCount(statistics.commentCount) } comments</p>
                    <FontAwesomeIcon style={{ fontSize: '6px' }} icon={faCircle} />
                    <p>{ formatViewsCount(statistics.likeCount) } likes</p>
                </div>
                <span className="truncate">{ description }</span>
                <p>{ convertToRelativeTime(publishedAt) } </p>
            </div>
        </div>
    )
}

export default SearchResultsCards;